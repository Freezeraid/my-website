import Image from 'next/image'

export default function OptimizedImage({ src, alt, className, ...props }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
        {...props}
      />
    </div>
  )
}