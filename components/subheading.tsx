"use client";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";
import React from "react";

const subheading = ({
  as: Tag = "h1",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 10, filter: "blur(10px)"}}
      whileInView={{opacity: 1, y: 0, filter: "blur(0px)"}}
      transition={{duration: 0.3, ease: "easeInOut", delay: 0.2}}
      viewport={{once: true}}
    >
      <Tag
        className={cn(
          "text-secondary max-w-lg pt-4 text-sm md:text-sm",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default subheading;
