export function MichelinStar({ count = 1 }: { count?: number }) {
  return (
    <span className="badge-icon" aria-label={`${count} Michelin star${count !== 1 ? 's' : ''}`}>
      {Array.from({ length: count }).map((_, i) => (
        <img key={i} src="/michelin-star.svg" alt="" aria-hidden="true" className="badge-icon-img" />
      ))}
    </span>
  )
}
