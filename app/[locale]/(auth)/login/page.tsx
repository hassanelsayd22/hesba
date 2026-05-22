"use client";
import EmailController from "@/components/controllers/EmailController";
import PasswordController from "@/components/controllers/PasswordController";
import SubHeading from "@/components/typography/SubHeading";
import Title from "@/components/typography/Title";
import UIButton from "@/components/ui/UIButton";
import { borderClass } from "@/constants/utilityClasses";
import { loginSchema } from "@/schemas/auth/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Login = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="flex items-center p-4  min-h-screen justify-center">
      <div className="w-110 flex flex-col items-center gap-4">
        <Image src={"/images/logo.png"} alt="Logo" width={150} height={75} />
        <SubHeading className="-mt-2">
          نظام إدارة المخزون والمحاسبة الذكي
        </SubHeading>
        <div className={clsx("bg-white p-8 gap-6 w-full", borderClass)}>
          <Title>تسجيل الدخول</Title>
          <SubHeading className="text-sm! mt-2 font-normal!">
            بوابة دخول آمنة وسريعة
          </SubHeading>
          <hr className="border-slate-300 my-5" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <EmailController control={control} />
            <PasswordController control={control} />
            <UIButton
              className="h-14! shadow-none!"
              iconSize={20}
              iconName="login"
              iconPosition="end"
            >
              تسجيل الدخول
            </UIButton>
          </form>
        </div>

        <div className="w-full h-px bg-gray-400 block relative mt-2">
          <span className="bg-background absolute left-1/2 -top-2 -translate-x-1/2  px-2 text-gray-500 text-sm">
            أو الدخول عبر
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-2">
          <UIButton
            className="w-full! text-black! shadow-none!"
            backgroundClass="bg-white hover:text-black/60!"
          >
            Google
          </UIButton>
          <UIButton
            className="w-full! text-black! shadow-none!"
            backgroundClass="bg-white hover:text-black/60!"
          >
            Facebook
          </UIButton>
        </div>
        <SubHeading className="text-sm mt-4">
          ليس لديك حساب؟
          <span className="text-primary font-medium cursor-pointer">
            طلب تجريبي للنظام
          </span>
        </SubHeading>
      </div>
    </div>
  );
};

export default Login;
