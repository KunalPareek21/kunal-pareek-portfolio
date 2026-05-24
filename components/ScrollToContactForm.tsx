'use client';

import { useEffect } from "react";

export function ScrollToContactForm() {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById("contact-form") ?? document.getElementById("contact");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return null;
}
