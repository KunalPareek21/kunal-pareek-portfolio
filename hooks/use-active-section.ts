import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[], offset: number = 200) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top < offset) {
            current = id;
          }
        }
      }

      if (window.scrollY === 0) {
        current = "";
      } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        // Scrolled to bottom
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call once to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
