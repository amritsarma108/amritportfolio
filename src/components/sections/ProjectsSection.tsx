import { motion } from "framer-motion";
import { X, ExternalLink, Github, Sparkles, ArrowRight } from "lucide-react";

interface ProjectsSectionProps {
  onClose: () => void;
}

const projects = [
  {
    title: "AI Lead Qualification System",
    description: "AI system that qualifies and filters leads automatically using OpenAI API and custom scoring logic.",
    techStack: ["React", "Node.js", "OpenAI API", "TypeScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Restaurant AI Booking Assistant",
    description: "Chat-based AI system that handles bookings and customer queries for restaurants.",
    techStack: ["Python", "Flask", "NLP", "Twilio"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Smart School Management Concept",
    description: "SaaS-style dashboard idea integrating AI features for school administration.",
    techStack: ["React", "MongoDB", "AI Integration", "Dashboard"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Content Automation Tool",
    description: "Tool that generates blogs and social media posts using LLMs for content marketing.",
    techStack: ["OpenAI", "Next.js", "Automation", "LLM"],
    color: "from-orange-500 to-red-500",
    isDemo: true,
  },
  {
    title: "Real Estate AI Inquiry Bot",
    description: "AI chatbot designed for property agencies to handle customer inquiries 24/7.",
    techStack: ["LangChain", "Vector DB", "React", "ChatGPT"],
    color: "from-indigo-500 to-violet-500",
    isDemo: true,
  },
];

export default function ProjectsSection({ onClose }: ProjectsSectionProps) {
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
        className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl"
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
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold font-space-mono text-indigo-200">Projects</h2>
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.color} blur-xl opacity-10`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors">
                        {project.title}
                      </h3>
                      {project.isDemo && (
                        <span className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-md bg-amber-500/20 text-amber-300">
                          <Sparkles className="w-3 h-3" /> Demo
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/5 group-hover:border-white/20 group-hover:bg-white/10 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4 text-slate-400" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

