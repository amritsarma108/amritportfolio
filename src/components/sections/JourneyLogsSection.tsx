
import { motion } from "framer-motion";
import { X, MapPin, Calendar, Compass, Mountain, Waves } from "lucide-react";

interface JourneyLogsSectionProps {
  onClose: () => void;
}

const journeyLogs = [
  {
    year: "2024",
    title: "The AI Awakening",
    location: "Kathmandu, Nepal",
    description: "Discovered the power of LLMs andPrompt Engineering. Started building AI-first solutions that blend automation with human creativity.",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    year: "2023",
    title: "Full Stack Mastery",
    location: "Online Learning",
    description: "Deep dive into React, Node.js, and cloud architecture. Built multiple production applications while exploring DevOps.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    year: "2022",
    title: "First Lines of Code",
    location: "Kathmandu, Nepal",
    description: "Started the journey with Python. The moment my first script ran successfully — I knew this was my path.",
    icon: <Sparkles className="w-5 h-5" />,
  },
];

// Since Brain, Code, Sparkles are not imported, I'll add proper imports
import { Brain, Code, Sparkles } from "lucide-react";

const travelReflections = [
  {
    title: "Mountain Wisdom",
    description: "Spend time in the Himalayas. The mountains teach patience — every peak was once a valley.",
    icon: <Mountain className="w-5 h-5" />,
  },
  {
    title: "Flow with Water",
    description: "Rivers never fight the rock — they find a way. In code and life, adaptability beats resistance.",
    icon: <Waves className="w-5 h-5" />,
  },
];

export default function JourneyLogsSection({ onClose }: JourneyLogsSectionProps) {
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
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl"
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
                <Compass className="w-6 h-6 text-indigo-300" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-100" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Journey Logs
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
            My journey isn't just about code — it's about{' '}
            <span className="text-indigo-300">where I've been</span>, what I've learned,
            and the moments that shaped how I build.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

            <div className="space-y-8">
              {journeyLogs.map((log, index) => (
                <motion.div
                  key={log.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.12 }}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-slate-900" />
                  
                  <div className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-indigo-500/30 text-indigo-300">
                        {log.year}
                      </span>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <MapPin className="w-3 h-3" />
                        {log.location}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                      {log.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {log.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Travel Reflections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 pt-8 border-t border-white/10"
          >
            <h3 className="text-lg font-semibold text-indigo-200 mb-6">Travel Reflections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {travelReflections.map((reflection, index) => (
                <motion.div
                  key={reflection.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-indigo-400">{reflection.icon}</div>
                    <h4 className="text-sm font-medium text-white">{reflection.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {reflection.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

