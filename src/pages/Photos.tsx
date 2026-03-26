import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { metaData } from '@/config';
import type { PhotoItem } from '../../functions/api/photos';

const ALL_TAB = 'all';

// Varied aspect ratios to give the masonry skeleton some life
const SKELETON_ASPECTS = [
	'aspect-[3/4]',
	'aspect-[3/2]',
	'aspect-square',
	'aspect-[4/5]',
	'aspect-[3/2]',
	'aspect-[2/3]',
];

function SkeletonGrid() {
	return (
		<div className="columns-2 gap-3">
			{SKELETON_ASPECTS.map((aspect, i) => (
				<motion.div
					key={i}
					className={`w-full ${aspect} bg-[#e0e0e0] mb-3 break-inside-avoid`}
					animate={{ opacity: [0.4, 0.8, 0.4] }}
					transition={{
						duration: 1.4,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: i * 0.1,
					}}
				/>
			))}
		</div>
	);
}

function PhotoCard({ photo }: { photo: PhotoItem }) {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className="relative mb-3 break-inside-avoid overflow-hidden bg-[#e0e0e0]">
			{/* Shimmer while the image file itself is loading */}
			{!loaded && (
				<motion.div
					className="absolute inset-0 bg-[#e0e0e0]"
					animate={{ opacity: [0.4, 0.8, 0.4] }}
					transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
				/>
			)}
			<motion.img
				src={photo.url}
				alt={photo.key}
				loading="lazy"
				onLoad={() => setLoaded(true)}
				className="w-full h-auto block"
				initial={{ opacity: 0 }}
				animate={{ opacity: loaded ? 1 : 0 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
			/>
		</div>
	);
}

export default function Photos() {
	const [photos, setPhotos] = useState<PhotoItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState(ALL_TAB);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		fetch('/api/photos')
			.then((r) => r.json())
			.then((data: PhotoItem[]) => {
				setPhotos(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	const tags = [
		ALL_TAB,
		...Array.from(new Set(photos.map((p) => p.tag).filter(Boolean))),
	];

	const visible =
		activeTab === ALL_TAB
			? photos
			: photos.filter((p) => p.tag === activeTab);

	const updateScrollState = () => {
		const el = scrollRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 0);
		setCanScrollRight(
			el.scrollLeft < el.scrollWidth - el.clientWidth - 1
		);
	};

	useEffect(() => {
		updateScrollState();
		const el = scrollRef.current;
		el?.addEventListener('scroll', updateScrollState, { passive: true });
		window.addEventListener('resize', updateScrollState, { passive: true });
		return () => {
			el?.removeEventListener('scroll', updateScrollState);
			window.removeEventListener('resize', updateScrollState);
		};
	}, [tags]);

	const maskImage = [
		canScrollLeft ? 'transparent' : 'black',
		'black 24px',
		'calc(100% - 24px) black',
		canScrollRight ? 'transparent' : 'black',
	].join(', ');

	return (
		<section>
			<Helmet>
				<title>Photos | {metaData.name}</title>
				<meta name="description" content="Film photography." />
			</Helmet>
			<p className="text-sm text-[#666666] mb-6">
				Shot on Fujifilm GS645S, Yashica T4, and Fujifilm X100VI.
			</p>

			{/* Scrollable tabs with edge fade */}
			{!loading && tags.length > 1 && (
				<div
					className="relative mb-6"
					style={{
						maskImage: `linear-gradient(to right, ${maskImage})`,
						WebkitMaskImage: `linear-gradient(to right, ${maskImage})`,
					}}
				>
					<div
						ref={scrollRef}
						className="flex gap-4 overflow-x-auto"
						style={{ scrollbarWidth: 'none' }}
					>
						{tags.map((tag) => (
							<button
								key={tag}
								onClick={() => setActiveTab(tag)}
								className={`text-xs font-medium tracking-widest uppercase transition-colors shrink-0 ${
									activeTab === tag
										? 'text-[#111111]'
										: 'text-[#bbbbbb] hover:text-[#666666]'
								}`}
							>
								{tag}
							</button>
						))}
					</div>
				</div>
			)}

			{loading ? (
				<SkeletonGrid />
			) : (
				<div className="columns-2 gap-3">
					{visible.map((photo) => (
						<PhotoCard key={photo.key} photo={photo} />
					))}
				</div>
			)}
		</section>
	);
}
