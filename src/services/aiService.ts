// AI Navigation Service - Premium Personal Website Assistant

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

// Navigation keywords mapping
const NAVIGATION_KEYWORDS: Record<string, { section: string; activationMessage: string }> = {
  // About
  about: { 
    section: "about", 
    activationMessage: "About section activated. Step into Amrit's journey." 
  },
  who: { 
    section: "about", 
    activationMessage: "About section activated. Step into Amrit's journey." 
  },
  "about me": { 
    section: "about", 
    activationMessage: "About section activated. Step into Amrit's journey." 
  },
  
  // Craft/Skills
  skill: { 
    section: "skills", 
    activationMessage: "Craft section activated. Explore Amrit's technical capabilities." 
  },
  skills: { 
    section: "skills", 
    activationMessage: "Craft section activated. Explore Amrit's technical capabilities." 
  },
  craft: { 
    section: "skills", 
    activationMessage: "Craft section activated. Explore Amrit's technical capabilities." 
  },
  technical: { 
    section: "skills", 
    activationMessage: "Craft section activated. Explore Amrit's technical capabilities." 
  },
  
  // Projects
  project: { 
    section: "projects", 
    activationMessage: "Projects section activated. Discover innovative work at the intersection of AI and humanity." 
  },
  projects: { 
    section: "projects", 
    activationMessage: "Projects section activated. Discover innovative work at the intersection of AI and humanity." 
  },
  work: { 
    section: "projects", 
    activationMessage: "Projects section activated. Discover innovative work at the intersection of AI and humanity." 
  },
  portfolio: { 
    section: "projects", 
    activationMessage: "Projects section activated. Discover innovative work at the intersection of AI and humanity." 
  },
  
  // Contact
  contact: { 
    section: "contact", 
    activationMessage: "Contact section activated. Ways to connect with Amrit." 
  },
  collaborate: { 
    section: "contact", 
    activationMessage: "Contact section activated. Ways to connect with Amrit." 
  },
  email: { 
    section: "contact", 
    activationMessage: "Contact section activated. Ways to connect with Amrit." 
  },
  reach: { 
    section: "contact", 
    activationMessage: "Contact section activated. Ways to connect with Amrit." 
  },
  
  // Social
  social: { 
    section: "social", 
    activationMessage: "Social Presence section activated. Connect through digital channels." 
  },
  linkedin: { 
    section: "social", 
    activationMessage: "Social Presence section activated. Connect through digital channels." 
  },
  github: { 
    section: "social", 
    activationMessage: "Social Presence section activated. Connect through digital channels." 
  },
  instagram: { 
    section: "social", 
    activationMessage: "Social Presence section activated. Connect through digital channels." 
  },
  youtube: { 
    section: "social", 
    activationMessage: "Social Presence section activated. Connect through digital channels." 
  },
  
  // Philosophy
  philosophy: { 
    section: "philosophy", 
    activationMessage: "Philosophy section activated. Explore the mindset behind the work." 
  },
  belief: { 
    section: "philosophy", 
    activationMessage: "Philosophy section activated. Explore the mindset behind the work." 
  },
  mindset: { 
    section: "philosophy", 
    activationMessage: "Philosophy section activated. Explore the mindset behind the work." 
  },
  
  // Journey
  journey: { 
    section: "journey", 
    activationMessage: "Journey Logs section activated. Walk through the path traveled." 
  },
  travel: { 
    section: "journey", 
    activationMessage: "Journey Logs section activated. Walk through the path traveled." 
  },
  logs: { 
    section: "journey", 
    activationMessage: "Journey Logs section activated. Walk through the path traveled." 
  },
  blog: { 
    section: "blog", 
    activationMessage: "Journey Logs section activated. Tales from the trail." 
  },
  
  // Roadmap
  roadmap: { 
    section: "roadmap", 
    activationMessage: "Roadmap section activated. Glimpse into the future vision." 
  },
  future: { 
    section: "roadmap", 
    activationMessage: "Roadmap section activated. Glimpse into the future vision." 
  },
  vision: { 
    section: "roadmap", 
    activationMessage: "Roadmap section activated. Glimpse into the future vision." 
  },
};

// Graceful fallback when AI fails
const SYSTEM_RECALIBRATING = "The system is recalibrating. Meanwhile, explore the sections above.";

// Guidance message when user closes a section
export const GUIDANCE_MESSAGE = `Where would you like to go next?
Search Amrit's universe.`;

// Interactive navigation items for suggestion buttons
export const NAVIGATION_ITEMS = [
  { label: "About Me", section: "about", message: "About section activated. Step into Amrit's journey." },
  { label: "Craft", section: "skills", message: "Craft section activated. Explore Amrit's technical capabilities." },
  { label: "Projects", section: "projects", message: "Projects section activated. Discover innovative work." },
  { label: "Journey Logs", section: "journey", message: "Journey Logs section activated. Walk through the path traveled." },
  { label: "Philosophy", section: "philosophy", message: "Philosophy section activated. Explore the mindset behind the work." },
  { label: "Contact", section: "contact", message: "Contact section activated. Ways to connect with Amrit." },
  { label: "Social Presence", section: "social", message: "Social Presence section activated. Connect through digital channels." },
];

// Initial welcome message
export const WELCOME_MESSAGE = `Namaste.
I am the navigation interface for Amrit's digital space.

Explore naturally:

"about"
"skills"
"projects"
"philosophy"
"behind the code"
"contact"
"social links"
"journey logs"
"blog"

Where would you like to begin?`;

// Check if user message matches any navigation keywords
export function extractNavigationIntent(userMessage: string): { section: string; activationMessage: string } | null {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const [keyword, nav] of Object.entries(NAVIGATION_KEYWORDS)) {
    if (lowerMessage.includes(keyword)) {
      return nav;
    }
  }
  
  return null;
}

// Generate intelligent response (local - no external API needed for navigation)
export function generateNavigationResponse(
  userMessage: string,
  isSectionClosing: boolean = false
): string {
  // If a section was just closed, show guidance
  if (isSectionClosing) {
    return GUIDANCE_MESSAGE;
  }

  // Check for navigation intent first
  const navIntent = extractNavigationIntent(userMessage);
  if (navIntent) {
    return navIntent.activationMessage;
  }

  // Handle greetings
  const lowerMessage = userMessage.toLowerCase();
  const greetings = ["hello", "hi", "hey", "namaste", "greetings", "hola", "start", "begin", "help"];
  if (greetings.some(g => lowerMessage.includes(g))) {
    return WELCOME_MESSAGE;
  }

  // For unrecognized input, show intelligent guidance (not apology!)
  return GUIDANCE_MESSAGE;
}

// Simulate AI response for smoother experience (can be extended with real API)
export async function generateAIResponse(
  userMessage: string,
  conversationHistory: ChatMessage[] = [],
  isSectionClosing: boolean = false
): Promise<{ response: string; shouldNavigate: boolean; section: string | null }> {
  try {
    // Use intelligent local navigation system
    // In production, this could call an external AI API for more complex queries
    
    const response = generateNavigationResponse(userMessage, isSectionClosing);
    const navIntent = extractNavigationIntent(userMessage);
    
    return {
      response,
      shouldNavigate: !!navIntent,
      section: navIntent?.section || null
    };
  } catch (error) {
    console.error("Error generating response:", error);
    // Graceful fallback - no error message shown
    return {
      response: SYSTEM_RECALIBRATING,
      shouldNavigate: false,
      section: null
    };
  }
}

// Handle navigation item click
export function handleNavigationClick(item: typeof NAVIGATION_ITEMS[0]): { 
  response: string; 
  shouldNavigate: boolean; 
  section: string | null 
} {
  return {
    response: item.message,
    shouldNavigate: true,
    section: item.section
  };
}

