import React from "react";
import clsx from "clsx";

type InputProps = {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  error?: boolean;
  icon?: React.ReactNode;
};

const sizeStyles: Record<string, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  placeholder,
  onChange,
  className,
  size = "md",
  disabled = false,
  error = false,
  icon,
}) => {
  return (
    <div className={clsx("relative w-full", className)}>
      {icon && (
        <span
          className={clsx(
            "absolute inset-y-0 left-0 flex items-center pl-3",
            size === "sm" && "text-sm",
            size === "md" && "text-base",
            size === "lg" && "text-lg"
          )}
        >
          {icon}
        </span>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={clsx(
          "border border-input rounded-md focus:outline-none focus:ring-2 transition w-full",
          "h-10  pr-3 py-2 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
          sizeStyles[size],
          disabled && "opacity-50 cursor-not-allowed",
          icon ? "pl-10" : "pl-3"
        )}
      />
    </div>
  );
};

export default Input;
