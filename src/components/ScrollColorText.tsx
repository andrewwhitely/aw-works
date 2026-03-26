import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
} from 'motion/react';
import {
	ElementType,
	HTMLAttributes,
	ReactNode,
	useEffect,
	useRef,
} from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
	children?: ReactNode;
}

function interpolateColor(t: number): string {
	// #aaaaaa → #111111
	const from = 0xaa;
	const to = 0x11;
	const v = Math.round(from + (to - from) * Math.min(1, Math.max(0, t)));
	const hex = v.toString(16).padStart(2, '0');
	return `#${hex}${hex}${hex}`;
}

export function ScrollColorText({
	as = 'p',
	children,
	className,
	style,
	...props
}: Props) {
	const ref = useRef<HTMLElement>(null);
	const color = useMotionValue('#aaaaaa');
	const { scrollY } = useScroll();

	const update = () => {
		const el = ref.current;
		if (!el) return;

		const rect = el.getBoundingClientRect();
		const vh = window.innerHeight;

		// When the page is fully scrolled, show all visible elements at full color
		const atPageEnd =
			window.scrollY + vh >= document.documentElement.scrollHeight - 4;
		if (atPageEnd && rect.top >= 0 && rect.top < vh) {
			color.set('#111111');
			return;
		}

		const readingLine = vh * 0.55; // fully colored above this point
		const enterLine = vh * 0.9; // starts transitioning as it enters viewport

		if (rect.top < readingLine) {
			color.set('#111111');
		} else if (rect.top < enterLine) {
			const t = 1 - (rect.top - readingLine) / (enterLine - readingLine);
			color.set(interpolateColor(t));
		} else {
			color.set('#aaaaaa');
		}
	};

	// Run on every scroll frame
	useMotionValueEvent(scrollY, 'change', update);

	// Set initial color on mount
	useEffect(() => {
		update();
	}, []);

	const MotionTag = motion[as as keyof typeof motion] as typeof motion.p;

	return (
		<MotionTag
			// @ts-expect-error ref type mismatch between motion and generic element
			ref={ref}
			style={{ color, ...style }}
			className={className}
			{...(props as object)}
		>
			{children}
		</MotionTag>
	);
}
