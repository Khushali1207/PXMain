import { useEffect, useRef } from "react";

export default function FloatingBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const items = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 0.6 + 0.2,
      type: Math.random() > 0.5 ? "bubble" : "arrow",
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      items.forEach((i) => {
        ctx.save();
        ctx.globalAlpha = 0.35;
        ctx.fillStyle = "rgb(168, 85, 247)";

        if (i.type === "bubble") {
          ctx.beginPath();
          ctx.arc(i.x, i.y, i.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(i.x, i.y, 2, 12);
          ctx.fillRect(i.x - 3, i.y + 6, 8, 2);
        }

        ctx.restore();

        i.y -= i.speed;
        if (i.y < -20) i.y = canvas.height + 20;
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
}
