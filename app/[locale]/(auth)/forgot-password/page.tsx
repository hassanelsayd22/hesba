"use client";
import InputController from "@/components/controllers/InputController";
import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import UIButton from "@/components/ui/Button";
import IconHolder from "@/components/ui/IconHolder";
import { borderClass } from "@/constants/utilityClasses";
import clsx from "clsx";
import Image from "next/image";
import { useForm } from "react-hook-form";

const ForgotPaassword = () => {
  const { control } = useForm();
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={clsx(
          "max-w-300 w-full grid grid-cols-1 md:grid-cols-12  bg-white overflow-hidden",
        )}
      >
        <div
          className={clsx(
            "hidden md:flex md:col-span-7 bg-primary relative flex-col justify-between p-12 overflow-hidden",
          )}
        >
          <div className="z-10">
            <div
              className={clsx(
                "bg-white inline-block p-4 mb-8 w-fit",
                borderClass,
              )}
            >
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={100}
                height={50}
              />
            </div>
            <Heading className="text-white! leading-tight mb-4">
              نظام إدارة <br /> المخزون والمحاسبة <br /> الأكثر دقة.
            </Heading>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="p-6 brutalist-border bg-bg-secondary">
              <IconHolder
                name="security"
                fontSize={20}
                color="var(--text-secondary)"
                className="bg-transparent! border-none"
              />
              <SubHeading className="text-text-secondary">
                حماية البيانات المشفرة
              </SubHeading>
            </div>
            <div className="p-6 brutalist-border bg-white">
              <IconHolder
                name="analytics"
                fontSize={20}
                color="var(--text-neutral)"
                className="bg-transparent! border-none"
              />
              <SubHeading className="text-neutral">
                تحليلات فورية دقيقة{" "}
              </SubHeading>
            </div>
          </div>

          <div className="absolute -bottom-20 -right-20 w-96 h-96 border-40 border-white/20"></div>
        </div>
        <div
          className={clsx(
            "col-span-12 md:col-span-5 p-8 md:p-16 flex flex-col justify-center",
            borderClass,
          )}
        >
          <div className="mb-12">
            <SubHeading className="text-primary! font-semibold! flex items-center gap-2 mb-6">
              <IconHolder
                name="lock_reset"
                fontSize={24}
                color="var(--primary)"
                className="bg-transparent! border-none"
              />
              استعادة الوصول
            </SubHeading>
            <Heading className="mb-2 text-2xl!">نسيت كلمة المرور؟</Heading>
            <SubHeading>
              أدخل بريدك الإلكتروني المسجل وسنرسل لك رابطاً لإعادة تعيين كلمة
              المرور الخاصة بك.
            </SubHeading>
          </div>
          <div className="space-y-6">
            <InputController
              control={control}
              label="البريد الإلكتروني"
              placeholder="أدخل بريدك الإلكتروني"
              name="email"
              icon="mail"
            />
            <UIButton
              className="h-14! w-full text-2xl! font-semibold!"
              iconSize={20}
              iconName="arrow_back"
              iconPosition="end"
            >
              إعادة تعيين كلمة المرور
            </UIButton>
          </div>
          <hr className="border-gray-300 my-12" />
          <SubHeading className="text-primary! font-semibold! flex items-center gap-2 mb-6">
            <IconHolder
              name="arrow_forward"
              fontSize={24}
              color="var(--primary)"
              className="bg-transparent! border-none"
            />
            العودة إلى تسجيل الدخول
          </SubHeading>

          <div className="mt-4 bg-gray-200 w-full p-4 border border-dashed border-gray-500 flex items-center gap-1">
            <IconHolder
              name="info"
              fontSize={18}
              color="#6a7282"
              className="bg-transparent! border-none"
            />
            <SubHeading>هل تواجه مشكلة؟ اتصل بالدعم الفني المباشر.</SubHeading>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPaassword;
