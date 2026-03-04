
import { motion } from "framer-motion";
import { X, Target, Rocket, Star, Zap } from "lucide-react";

interface RoadmapSectionProps {
  onClose: () => void;
}

const roadmapItems = [
  {
    phase: "Now",
    title: "Building AI Systems",
    description: "Creating intelligent automation solutions and exploring the boundaries of what's possible with LLMs.",
    status: "active",
  },
  {
    phase: "Next",
    title: "Contribute to Open Source",
    description: "Give back to the community by building and maintaining open source AI tools and libraries.",
    status: "planned",
  },
  {
    phase: "Later",
    title: "Mentor Builders",
    description: "Share knowledge with aspiring developers and help them find their path in tech.",
    status: "planned",
  },
  {
    phase: "Someday",
    title: "Build Something Legendary",
    description: "Create technology that impacts millions and leaves a lasting mark on the digital world.",
    status: "dream",
  },
];

export default function RoadmapSection({ onClose }: RoadmapSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 rounded-2xl border border-white/10" />
        
        <div className="relative p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/20">
                <Target className="w-6 h-6 text-indigo-300" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-100" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Growth Roadmap
              </h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-slate-300 leading-relaxed mb-10 font-light"
          >
            Not a career ladder —{' '}
            <span className="text-indigo-300">a personal evolution</span>.
            <br />
            Where I'm heading, not just where I've been.
          </motion.p>

          <div className="space-y-4">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.12 }}
                className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                  item.status === "active" 
                    ? "bg-indigo-500/10 border-indigo-500/40" 
                    : "bg-white/5 border-white/10 hover:border-indigo-500/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl ${
                    item.status === "active" 
                      ? "bg-indigo-500/30 text-indigo-200" 
                      : item.status === "dream"
                      ? "bg-purple-500/20 text-purple-300"
                      : "bg-white/10 text-slate-400"
                  }`}>
                    {item.status === "active" && <Zap className="w-5 h-5" />}
                    {item.status === "planned" && <Rocket className="w-5 h-5" />}
                    {item.status === "dream" && <Star className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-md ${
                        item.status === "active" 
                          ? "bg-indigo-500/30 text-indigo-300"
                          : item.status === "dream"
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-white/10 text-slate-400"
                      }`}>
                        {item.phase}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {item.status === "active" && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 pt-8 border-t border-white/10"
          >
            <p className="text-center text-slate-500 italic">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

