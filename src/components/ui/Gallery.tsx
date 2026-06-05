import type { Img } from '@/data/types'

interface GalleryProps {
  images: Img[]
  columns?: 2 | 3
}

/** Responsive image grid with hairline frames, lazy loading and authored alt text. */
export function Gallery({ images, columns = 3 }: GalleryProps) {
  if (images.length === 0) return null
  const cols = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
  return (
    <div className={`grid grid-cols-1 ${cols} gap-3`}>
      {images.map((img) => (
        <figure key={img.src} className="overflow-hidden border border-line">
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </figure>
      ))}
    </div>
  )
}
