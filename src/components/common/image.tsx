import Image from 'next/image'
import { useState, useEffect } from 'react'
import { loadImage } from '@/utils/image-loader'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, width, height, className, priority }: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [error, setError] = useState(false)

  useEffect(() => {
    loadImage(src)
      .then(setImageSrc)
      .catch(() => setError(true))
  }, [src])

  if (error) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={{ width, height }}
      >
        <span className="text-gray-400">Image not available</span>
      </div>
    )
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
} 