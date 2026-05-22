import { ReactNode } from "react";
import { Control, Controller } from "react-hook-form";
import { format } from "date-fns";
import { arSA } from "date-fns/locale";
import { arSA as arSADayPicker } from "react-day-picker/locale";
import Label from "./Label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/Button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { borderClass } from "@/constants/utilityClasses";
import { useLocale } from "next-intl";

const translations = {
  en: {
    dir: "ltr",
    values: {
      placeholder: "Pick a date",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      placeholder: "اختر تاريخًا",
    },
  },
};
const dayPickerLocales = {
  ar: arSADayPicker,
} as const;
const dateFnsLocales = {
  ar: arSA,
} as const;

export type DatePickerControllerProps = {
  name: string;
  control: Control;
  label?: string | ReactNode;
  labelDesc?: string | ReactNode;
  placeholder?: string;
};

const DatePickerController = ({
  name,
  control,
  label,
  labelDesc,
  placeholder = "Pick a date",
}: DatePickerControllerProps) => {
  const language = useLocale();
  const dir = language === "ar" ? "rtl" : "ltr";
  const dateFnsLocale =
    dir === "rtl"
      ? dateFnsLocales[language as keyof typeof dateFnsLocales]
      : undefined;
  const dayPickerLocale =
    dir === "rtl"
      ? dayPickerLocales[language as keyof typeof dayPickerLocales]
      : undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full flex flex-col gap-1">
          <Label name={name} label={label} labelDesc={labelDesc} />

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                data-empty={!field.value}
                className={cn(
                  "w-full h-12 rounded-none justify-start text-left font-normal data-[empty=true]:text-muted-foreground bg-background!",
                  borderClass,
                )}
                dir={dir}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {field.value ? (
                  format(field.value, "PPP", { locale: dateFnsLocale })
                ) : (
                  <span>{placeholder}</span>
                )}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" dir={dir}>
              <Calendar
                dir={dir}
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                locale={dayPickerLocale}
              />
            </PopoverContent>
          </Popover>

          {error && (
            <p className="text-xs text-red-500 mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default DatePickerController;
