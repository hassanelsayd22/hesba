import React from "react";
import IconHolder from "../IconHolder";

type Props = {
  user?: {
    name: string;
    role: string;
  };
};
const ProfileItem = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-3 pr-4 border-r border-slate-200">
      <div className="text-right">
        <p className="font-bold text-label-sm leading-tight ">
          {user?.name || "—"}
        </p>
        <p className="text-[10px] text-outline font-medium">
          {user?.role || "—"}
        </p>
      </div>

      <IconHolder
        name="account_circle"
        fontSize={32}
        className="bg-transparent! border-0!"
        color="#45556c"
      />
    </div>
  );
};

export default ProfileItem;
