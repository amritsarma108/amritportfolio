import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars
    const stars: Star[] = [];
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
      });
    }

    // Floating particles (ambient light)
    const particles: Particle[] = [];
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.15 + 0.05,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.2 - 0.1,
        life: Math.random() * 300,
        maxLife: 300 + Math.random() * 200,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      // Clear with fade for trail effect
      ctx.fillStyle = "rgba(5, 8, 22, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(79, 70, 229, 0.03)");
      gradient.addColorStop(0.5, "rgba(124, 58, 237, 0.02)");
      gradient.addColorStop(1, "rgba(79, 70, 229, 0.03)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ambient glow at center
      const centerGlow = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.6
      );
      centerGlow.addColorStop(0, "rgba(79, 70, 229, 0.08)");
      centerGlow.addColorStop(0.5, "rgba(124, 58, 237, 0.04)");
      centerGlow.addColorStop(1, "transparent");
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.4 + 0.6;
        ctx.fillStyle = `rgba(224, 231, 255, ${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add glow to some stars
        if (star.radius > 1) {
          const glow = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 3
          );
          glow.addColorStop(0, `rgba(224, 231, 255, ${star.opacity * twinkle * 0.5})`);
          glow.addColorStop(1, "transparent");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      // Draw and update particles
      particles.forEach((particle) => {
        const alpha = (1 - particle.life / particle.maxLife) * particle.opacity;
        ctx.fillStyle = `rgba(224, 231, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 1;

        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = canvas.height + 10;
          particle.life = 0;
        }
      });

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ background: "linear-gradient(180deg, #050816 0%, #0a0e2e 50%, #050816 100%)" }}
    />
  );
}

