import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let lastTrailTime = Date.now();
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      if (now - lastTrailTime > 50) {
        setTrail(prev => [
          ...prev.slice(-8),
          { x: e.clientX, y: e.clientY, id: now }
        ]);
        lastTrailTime = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden md:block">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-secondary opacity-50 transition-opacity duration-300"
          style={{
            left: point.x,
            top: point.y,
            opacity: (index + 1) / trail.length * 0.5,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      <div
        className="absolute w-4 h-4 rounded-full border-2 border-primary glow-primary transition-transform duration-100"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
