'use client';

import { useState, useEffect, useRef } from 'react';
import ServiceCardLeft from './ServiceCardLeft';
import ServiceCardRight from './ServiceCardRight';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [fullyVisibleIndex, setFullyVisibleIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const checkVisibility = () => {
    cardRefs.current.forEach((cardRef, index) => {
      if (!cardRef) return;
      
      const rect = cardRef.getBoundingClientRect();
      const fullyVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth;

      if (fullyVisible) {
        setFullyVisibleIndex(index);
      } else if (fullyVisibleIndex === index) {
        setFullyVisibleIndex(null);
      }
    });
  };

  useEffect(() => {
    checkVisibility(); // Initial check
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [fullyVisibleIndex]);

  return (
    <section id="services" className="py-20">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Services & Support</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services designed to guide you from training to international career success.
          </p>
        </div>
        {servicesData.map((service, index) => (
          index % 2 === 0 ? (
            <div 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="checkHover"
            >
              <div className="max-w-7xl mx-auto">
                <ServiceCardLeft {...service} isHovered={fullyVisibleIndex === index} />
              </div>
            </div>
          ) : (
            <div 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="checkHover bg-gray-50"
            >
              <div className="max-w-7xl mx-auto">
                <ServiceCardRight {...service} isHovered={fullyVisibleIndex === index} />
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
}
