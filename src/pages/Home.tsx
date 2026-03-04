import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarField from "@/components/StarField";
import Avatar from "@/components/Avatar";
import ChatBox from "@/components/ChatBox";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import SocialSection from "@/components/sections/SocialSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import JourneyLogsSection from "@/components/sections/JourneyLogsSection";
import JourneyLogsBlogSection from "@/components/sections/JourneyLogsBlogSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import { 
  generateAIResponse, 
  GUIDANCE_MESSAGE, 
  NAVIGATION_ITEMS, 
  handleNavigationClick 
} from "@/services/aiService";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  isNavigationItem?: boolean;
}

// Intro message - shown only once after first user interaction
const INTRO_MESSAGE: Message = {
  id: "intro-msg",
  type: "ai",
  content: `Namaste.
I am the navigation interface for Amrit's digital space.

Explore naturally:

"skills"
"projects"
"philosophy"
"behind the code"
"contact"
"social links"
"journey logs"
"blog"

Where would you like to begin?`,
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAvatarResponding, setIsAvatarResponding] = useState(false);
  const [meditationMode, setMeditationMode] = useState(false);
  const messageIdRef = useRef(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [justClosedSection, setJustClosedSection] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [introShown, setIntroShown] = useState(false);

  const handleSend = useCallback(async (overrideMessage?: string) => {
    const messageToSend = overrideMessage || input;
    if (!messageToSend.trim() || isLoading) return;

    // Mark first interaction
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
    }

    const userMessage: Message = {
      id: `msg-${messageIdRef.current++}`,
      type: "user",
      content: messageToSend,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!overrideMessage) {
      setInput("");
    }
    setIsLoading(true);
    setIsAvatarResponding(true);

    // Reset the just closed section flag
    setJustClosedSection(false);

    try {
      // First interaction: show intro first, then get AI response
      if (hasUserInteracted && !introShown) {
        setIntroShown(true);
        
        // Show intro message with slight delay for better UX
        setTimeout(() => {
          setMessages((prev) => [...prev, INTRO_MESSAGE]);
        }, 300);
      }

      const result = await generateAIResponse(
        messageToSend, 
        [], 
        justClosedSection
      );

      // Add AI response after intro
      const aiMessage: Message = {
        id: `msg-${messageIdRef.current++}`,
        type: "ai",
        content: result.response,
      };

      // If intro already shown, add immediately; otherwise add after intro
      if (introShown || !hasUserInteracted) {
        setMessages((prev) => [...prev, aiMessage]);
      }

      // Navigate to section if needed
      if (result.shouldNavigate && result.section) {
        setActiveSection(result.section);
      }
    } catch (error) {
      console.error("Error getting response:", error);
      // Graceful fallback - never show error to user
      const fallbackMessage: Message = {
        id: `msg-${messageIdRef.current++}`,
        type: "ai",
        content: "The system is recalibrating. Meanwhile, explore the sections above.",
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
      
      // Stop avatar response effect after message is displayed
      setTimeout(() => {
        setIsAvatarResponding(false);
      }, 1500);
    }
  }, [input, isLoading, justClosedSection, hasUserInteracted, introShown]);

  // Handle navigation item click from ChatBox
  const handleNavigationItemClick = useCallback((item: typeof NAVIGATION_ITEMS[0]) => {
    // Add user message for the clicked item
    const userMessage: Message = {
      id: `msg-${messageIdRef.current++}`,
      type: "user",
      content: item.label,
      isNavigationItem: true,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Get navigation response
    const result = handleNavigationClick(item);
    
    // Add AI response
    const aiMessage: Message = {
      id: `msg-${messageIdRef.current++}`,
      type: "ai",
      content: result.response,
    };
    setMessages((prev) => [...prev, aiMessage]);

    // Navigate to section
    if (result.shouldNavigate && result.section) {
      setActiveSection(result.section);
    }
  }, []);

  const handleCloseSection = useCallback(() => {
    setActiveSection(null);
    setJustClosedSection(true);
    
    // Show guidance message after closing
    const guidanceMessage: Message = {
      id: `msg-${messageIdRef.current++}`,
      type: "ai",
      content: GUIDANCE_MESSAGE,
    };
    
    setTimeout(() => {
      setMessages((prev) => [...prev, guidanceMessage]);
    }, 300);
  }, []);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* Animated Background */}
      <StarField />
      
      {/* Main Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Avatar Section with entrance animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          className="flex-1 flex items-center justify-center w-full"
        >
          <Avatar isResponding={isAvatarResponding} />
        </motion.div>

        {/* Hero Text with premium cinematic typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.4,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute top-20 text-center z-10"
        >
          {/* Main Title with gradient, glow, and shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ filter: "drop-shadow(0 0 30px rgba(99, 102, 241, 0.3))" }}
          >
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ mixBlendMode: "overlay" }}
            >
              <motion.div
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                className="absolute top-0 h-full w-[40%]"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                  transform: "skewX(-15deg)",
                }}
              />
            </motion.div>

            {/* Glow animation */}
            <motion.h1 
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(99, 102, 241, 0.3)",
                  "0 0 40px rgba(139, 92, 246, 0.4)",
                  "0 0 20px rgba(99, 102, 241, 0.3)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-bold tracking-[0.25em] relative"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                background: "linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 40%, #c4b5fd 70%, #e0e7ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Amrit Sharma
            </motion.h1>
          </motion.div>

          {/* Floating parallax effect on title */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Subtitle with fade-in and tracking */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-6"
            >
              <p 
                className="text-base md:text-lg font-light tracking-[0.3em] uppercase relative inline-block"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  color: "rgba(199, 210, 254, 0.6)",
                }}
              >
<motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-sm font-bold tracking-[0.3em] uppercase text-indigo-200"
                >
                  SOFTWARE DEVELOPER
                </motion.span>
                
                {/* Animated divider line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-3 left-0 right-0 mx-auto w-32 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)",
                    transformOrigin: "center",
                  }}
                />
              </p>
            </motion.div>
          </motion.div>
        </motion.div>



        {/* Chat Box */}
        <ChatBox
          messages={messages}
          input={input}
          onInputChange={setInput}
          onSend={handleSend}
          isLoading={isLoading}
          navigationItems={NAVIGATION_ITEMS}
          onNavigationItemClick={handleNavigationItemClick}
        />
      </div>

      {/* Section Modals with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        {activeSection === "about" && (
          <AboutSection key="about" onClose={handleCloseSection} />
        )}
        {activeSection === "skills" && (
          <SkillsSection key="skills" onClose={handleCloseSection} />
        )}
        {activeSection === "projects" && (
          <ProjectsSection key="projects" onClose={handleCloseSection} />
        )}
        {activeSection === "contact" && (
          <ContactSection key="contact" onClose={handleCloseSection} />
        )}
        {activeSection === "social" && (
          <SocialSection key="social" onClose={handleCloseSection} />
        )}
        {activeSection === "philosophy" && (
          <PhilosophySection key="philosophy" onClose={handleCloseSection} />
        )}
        {activeSection === "journey" && (
          <JourneyLogsSection key="journey" onClose={handleCloseSection} />
        )}
        {activeSection === "blog" && (
          <JourneyLogsBlogSection key="blog" onClose={handleCloseSection} />
        )}
        {activeSection === "roadmap" && (
          <RoadmapSection key="roadmap" onClose={handleCloseSection} />
        )}
      </AnimatePresence>
    </div>
  );
}

