import { motion } from "framer-motion";
import { X, MapPin, Sparkles, Code2, BrainCircuit, Globe } from "lucide-react";

interface AboutSectionProps {
  onClose: () => void;
}

export default function AboutSection({ onClose }: AboutSectionProps) {
  const highlightCards = [
    { icon: Code2, title: "Experience", value: "1+ Year", desc: "Freelance Development" },
    { icon: BrainCircuit, title: "Focus", value: "AI & Web", desc: "Intelligent Systems" },
    { icon: Globe, title: "Vision", value: "Conscious", desc: "Tech × Spirituality" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop with radial glow */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl glass-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20" />
        <div className="absolute inset-0 rounded-2xl border border-white/5" />
        
        {/* Content */}
        <div className="relative p-6 md:p-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gradient">About Amrit</h2>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose} 
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <X className="w-5 h-5 text-slate-400" />
            </motion.button>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Amrit Sharma</h3>
                <p className="text-indigo-300 font-medium text-lg">Student × Software & AI Enthusiast</p>
                <div className="flex items-center gap-2 text-slate-400 mt-3">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
              
              <div className="space-y-5 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  I am a passionate software developer and AI enthusiast from Nepal, deeply interested in Computer Science and Artificial Intelligence. I believe in learning by building and constantly improving through real-world projects.
                </p>
                <p>
                  With over a year of hands-on freelance experience, I specialize in developing responsive web applications, AI-powered solutions, and automation systems. My focus is not just coding — but building intelligent systems that solve real problems.
                </p>
              </div>
              
              {/* Quote */}
              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-3 pt-4"
              >
                <Sparkles className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 italic">
                  "Balancing Code & Shiv Consciousness × Dhyāna"
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div variants={itemVariants} className="space-y-4">
              {highlightCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                    borderColor: "rgba(99, 102, 241, 0.3)"
                  }}
                  className="p-6 rounded-xl bg-white/5 border border-white/8 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
                      <card.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">{card.title}</p>
                      <p className="text-2xl font-bold text-white">{card.value}</p>
                      <p className="text-sm text-slate-500">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
