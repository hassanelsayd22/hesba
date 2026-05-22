import clsx from "clsx";
import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={clsx("font-sans text-4xl font-bold text-[#1b1b1c]", className)}
    >
      {children}
    </h1>
  );
};

export default Heading;
