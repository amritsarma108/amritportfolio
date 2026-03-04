import { motion } from "framer-motion";
import { X, Instagram, Linkedin, Youtube } from "lucide-react";

interface SocialSectionProps {
  onClose: () => void;
}

const socialLinks = [
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/amritsarma.py/?hl=en", 
    color: "hover:text-pink-400" 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/amrit-sharma-5049433a8/", 
    color: "hover:text-blue-400" 
  },
  { 
    name: "YouTube", 
    icon: Youtube, 
    href: "https://www.youtube.com/@amritofficial3561", 
    color: "hover:text-red-400" 
  },
];

export default function SocialSection({ onClose }: SocialSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 animate-pulse opacity-50" />
        <div className="absolute inset-0 rounded-2xl border border-white/10" />
        <div className="relative p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-space-mono text-indigo-200">Connect With Me</h2>
            <button onClick={onClose} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
          <p className="text-slate-400 mb-8">
            Find me on various platforms. Let us stay connected!
          </p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors ${social.color}`}
              >
                <social.icon className="w-6 h-6 text-slate-400" />
                <span className="text-slate-200 font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

