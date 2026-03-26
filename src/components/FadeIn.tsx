import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	delay?: number;
	className?: string;
}

export function FadeIn({ children, delay = 0, className }: Props) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-40px' }}
			transition={{ duration: 0.3, ease: 'easeOut', delay }}
		>
			{children}
		</motion.div>
	);
}
