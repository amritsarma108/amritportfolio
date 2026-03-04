
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [startExit, setStartExit] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [showRays, setShowRays] = useState(false);

  useEffect(function() {
    const glowTimer = setTimeout(function() { setShowGlow(true); }, 800);
    const raysTimer = setTimeout(function() { setShowRays(true); }, 1200);
    const subtitleTimer = setTimeout(function() { setShowSubtitle(true); }, 1500);
    const intensifyTimer = setTimeout(function() { setStartExit(true); }, 2800);
    const completeTimer = setTimeout(function() {
      setIsLoading(false);
      onComplete();
    }, 3200);

    return function() {
      clearTimeout(glowTimer);
      clearTimeout(raysTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(intensifyTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={startExit ? { opacity: 0 } : { opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4"
          style={{ 
            background: "radial-gradient(ellipse at center, #0c1025 0%, #030308 100%)" 
          }}
        >
          <div className="absolute inset-0" style={{
            background: "conic-gradient(from 180deg at 50% 50%, #0c1025 0deg, #1a1a3e 90deg, #0c1025 180deg, #1a1a3e 270deg, #0c1025 360deg)",
            opacity: 0.15,
          }} />

          {/* Orb animations - reduced on mobile */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map(function(_, i) {
              return (
                <motion.div
                  key={"orb-1-" + i}
                  className="absolute rounded-full"
                  style={{
                    width: 150 + i * 60,
                    height: 150 + i * 60,
                    background: "rgba(99, 102, 241, " + (0.03 - i * 0.008) + ") radial-gradient(circle, rgba(99, 102, 241, " + (0.03 - i * 0.008) + ") 0%, transparent 70%)",
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 8 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              );
            })}
          </div>

          {/* Ring animation - smaller on mobile */}
          <motion.svg
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
                <stop offset="50%" stopColor="rgba(167, 139, 250, 0.15)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
              </linearGradient>
            </defs>
            <circle cx="150" cy="150" r="140" fill="none" stroke="url(#ringGradient)" strokeWidth="0.5" strokeDasharray="20 10" />
            <circle cx="150" cy="150" r="120" fill="none" stroke="url(#ringGradient)" strokeWidth="0.3" strokeDasharray="40 20" opacity={0.6} />
          </motion.svg>

          <AnimatePresence>
            {showGlow && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
              >
                <motion.div
                  className="w-48 h-48 md:w-96 md:h-96 rounded-full"
                  animate={{ scale: [1, 1.], opacity: [1, 10.4, 0.6, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 60%)",
                    filter: "blur(30px)",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 rounded-full"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  style={{
                    background: "radial-gradient(circle, rgba(196, 181, 253, 0.2) 0%, transparent 70%)",
                    filter: "blur(15px)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showRays && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(99, 102, 241, 0.03) 10deg, transparent 20deg, transparent 40deg, rgba(139, 92, 246, 0.03) 50deg, transparent 60deg, transparent 80deg, rgba(99, 102, 241, 0.03) 90deg, transparent 100deg, transparent 120deg, rgba(167, 139, 250, 0.03) 130deg, transparent 140deg, transparent 160deg, rgba(99, 102, 241, 0.03) 170deg, transparent 180deg, transparent 200deg, rgba(139, 92, 246, 0.03) 210deg, transparent 220deg, transparent 240deg, rgba(99, 102, 241, 0.03) 250deg, transparent 260deg, transparent 280deg, rgba(167, 139, 250, 0.03) 290deg, transparent 300deg, transparent 320deg, rgba(99, 102, 241, 0.03) 330deg, transparent 340deg, transparent 360deg)",
                  mixBlendMode: "screen",
                }}
              />
            )}
          </AnimatePresence>

          {/* Main Title */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: startExit ? 1.03 : 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center"
          >
            <div style={{ filter: "drop-shadow(0 0 40px rgba(99, 102, 241, 0.5)) drop-shadow(0 0 80px rgba(139, 92, 246, 0.3))" }}>
              <h1 
                className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-[0.25em] md:tracking-[0.35em]"
                style={{
                  fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                  background: "linear-gradient(180deg, #e0e7ff 0%, #c7d2fe 30%, #a5b4fc 60%, #c7d2fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Namaskar
              </h1>
            </div>

            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ mixBlendMode: "overlay" }}
            >
              <motion.div
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                className="absolute top-0 h-full w-[50%]"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                  transform: "skewX(-20deg)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <AnimatePresence>
            {showSubtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.55, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 md:mt-8 text-center px-4"
              >
                <p 
                  className="text-sm md:text-xl lg:text-2xl font-light tracking-[0.2em] md:tracking-[0.25em] uppercase"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    color: "rgba(199, 210, 254, 0.55)",
                  }}
                >
                  Balance Code and Shiv Conscious x Dhyana
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {startExit && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.9, 0] }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 60%)",
                }}
              />
            )}
          </AnimatePresence>

          <div className="absolute inset-4 md:inset-8 pointer-events-none" style={{ opacity: 0.1 }}>
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0 L50 0 L0 50" fill="none" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1" />
              <path d="M100% 100% L50% 100% L100% 50%" fill="none" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

