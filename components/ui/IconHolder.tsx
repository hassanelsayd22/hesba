import { borderClass } from "@/constants/utilityClasses";
import clsx from "clsx";
import React from "react";

const IconHolder = ({
  name,
  type = "outlined",
  size = 20,
  bg = "var(--primary)",
  color = "#fff",
  className,
  fontSize,
}: {
  name: string;
  type?: "outlined" | "rounded" | "sharp";
  size?: number;
  bg?: string;
  color?: string;
  className?: string;
  fontSize?: number;
}) => {
  return (
    <div
      style={{ width: size, height: size, backgroundColor: bg }}
      className={clsx(
        "flex items-center justify-center",
        borderClass,
        className,
      )}
    >
      <span
        className={`material-symbols-${type}`}
        style={{ color, fontSize: fontSize ?? size * 0.5 }}
      >
        {name}
      </span>
    </div>
  );
};

export default IconHolder;
