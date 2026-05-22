"use client";
import { useForm } from "react-hook-form";
import IconHolder from "../IconHolder";
import InputController from "@/components/controllers/InputController";
import ProfileItem from "./ProfileItem";

const Navbar = () => {
  const { control } = useForm({});

  return (
    <header className="flex flex-row-reverse justify-between items-center h-16 w-[calc(100%-16rem)] fixed top-0 left-0 px-6 z-40 bg-white backdrop-blur-none border-b border-[#1b1b1c]">
      <div className="w-64!">
        <InputController
          name="search"
          control={control}
          placeholder="بحث عن معاملة..."
          icon="search"
          inputClasses="h-10!"
        />
      </div>

      <div className="flex w-fit gap-2">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface-container-high transition-colors">
            <IconHolder
              name="notifications"
              fontSize={20}
              className="bg-transparent! border-0!"
              color="#45556c"
            />
          </button>

          <button className="p-2 hover:bg-surface-container-high transition-colors">
            <IconHolder
              name="help"
              fontSize={20}
              className="bg-transparent! border-0!"
              color="#45556c"
            />
          </button>
        </div>
        <ProfileItem
          user={{
            name: "حسن السيد",
            role: "مدير الحسابات",
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
