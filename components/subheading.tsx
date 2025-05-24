import {cn} from "@/lib/utils";
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
    <Tag
      className={cn(
        "text-secondary max-w-lg pt-4 text-sm md:text-sm",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default subheading;
