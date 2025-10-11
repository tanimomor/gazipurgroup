'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollButton from './ScrollButton';

function CountUp({ end, duration = 2000, className = '' }: { end: number; duration?: number; className?: string }) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    let observer: IntersectionObserver | null = null;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) setHasStarted(true);
        },
        { threshold: 0.3 }
      );
      observer.observe(element);
    } else {
      setHasStarted(true);
    }
    return () => {
      if (observer && element) observer.unobserve(element);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = performance.now();
    const startValue = 0;
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (end - startValue) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, end, duration]);

  return (
    <div ref={ref} className={className}>
      {value.toLocaleString()}
    </div>
  );
}

export default function HeroClient() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-8">
        <div className="text-center animate-fade-in-up animation-delay-900">
          <div className="text-4xl font-bold text-green-200 mb-0 flex justify-center items-baseline gap-0">
            <CountUp end={50000} />
            <span>+</span>
          </div>
          <div className="text-gray-200">Successful Placements</div>
        </div>
        <div className="text-center animate-fade-in-up animation-delay-300">
          <div className="text-4xl font-bold text-green-200 mb-0 flex justify-center items-baseline gap-0">
            <CountUp end={23} />
            <span>+</span>
          </div>
          <div className="text-gray-200">Years Experience</div>
        </div>
        <div className="text-center animate-fade-in-up animation-delay-600">
          <div className="text-4xl font-bold text-green-200 mb-0 flex justify-center items-baseline gap-0">
            <CountUp end={7} />
            <span>+</span>
          </div>
          <div className="text-gray-200">Specialized Sectors</div>
        </div>
        <div className="text-center animate-fade-in-up animation-delay-600">
          <div className="text-4xl font-bold text-green-200 mb-0 flex justify-center items-baseline gap-0">
            <CountUp end={3} />
            <span>+</span>
          </div>
          <div className="text-gray-200">Partner Countries</div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <ScrollButton
          targetId="contact"
          className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600"
        >
          Get Started Today 🚀
        </ScrollButton>
        <ScrollButton
          targetId="about"
          className="border-2 border-green-300 text-green-100 hover:bg-green-600 hover:border-green-600 px-7 py-3 rounded-lg text-lg font-semibold transition-all duration-300 animate-fade-in-up animation-delay-600"
        >
          Learn More 📖
        </ScrollButton>
      </div>
    </div>
  );
}


