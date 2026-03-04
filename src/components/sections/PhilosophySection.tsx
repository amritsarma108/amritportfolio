
import { motion } from "framer-motion";
import { X, Sparkles, Heart, Brain, Eye } from "lucide-react";

interface PhilosophySectionProps {
  onClose: () => void;
}

const principles = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Code is Consciousness",
    description: "Every line I write is an extension of my thoughts. I code not just to build, but to express intention into the digital realm.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Technology with Soul",
    description: "The best systems feel alive. I blend technical excellence with emotional intelligence to create experiences that resonate.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Learn in Public",
    description: "Knowledge grows when shared. I document my journey, failures, and breakthroughs openly — because growth is a community sport.",
  },
];

export default function PhilosophySection({ onClose }: PhilosophySectionProps) {
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
                <Sparkles className="w-6 h-6 text-indigo-300" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-100" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Builder Mindset
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
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 leading-relaxed mb-10 font-light"
          >
            My philosophy isn't about frameworks or tools — it's about{' '}
            <span className="text-indigo-300">how I think</span> when building.
            <br /><br />
            I believe in creating technology that feels like an extension of human intention.
          </motion.p>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/10 text-indigo-300 group-hover:text-indigo-200 group-hover:bg-indigo-500/20 transition-all">
                    {principle.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 pt-8 border-t border-white/10"
          >
            <p className="text-center text-slate-500 italic">
              "The code you write today becomes the reality you live in tomorrow."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

