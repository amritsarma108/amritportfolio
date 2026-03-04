import { motion } from "framer-motion";
import { X } from "lucide-react";

interface PortfolioSectionProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export default function PortfolioSection({
  title,
  content,
  onClose,
  isOpen,
}: PortfolioSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-0 z-30 flex items-center justify-center ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Content container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.92, y: isOpen ? 0 : 24 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-40 w-full max-w-2xl mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-modal p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-wide text-indigo-100">
              {title}
            </h2>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onClose}
              className="p-2.5 hover:bg-white/10 rounded-xl transition-colors duration-300"
            >
              <X size={20} className="text-slate-400" />
            </motion.button>
          </div>

          <div className="text-slate-300 leading-relaxed font-light">
            {content}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

