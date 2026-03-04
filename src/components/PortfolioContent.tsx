import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const AboutContent = () => (
  <div className="space-y-4">
    <p>
      I am <span className="text-indigo-300 font-semibold">Amrit Sharma</span>, an AI Systems Architect and Full Stack Developer from Nepal. I specialize in building intelligent automation systems, digital experiences, and conscious code solutions that bridge technology with human intention.
    </p>
    <p>
      My work focuses on creating systems that are not just functional, but thoughtfully designed—combining deep technical expertise with a philosophy that technology should serve humanity, not dominate it.
    </p>
    <p>
      I believe in the intersection of innovation and responsibility, crafting solutions that are scalable, secure, and spiritually aligned with modern values.
    </p>
  </div>
);

export const SkillsContent = () => (
  <div className="space-y-4">
    <div>
      <h3 className="text-indigo-300 font-semibold mb-2">Backend & Architecture</h3>
      <p>Node.js, Python, Express, FastAPI, PostgreSQL, MongoDB, Redis, Microservices, System Design</p>
    </div>
    <div>
      <h3 className="text-indigo-300 font-semibold mb-2">Frontend & UI</h3>
      <p>React, TypeScript, Tailwind CSS, Framer Motion, Next.js, Responsive Design, Web Performance</p>
    </div>
    <div>
      <h3 className="text-indigo-300 font-semibold mb-2">AI & Automation</h3>
      <p>OpenAI API, LLM Integration, Prompt Engineering, Automation Workflows, Data Processing</p>
    </div>
    <div>
      <h3 className="text-indigo-300 font-semibold mb-2">DevOps & Deployment</h3>
      <p>Docker, Kubernetes, AWS, CI/CD Pipelines, Cloud Infrastructure, Performance Optimization</p>
    </div>
  </div>
);

export const ProjectsContent = () => (
  <div className="space-y-4">
    <div className="border-l-2 border-indigo-500/50 pl-4">
      <h3 className="text-indigo-300 font-semibold">AI-Powered Automation Platform</h3>
      <p className="text-sm text-slate-300">Intelligent workflow automation using LLMs and real-time processing</p>
    </div>
    <div className="border-l-2 border-indigo-500/50 pl-4">
      <h3 className="text-indigo-300 font-semibold">Real-time Data Analytics Dashboard</h3>
      <p className="text-sm text-slate-300">High-performance visualization system with WebSocket integration</p>
    </div>
    <div className="border-l-2 border-indigo-500/50 pl-4">
      <h3 className="text-indigo-300 font-semibold">Conscious Code Framework</h3>
      <p className="text-sm text-slate-300">Open-source framework for ethical AI development and deployment</p>
    </div>
    <div className="border-l-2 border-indigo-500/50 pl-4">
      <h3 className="text-indigo-300 font-semibold">Cloud-Native Microservices</h3>
      <p className="text-sm text-slate-300">Scalable distributed systems with automatic failover and load balancing</p>
    </div>
  </div>
);

export const ContactContent = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <Mail size={20} className="text-indigo-400" />
      <div>
        <p className="text-sm text-slate-400">Email</p>
        <a
          href="mailto:amrit@example.com"
          className="text-indigo-300 hover:text-indigo-200 transition-colors"
        >
          amrit.sharma@example.com
        </a>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <Linkedin size={20} className="text-indigo-400" />
      <div>
        <p className="text-sm text-slate-400">LinkedIn</p>
        <a
          href="https://linkedin.com/in/amrit-sharma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 hover:text-indigo-200 transition-colors flex items-center gap-1"
        >
          linkedin.com/in/amrit-sharma <ExternalLink size={14} />
        </a>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <Github size={20} className="text-indigo-400" />
      <div>
        <p className="text-sm text-slate-400">GitHub</p>
        <a
          href="https://github.com/amrit-sharma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 hover:text-indigo-200 transition-colors flex items-center gap-1"
        >
          github.com/amrit-sharma <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </div>
);

export const SocialContent = () => (
  <div className="space-y-4">
    <p className="text-slate-300">Connect with me on various platforms:</p>
    <div className="flex flex-wrap gap-3">
      <a
        href="https://github.com/amrit-sharma"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-colors"
      >
        <Github size={18} /> GitHub
      </a>
      <a
        href="https://linkedin.com/in/amrit-sharma"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-colors"
      >
        <Linkedin size={18} /> LinkedIn
      </a>
      <a
        href="https://twitter.com/amrit_sharma"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg transition-colors"
      >
        <ExternalLink size={18} /> Twitter
      </a>
    </div>
  </div>
);

