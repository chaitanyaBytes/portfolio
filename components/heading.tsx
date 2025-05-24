import React from "react";
import {cn} from "@/lib/utils";

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
    <Tag
      className={cn(
        "text-primary text-2xl font-bold tracking-tighter drop-shadow-2xl md:text-4xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default heading;
