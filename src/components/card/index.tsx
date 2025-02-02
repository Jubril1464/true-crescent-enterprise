import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "shadow";
  padding?: "sm" | "md" | "lg";
};

const variantStyles: Record<string, string> = {
  default: "border border-gray-200",
  shadow: "shadow-lg",
};

const paddingStyles: Record<string, string> = {
  sm: "p-3",
  md: "p-6",
  lg: "p-9",
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  padding = "md",
}) => {
  return (
    <div
      className={clsx(
        "rounded-md flex flex-col justify-between gap-3",
        variantStyles[variant],
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
};
