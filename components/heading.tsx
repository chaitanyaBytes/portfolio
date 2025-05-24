"use client";
import React from "react";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";

const heading = ({
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
      transition={{duration: 0.3, ease: "easeInOut"}}
      viewport={{once: true}}
    >
      <Tag
        className={cn(
          "text-primary text-2xl font-bold tracking-tighter drop-shadow-2xl md:text-4xl",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default heading;
