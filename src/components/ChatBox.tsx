import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { useRef, useEffect } from "react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  isTyping?: boolean;
}

interface NavigationItem {
  label: string;
  section: string;
  message: string;
}

interface ChatBoxProps {
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
  navigationItems?: NavigationItem[];
  onNavigationItemClick?: (item: NavigationItem) => void;
}

// Animation variants for messages
const messageVariants = {
  hidden: { 
    opacity: 0, 
    y: 16,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -8, 
    scale: 0.98,
    transition: {
      duration: 0.3
    }
  }
};

// Glow effect for AI messages
const aiMessageGlow = {
  initial: { 
    boxShadow: "0 0 0 rgba(99, 102, 241, 0)" 
  },
  animate: { 
    boxShadow: [
      "0 0 8px rgba(99, 102, 241, 0.15)",
      "0 0 16px rgba(139, 92, 246, 0.2)",
      "0 0 8px rgba(99, 102, 241, 0.15)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function ChatBox({
  messages,
  input,
  onInputChange,
  onSend,
  isLoading,
  navigationItems = [],
  onNavigationItemClick,
}: ChatBoxProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
      e.preventDefault();
      onSend();
    }
  };

  // Check if the latest AI message should have glow effect
  const latestAIMessage = [...messages].reverse().find(m => m.type === "ai");
  const showGlow = latestAIMessage && !isLoading;

  // Check if we should show navigation items (after guidance message)
  const shouldShowNavigation = messages.some(m => 
    m.content.includes("Where would you like to go next") ||
    m.content.includes("explore Amrit through multiple dimensions")
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full max-w-2xl mx-auto px-3 md:px-4 pb-4 md:pb-8 z-20 safe-area-bottom">
      {/* Messages Container */}
      <div className="max-h-[40vh] md:max-h-56 overflow-y-auto mb-3 md:mb-5 space-y-2 md:space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <motion.div
                initial={message.type === "ai" ? aiMessageGlow.initial : false}
                animate={message.type === "ai" && showGlow ? aiMessageGlow.animate : undefined}
                className={`max-w-[90%] md:max-w-[85%] px-4 md:px-5 py-3 rounded-2xl backdrop-blur-md transition-all duration-300 ${
                  message.type === "user"
                    ? "bg-primary/15 border border-primary/20 text-indigo-100"
                    : "bg-slate-800/40 border border-white/5 text-slate-200"
                }`}
              >
                {message.isTyping ? (
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                ) : (
                  <p className="text-sm md:text-base leading-relaxed font-light whitespace-pre-wrap">{message.content}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass-card p-1.5 md:p-1.5 relative group">
          {/* Subtle shimmer effect on focus */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-700 pointer-events-none md:opacity-0" />
          
          <div className="flex gap-2 md:gap-3 relative z-10">
            <div className="flex-1 relative">
              {/* Inner glow border on focus - hidden on mobile for performance */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block">
                <div className="absolute inset-0 rounded-xl" style={{
                  boxShadow: 'inset 0 0 20px rgba(99, 102, 241, 0.08), 0 0 30px rgba(99, 102, 241, 0.05)'
                }} />
              </div>
              
              <input
                type="text"
                value={input}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Navigate Amrit's universe..."
                disabled={isLoading}
                className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-transparent text-slate-100 placeholder:text-slate-500 focus:outline-none text-sm md:text-base font-light rounded-xl relative"
                style={{
                  letterSpacing: '0.02em',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onSend}
              disabled={isLoading || !input.trim()}
              className="min-w-[44px] min-h-[44px] px-4 md:px-5 py-3 bg-primary/20 hover:bg-primary/30 disabled:bg-slate-700/30 rounded-xl text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed border border-primary/20"
            >
              <Send size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

