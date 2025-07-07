// components/Image.tsx
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, caption, className = '' }) => {
  return (
    <figure className={`image-container ${className}`}>
      <img src={src} alt={alt} className="image" />
      {caption && <figcaption className="image-caption">{caption}</figcaption>}
    </figure>
  );
};

export default Image;