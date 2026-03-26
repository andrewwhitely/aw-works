export function MichelinStar({ count = 1 }: { count?: number }) {
	return (
		<span
			className="inline-flex items-center gap-0.5 align-middle"
			aria-label={`${count} Michelin star${count !== 1 ? 's' : ''}`}
		>
			{Array.from({ length: count }).map((_, i) => (
				<img
					key={i}
					src="/michelin-star.svg"
					alt=""
					aria-hidden="true"
					width={14}
					height={14}
					className="inline-block"
				/>
			))}
		</span>
	);
}
