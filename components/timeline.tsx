"use client";
import {cn} from "@/lib/utils";
import {CheckCircleIcon} from "lucide-react";
import {motion, useInView} from "motion/react";
import {useRef} from "react";

type TimelineItem = {
  year: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {once: true, amount: 0.6});

  const data: TimelineItem[] = [
    {
      year: "2025",
      content: [
        {
          title: "Started my journey as a software engineer",
          description: "I started my journey as a software engineer at Google",
        },
      ],
    },
    {
      year: "2024",
      content: [
        {
          title: "Joined a startup",
          description: "I joined a promising startup as a lead developer",
        },
      ],
    },
    {
      year: "2023",
      content: [
        {
          title: "Graduated from university",
          description: "I graduated with a degree in Computer Science",
        },
      ],
    },
    {
      year: "2022",
      content: [
        {
          title: "Internship at a tech company",
          description:
            "Completed a summer internship at a renowned tech company",
        },
      ],
    },
    {
      year: "2021",
      content: [
        {
          title: "Started learning programming",
          description: "Began my journey into programming with online courses",
        },
      ],
    },
    {
      year: "2020",
      content: [
        {
          title: "Discovered my passion for technology",
          description:
            "Realized my interest in technology and decided to pursue it",
        },
      ],
    },
  ];

  return (
    <motion.div ref={ref} className="py-10">
      {data.map((item, idx) => (
        <div key={item.year} className="mb-4">
          <motion.h2
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{duration: 0.3, delay: idx * 0.1}}
            className="shadow-aceternity mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
          >
            {item.year}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {item.content.map((content) => (
              <div key={content.title} className="pl-4">
                <Step isInView={isInView} idx={idx}>
                  <motion.h3
                    animate={{
                      filter: isInView ? "blur(0px)" : "blur(10px)",
                      opacity: isInView ? 1 : 0,
                    }}
                    transition={{duration: 0.3, delay: idx * 0.2}}
                    className="text-neutral-800"
                  >
                    {content.title}
                  </motion.h3>
                </Step>
                <motion.p
                  animate={{
                    filter: isInView ? "blur(0px)" : "blur(10px)",
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{duration: 0.3, delay: idx * 0.3}}
                  className="pt-1 text-sm text-neutral-400"
                >
                  {content.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

const Step = ({
  children,
  className,
  isInView,
  idx,
}: {
  children?: React.ReactNode;
  className?: string;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.span
      className={cn("flex items-start gap-2", className)}
      animate={{
        filter: isInView ? "blur(0px)" : "blur(10px)",
        opacity: isInView ? 1 : 0,
      }}
      transition={{duration: 0.3, delay: idx * 0.2}}
    >
      <CheckCircleIcon className="mt-1 h-4 w-4 text-neutral-500" />
      {children}
    </motion.span>
  );
};
