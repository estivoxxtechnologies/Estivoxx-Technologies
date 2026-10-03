import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState<'default' | 'button' | 'card'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device or reduced motion
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setTargetPos({ x: e.clientX, y: e.clientY });

      // Detect hover target type
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isButton = target.closest('button, a, input, select, textarea, [role="button"]');
      const isCard = target.closest('[data-cursor="card"], .interactive-card, article');

      if (isButton) {
        setVariant('button');
      } else if (isCard) {
        setVariant('card');
      } else {
        setVariant('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth lerp loop
    let animId: number;
    const updatePosition = () => {
      setPos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.25,
          y: prev.y + dy * 0.25,
        };
      });
      animId = requestAnimationFrame(updatePosition);
    };
    animId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [targetPos.x, targetPos.y]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${targetPos.x}px, ${targetPos.y}px, 0)`,
          width: variant === 'button' ? '6px' : '4px',
          height: variant === 'button' ? '6px' : '4px',
          backgroundColor: '#F5F3FF',
        }}
      />
      {/* Outer Halo / Follower Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out border"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          width: variant === 'button' ? '44px' : variant === 'card' ? '56px' : '26px',
          height: variant === 'button' ? '44px' : variant === 'card' ? '56px' : '26px',
          borderColor: variant === 'card' ? 'rgba(167, 139, 250, 0.45)' : 'rgba(139, 108, 255, 0.35)',
          backgroundColor: variant === 'button' ? 'rgba(91, 63, 228, 0.15)' : 'transparent',
          boxShadow: variant === 'button' ? '0 0 15px rgba(108, 74, 255, 0.3)' : 'none',
        }}
      />
    </>
  );
};
