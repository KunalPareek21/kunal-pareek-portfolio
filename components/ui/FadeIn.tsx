'use client';

import { motion, type HTMLMotionProps, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport" | "transition">;

export function FadeIn({
  children,
  delay = 0,
  ...props
}: FadeInProps) {
  const motionProps: MotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
  };

  return (
    <motion.div {...motionProps} {...props}>
      {children}
    </motion.div>
  );
}
