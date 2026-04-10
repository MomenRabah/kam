import { useEffect, useRef } from 'react';

const DottedGlowBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Dot configuration
    const dotSize = 2;
    const dotSpacing = 30;
    const glowRadius = 150;
    let mouseX = -1000;
    let mouseY = -1000;

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          const dx = mouseX - x;
          const dy = mouseY - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate glow effect
          let opacity = 0.2;
          let size = dotSize;
          let color = '#E76424'; // primary color

          if (distance < glowRadius) {
            const intensity = 1 - distance / glowRadius;
            opacity = 0.2 + intensity * 0.8;
            size = dotSize + intensity * 3;
            
            // Gradient from primary to accent
            const r = Math.round(231 + (251 - 231) * intensity); // E7 to FB
            const g = Math.round(100 + (217 - 100) * intensity); // 64 to D9
            const b = Math.round(36 + (0 - 36) * intensity);     // 24 to 00
            color = `rgb(${r}, ${g}, ${b})`;
          }

          // Draw dot
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = opacity;
          ctx.fill();

          // Add glow
          if (distance < glowRadius) {
            const intensity = 1 - distance / glowRadius;
            ctx.shadowBlur = 10 * intensity;
            ctx.shadowColor = color;
          } else {
            ctx.shadowBlur = 0;
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default DottedGlowBackground;
