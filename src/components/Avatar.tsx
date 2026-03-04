import { motion } from "framer-motion";

interface AvatarProps {
  isResponding?: boolean;
}

export default function Avatar({ isResponding = false }: AvatarProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Soft cosmic aura - subtle glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%)",
        }}
        animate={{
          opacity: isResponding ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3],
          scale: isResponding ? [1, 1.05, 1] : [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary aura */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
        }}
        animate={{
          opacity: isResponding ? [0.3, 0.5, 0.3] : [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Avatar container with floating animation */}
      <motion.div
        className="relative z-10"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663398291476/gG5K4AnSJan2vdBN5KtVHT/shiva_avatar_b2ba8da3.png"
          alt="ShivAI Avatar"
          className="w-72 h-72 md:w-80 md:h-80 object-contain drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 40px rgba(99, 102, 241, 0.2))",
          }}
        />
      </motion.div>

      {/* Divine light rays when responding - subtle */}
      {isResponding && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
