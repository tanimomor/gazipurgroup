'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ServiceCardImageProps {
  images: { large: string; small1: string; small2: string };
  title: string;
  isHovered: boolean;
}

export default function ServiceCardImage({ images, title, isHovered }: ServiceCardImageProps) {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isFirstTransition, setIsFirstTransition] = useState(true);
  const imageArray = [images.large, images.small1, images.small2];

  // Rotate images - first transition immediately, then every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      setIsFirstTransition(true);
      return;
    }

    // First transition happens immediately
    if (isFirstTransition) {
      setCurrentRotation((prev) => (prev + 1) % 3);
      setIsFirstTransition(false);
      return;
    }

    // Subsequent transitions every 3 seconds
    const interval = setInterval(() => {
      setCurrentRotation((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, isFirstTransition]);

  // Get current image for each position based on rotation
  const getLargeImage = () => imageArray[currentRotation];
  const getSmall1Image = () => imageArray[(currentRotation + 1) % 3];
  const getSmall2Image = () => imageArray[(currentRotation + 2) % 3];

  return (
    <div className="w-full h-full">
      {/* Grid Layout: 1 Large + 2 Small */}
      <div className="grid grid-cols-3 gap-3 h-full">
        {/* Large Image - Takes full height on left side */}
        <div className="relative col-span-2 row-span-2 h-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl group">
          {/* Stack all images with crossfade */}
          {imageArray.map((img, index) => (
            <div
              key={`large-${index}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentRotation ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={img}
                alt={`${title} - Image ${index + 1}`}
                fill
                className={`object-cover object-center w-full h-full transition-transform duration-700 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          ))}
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>

        {/* Small Image 1 - Top right */}
        <div className="relative h-full min-h-[193px] overflow-hidden rounded-2xl shadow-lg group">
          {/* Stack all images with crossfade */}
          {imageArray.map((img, index) => (
            <div
              key={`small1-${index}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === (currentRotation + 1) % 3 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={img}
                alt={`${title} - Image ${index + 1}`}
                fill
                className={`object-cover transition-transform duration-700 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          ))}
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>

        {/* Small Image 2 - Bottom right */}
        <div className="relative h-full min-h-[193px] overflow-hidden rounded-2xl shadow-lg group">
          {/* Stack all images with crossfade */}
          {imageArray.map((img, index) => (
            <div
              key={`small2-${index}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === (currentRotation + 2) % 3 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={img}
                alt={`${title} - Image ${index + 1}`}
                fill
                className={`object-cover transition-transform duration-700 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          ))}
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>
      </div>
    </div>
  );
}
