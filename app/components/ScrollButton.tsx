'use client';

import React from 'react';

type ScrollButtonProps = {
  targetId: string;
  className?: string;
  children: React.ReactNode;
};

export default function ScrollButton({ targetId, className, children }: ScrollButtonProps) {
  const handleClick = React.useCallback(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [targetId]);

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}


