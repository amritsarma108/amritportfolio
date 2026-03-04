import { motion } from "framer-motion";
import { X, Code, Cpu, Wrench, Lightbulb, Zap } from "lucide-react";
import { useState } from "react";

interface SkillsSectionProps {
  onClose: () => void;
}

const skillCategories = [
  {
    title: "Full Stack Development",
    icon: <Code className="w-5 h-5 text-blue-400" />,
    level: 90,
    skills: ["ReactJS", "Node.js", "TypeScript", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    level: 85,
    skills: ["OpenAI API", "LLM Integration", "NLP", "Prompt Engineering"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Wrench className="w-5 h-5 text-green-400" />,
    level: 75,
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
  },
  {
    title: "Soft Skills",
    icon: <Lightbulb className="w-5 h-5 text-orange-400" />,
    level: 95,
    skills: ["Problem Solving", "Communication", "Team Leadership"],
  },
];

export default function SkillsSection({ onClose }: SkillsSectionProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 animate-pulse opacity-30" />
        <div className="absolute inset-0 rounded-2xl border border-white/10" />
        
        <div className="relative p-8 md:p-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between mb-10"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20">
                <Zap className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold font-space-mono text-indigo-200">Skills & Expertise</h2>
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

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * categoryIndex + 0.2 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Proficiency</span>
                    <span className="text-sm font-medium text-indigo-300">{category.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${category.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + categoryIndex * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full relative"
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`px-3 py-1.5 text-sm rounded-lg bg-white/5 text-slate-300 cursor-default transition-all duration-300 ${
                        hoveredSkill === skill ? "text-white shadow-lg shadow-indigo-500/20" : ""
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

