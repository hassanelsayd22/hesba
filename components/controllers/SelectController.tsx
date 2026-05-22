"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Label from "./Label";
import IconHolder from "../ui/IconHolder";

type SelectControllerProps = {
  name: string;
  control: Control<any>;
  label: string | ReactNode;
  labelDesc?: string | ReactNode;
  icon?: string;
  placeholder: string;
  options: Record<string, any>[];
  getOptionLabel: (option: Record<string, any>) => string | number;
  getOptionValue: (option: Record<string, any>) => string | number;
  disabled?: boolean;
  classNames?: string;
};

const SelectController = ({
  name,
  control,
  label,
  labelDesc,
  icon,
  placeholder,
  options,
  getOptionLabel,
  getOptionValue,
  classNames = "",
  disabled = false,
}: SelectControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={cn("w-full flex flex-col gap-1", classNames)}>
            <Label name={name} label={label} labelDesc={labelDesc} />
            <div className="relative">
              <Select
                onValueChange={(val) => {
                  field.onChange(val);
                }}
                value={field.value ?? ""}
                disabled={disabled}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {options.map((option, index) => (
                      <SelectItem
                        key={index}
                        value={String(getOptionValue(option))}
                      >
                        {getOptionLabel(option)}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

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

export default SelectController;
