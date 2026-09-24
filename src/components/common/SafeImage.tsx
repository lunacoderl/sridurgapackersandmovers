'use client';

import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

export function SafeImage({ src, alt, className, fallbackClassName, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return <div className={fallbackClassName || className} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
