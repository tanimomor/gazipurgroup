"use client";
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import HeroClient from './HeroClient';

export default function Hero() {
  const slides = [
    // '/nursing5.jpg',
    // '/hero_slides/1.jpg',
    '/hero_slides/3.jpg',
    '/hero_slides/2.jpg'
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Hero slide"
            fill
            priority
            className={`object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={index === current ? 'false' : 'true'}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[rgba(15,23,42,0.85)]" />
      
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-24 md:pt-48 lg:pt-56">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 md:mb-5 animate-fade-in-up">
          <div className="w-full flex justify-center">
            <span className="whitespace-nowrap">
              <span className="inline">The Gazipur Air </span>
              <span className="inline bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">International</span>
            </span>
          </div>
          <span className="block text-3xl md:text-4xl mt-3 md:mt-4 font-medium text-green-300">
            Your Skilled Workforce Solutions
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-6 md:mb-6 text-gray-200 animate-fade-in-up animation-delay-300">
        Premier training institute and skilled manpower supplier connecting talented Bangladeshi professionals with international career opportunities. Building bridges to global success since 2002.
        </p>
        <HeroClient />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
}


