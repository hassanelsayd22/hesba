"use client";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UIButtonProps = {
  children: React.ReactNode;
  iconName?: string;
  iconPosition?: "start" | "end";
  iconSize?: number;
  iconColor?: string;
  backgroundClass?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const UIButton = ({
  children,
  iconName,
  iconPosition = "start",
  iconSize = 18,
  iconColor = "currentColor",
  backgroundClass = "bg-primary hover:bg-primary/80",
  className,
  ...props
}: UIButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "flex items-center justify-center gap-2",
        "px-4 h-11",
        backgroundClass,
        "cursor-pointer text-white transition-colors",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "rounded-none brutalist-shadow brutalist-border",
        className,
      )}
    >
      {iconName && iconPosition === "start" && (
        <span
          className="material-symbols-outlined"
          style={{ fontSize: iconSize, color: iconColor }}
        >
          {iconName}
        </span>
      )}

      <span>{children}</span>

      {iconName && iconPosition === "end" && (
        <span
          className="material-symbols-outlined"
          style={{ fontSize: iconSize, color: iconColor }}
        >
          {iconName}
        </span>
      )}
    </button>
  );
};

export default UIButton;
