import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";

const AuthedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="mr-64 pt-24 px-8 pb-12">
        <div className="max-w-container-max mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default AuthedLayout;
