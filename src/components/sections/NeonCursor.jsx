'use client';
import { useEffect, useState } from 'react';

const NeonCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
      <div
        className="cursor-main"
        style={{ transform: `translate(${position.x - 10}px, ${position.y - 10}px)` }}
      />
      <div
        className="cursor-trail"
        style={{ transform: `translate(${position.x - 15}px, ${position.y - 15}px)` }}
      />
      <div
        className="cursor-glow"
        style={{ transform: `translate(${position.x - 25}px, ${position.y - 25}px)` }}
      />
    </div>
  );
};

export default NeonCursor;
