import { metaData } from '@/config';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import type { PhotoItem, PhotosResponse } from '../../functions/api/photos';

const ALL_TAB = 'all';

const SKELETON_ASPECTS = [
	'aspect-[3/4]',
	'aspect-[3/2]',
	'aspect-square',
	'aspect-[4/5]',
	'aspect-[3/2]',
	'aspect-[2/3]',
];

const pulse = {
	initial: { opacity: 0.4 },
	animate: { opacity: [0.4, 0.8, 0.4] },
	transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' } as const,
};

// Module-level cache — survives tab switches and back-navigation
const cache: { photos: PhotoItem[]; cursor: string | null } = {
	photos: [],
	cursor: null,
};

async function fetchPage(cursor?: string): Promise<PhotosResponse> {
	const url = cursor ? `/api/photos?cursor=${cursor}` : '/api/photos';
	const res = await fetch(url);
	const data = (await res.json()) as PhotosResponse | PhotoItem[];
	// Handle old array format from pre-pagination API
	if (Array.isArray(data)) return { photos: data, cursor: null };
	return data;
}

function SkeletonGrid() {
	return (
		<div className="columns-1 sm:columns-2 gap-3">
			{SKELETON_ASPECTS.map((aspect, i) => (
				<motion.div
					key={i}
					className={`w-full ${aspect} bg-[#e0e0e0] mb-3 break-inside-avoid`}
					{...pulse}
					transition={{ ...pulse.transition, delay: i * 0.1 }}
				/>
			))}
		</div>
	);
}

function PhotoCard({ photo }: { photo: PhotoItem }) {
	const [inView, setInView] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ rootMargin: '200px' }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative mb-3 break-inside-avoid overflow-hidden bg-[#e0e0e0]"
		>
			{!loaded && <motion.div className="absolute inset-0" {...pulse} />}
			<div className={!loaded ? 'aspect-[3/4]' : undefined} aria-hidden />
			{inView && (
				<motion.img
					src={photo.url}
					alt={photo.key}
					onLoad={() => setLoaded(true)}
					className={`w-full h-auto block ${!loaded ? 'absolute inset-0 h-full object-cover' : ''}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: loaded ? 1 : 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				/>
			)}
		</div>
	);
}

export default function Photos() {
	const [photos, setPhotos] = useState<PhotoItem[]>(cache.photos ?? []);
	const [cursor, setCursor] = useState<string | null>(cache.cursor ?? null);
	const [initialLoading, setInitialLoading] = useState(
		(cache.photos ?? []).length === 0
	);
	const [loadingMore, setLoadingMore] = useState(false);
	const [activeTab, setActiveTab] = useState(ALL_TAB);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);
	const sentinelRef = useRef<HTMLDivElement>(null);

	// Initial load — skip if cache is warm
	useEffect(() => {
		if (cache.photos.length > 0) return;
		fetchPage().then(({ photos: p, cursor: c }) => {
			cache.photos = p;
			cache.cursor = c;
			setPhotos(p);
			setCursor(c);
			setInitialLoading(false);
		});
	}, []);

	// Infinite scroll — watch sentinel at bottom of list
	useEffect(() => {
		const sentinel = sentinelRef.current;
		if (!sentinel || !cursor) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting || loadingMore) return;
				setLoadingMore(true);
				fetchPage(cursor).then(({ photos: p, cursor: c }) => {
					cache.photos = [...cache.photos, ...p];
					cache.cursor = c;
					setPhotos(cache.photos);
					setCursor(c);
					setLoadingMore(false);
				});
			},
			{ rootMargin: '400px' }
		);
		observer.observe(sentinel);
		return () => observer.disconnect();
	}, [cursor, loadingMore]);

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
		setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
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
				A collection of my photos. Taken on a mix of film and digital.
			</p>

			{!initialLoading && tags.length > 1 && (
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

			{initialLoading ? (
				<SkeletonGrid />
			) : (
				<>
					<div className="columns-1 sm:columns-2 gap-3">
						{visible.map((photo) => (
							<PhotoCard key={photo.key} photo={photo} />
						))}
					</div>

					{/* Sentinel: triggers next page load when scrolled into view */}
					{cursor && (
						<div
							ref={sentinelRef}
							className="h-16 flex items-center justify-center"
						>
							{loadingMore && (
								<motion.div
									className="w-5 h-5 rounded-full border-2 border-[#e0e0e0] border-t-[#999]"
									animate={{ rotate: 360 }}
									transition={{
										duration: 0.8,
										repeat: Infinity,
										ease: 'linear',
									}}
								/>
							)}
						</div>
					)}
				</>
			)}
		</section>
	);
}
