interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

/** Tracked uppercase chapter-mark label — the editorial signature. */
export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return <p className={`eyebrow ${className}`}>{children}</p>
}
