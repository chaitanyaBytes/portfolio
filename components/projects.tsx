"use client";

import React from "react";
import Image from "next/image";
import {motion} from "motion/react";

const projects = [
  {
    title: "Empire UI",
    description:
      "AI-powered open-source component library built for React and Next.js applications.",
    content:
      "AI-powered components built for React and Next.js applications. Empire UI provides a comprehensive suite of intelligent UI components that make integrating AI features into your applications seamless and visually stunning.",
    src: "/projects/empireui/empireui-landing.png",
  },
  {
    title: "Nonilion",
    description: "A remote co-working space for developers",
    content:
      "Nonilion is a remote co-working space for developers. It is a platform that allows developers to find a co-working space near them and book a desk for a day, week, or month.",
    src: "/projects/nonilion/nonilion1.png",
  },
  {
    title: "Ecommerce Admin",
    description: "An admin dashboard for your ecommerce store",
    content:
      "Ecommerce Admin is an admin dashboard for your ecommerce store. It is a platform that allows you to create a admin dashboard for your ecommerce store and manage your products and orders.",
    src: "/projects/ezkart-admin/ezkart1.png",
  },
  {
    title: "EzKart",
    description: "A shopping cart for your ecommerce store",
    content:
      "EzKart is a shopping cart for your ecommerce store. It is a platform that allows you to create a shopping cart for your ecommerce store and manage your products and orders.",
    src: "/projects/ecom/ecom1.png",
  },
];

const Projects = () => {
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building things that help people and make a difference. Here are
        some of the projects I&apos;ve worked on.
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            initial={{opacity: 0, filter: "blur(10px)", y: 10}}
            whileInView={{opacity: 1, filter: "blur(0px)", y: 0}}
            transition={{duration: 0.3, delay: 0.1 * idx, ease: "easeInOut"}}
            key={project.title}
            className="group relative"
          >
            <Image
              src={project.src}
              alt={project.title}
              height={400}
              width={400}
              className="h-56 w-full rounded-xl transition-all duration-200 group-hover:scale-102"
            />
            <h2 className="text-primary dark:text-primary font z-20 mt-2 text-xl tracking-tight">
              {project.title}
            </h2>
            <p className="text-secondary text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
