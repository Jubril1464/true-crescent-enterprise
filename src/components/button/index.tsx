import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline" | "secondary";
type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "submit" | "reset" | "button" | undefined

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?:ButtonType
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-gray-800",
  outline: "border border-black text-black hover:bg-gray-100",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  className,
  onClick,
  disabled = false,
  type='submit'
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx(
        "inline-flex items-center justify-center rounded focus:outline-none transition",
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
