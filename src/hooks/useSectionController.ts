import { useState, useCallback } from "react";

export type SectionType = "about" | "skills" | "projects" | "contact" | "social";

export interface UseSectionControllerReturn {
  activeSections: SectionType[];
  handleUserMessage: (message: string) => SectionType[];
  closeSection: (section: SectionType) => void;
  closeAllSections: () => void;
}

export function useSectionController(): UseSectionControllerReturn {
  const [activeSections, setActiveSections] = useState<SectionType[]>([]);

  const handleUserMessage = useCallback((message: string): SectionType[] => {
    const lowerMessage = message.toLowerCase();
    const newSections: SectionType[] = [];

    if (lowerMessage.includes("about")) {
      newSections.push("about");
    }
    if (lowerMessage.includes("skill")) {
      newSections.push("skills");
    }
    if (lowerMessage.includes("project")) {
      newSections.push("projects");
    }
    if (lowerMessage.includes("contact")) {
      newSections.push("contact");
    }
    if (lowerMessage.includes("social")) {
      newSections.push("social");
    }

    if (newSections.length > 0) {
      setActiveSections((prev) => {
        const uniqueSections = new Set([...prev, ...newSections]);
        return Array.from(uniqueSections);
      });
    }

    return newSections;
  }, []);

  const closeSection = useCallback((section: SectionType) => {
    setActiveSections((prev) => prev.filter((s) => s !== section));
  }, []);

  const closeAllSections = useCallback(() => {
    setActiveSections([]);
  }, []);

  return {
    activeSections,
    handleUserMessage,
    closeSection,
    closeAllSections,
  };
}

