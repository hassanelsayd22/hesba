import clsx from "clsx";
import React from "react";

const SubHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h4 className={clsx("text-base font-light text-gray-500", className)}>
      {children}
    </h4>
  );
};

export default SubHeading;
