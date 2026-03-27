import { AnimatePresence, motion } from 'motion/react';

interface Props {
	visible: boolean;
}

export function LoadingScreen({ visible }: Props) {
	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center bg-white"
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<motion.span
						className="text-sm font-medium tracking-widest text-[#111111] uppercase"
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, ease: 'easeOut' }}
					>
						<div className="h-8 w-12 overflow-hidden flex items-center justify-center animate-pulse">
							<img src="/logo.png" alt="AW" />
						</div>
					</motion.span>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
