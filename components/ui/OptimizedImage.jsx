'use client'

import { useState, useCallback, memo } from 'react'
import Image from 'next/image'

// Constante pour le placeholder par défaut - définie en dehors du composant pour éviter les recréations
const DEFAULT_BLUR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZGRkNmZlIiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+';

function OptimizedImage({ 
  src, 
  alt, 
  className, 
  priority = false,
  quality = 85, 
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Utilisation de blurDataURL directement sans useState inutile
  const actualBlurDataURL = blurDataURL || DEFAULT_BLUR_DATA_URL;

  // Mémoisation de la fonction avec useCallback pour éviter les recréations inutiles
  const getImageTitle = useCallback(() => {
    if (props.title) return props.title;
    
    const fileName = src.split('/').pop().split('.')[0];
    return fileName
      .replace(/-|_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }, [src, props.title]);

  // Mémoisation de la fonction de callback
  const imageLoadingComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Utilisation de transform: translateZ(0) pour forcer l'accélération GPU
  const imageStyle = {
    transform: 'translateZ(0)'
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        title={alt}
        sizes={sizes}
        quality={quality}
        loading={priority ? 'eager' : loading}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={actualBlurDataURL}
        onLoad={imageLoadingComplete}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={imageStyle}
        {...props}
      />
      
      {!isLoaded && !priority && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse"
          aria-hidden="true"
          style={{ 
            willChange: 'opacity',
            transform: 'translateZ(0)' // Force l'accélération GPU
          }}
        />
      )}
    </div>
  );
}

// Mémoisation du composant pour éviter les rendus inutiles
export default memo(OptimizedImage);
