import { metaData } from '@/config';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 10 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, ease: 'easeOut' as const },
	},
};

const phrases = [
	'Software Engineer.',
	'Creative Technologist.',
	'Chronic New Hobbyist.',
];

export default function Home() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % phrases.length);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	return (
		<section>
			<Helmet>
				<title>{metaData.title}</title>
				<meta name="description" content={metaData.description} />
				<meta property="og:title" content={metaData.title} />
				<meta
					property="og:description"
					content={metaData.description}
				/>
				<meta property="og:image" content={metaData.ogImage} />
				<meta property="og:url" content={metaData.baseUrl} />
				<meta name="twitter:card" content="summary_large_image" />
			</Helmet>
			<motion.div
				className="prose prose-neutral max-w-full"
				variants={container}
				initial="hidden"
				animate="show"
			>
				<motion.div
					variants={item}
					className="text-2xl font-medium tracking-tight text-[#111111] h-9 overflow-hidden relative mb-0!"
				>
					<AnimatePresence mode="wait">
						<motion.span
							key={index}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -12 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className="absolute"
						>
							{phrases[index]}
						</motion.span>
					</AnimatePresence>
				</motion.div>
				<motion.p variants={item} className="text-[#111111]">
					With nearly a decade of experience, I build end-to-end
					digital experiences—blending creativity, technical
					expertise, and a passion for turning ideas into elegant
					digital solutions.
				</motion.p>
			</motion.div>
		</section>
	);
}
