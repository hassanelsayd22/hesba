"use client";
import { borderClass } from "@/constants/utilityClasses";
import clsx from "clsx";
import { ReactNode } from "react";
import { Control, Controller } from "react-hook-form";
import IconHolder from "../ui/IconHolder";

export type InputControllerProps = {
  name: string;
  control: Control;
  label?: string | ReactNode;
  labelDesc?: string | ReactNode;
  placeholder?: string;
  inputClasses?: string;
  icon?: string;
  [key: string]: any;
};

const InputController = ({
  name,
  control,
  label,
  labelDesc,
  placeholder,
  icon,
  inputClasses,
  ...rest
}: InputControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className="w-full flex flex-col gap-1">
            {label || labelDesc ? (
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor={name}
                  className="text-sm font-medium text-gray-700"
                >
                  {label}
                </label>

                {labelDesc && (
                  <div className="text-xs text-primary cursor-pointer">
                    {labelDesc}
                  </div>
                )}
              </div>
            ) : null}

            <div className="relative">
              <input
                id={name}
                {...field}
                {...rest}
                className={clsx(
                  "w-full h-12 bg-background outline-primary rounded-none!",
                  borderClass,
                  inputClasses,
                  icon ? "pl-10 pr-4" : "px-4",
                )}
                placeholder={placeholder}
                value={
                  field.value
                    ? field.name === "date"
                      ? new Date(field?.value)?.toISOString()?.split("T")[0]
                      : field.value
                    : ""
                }
              />

              {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <IconHolder
                    name={icon}
                    fontSize={25}
                    bg="transparent"
                    color="#808080"
                    className="border-none"
                  />
                </div>
              )}
            </div>
            {error && (
              <p className="text-xs text-red-500 mt-1">{error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};

export default InputController;
