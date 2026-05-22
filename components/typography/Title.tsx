import clsx from "clsx";
import React from "react";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className={clsx("text-2xl font-bold", className)}>{children}</h2>;
};

export default Title;
