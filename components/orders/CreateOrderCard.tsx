"use client";
import { useForm } from "react-hook-form";
import UIButton from "@/components/ui/UIButton";
import IconHolder from "@/components/ui/IconHolder";
import Title from "@/components/typography/Title";
import InputController from "../controllers/InputController";
import SelectController from "../controllers/SelectController";

export default function CreateOrderCard() {
  const { control } = useForm({});

  return (
    <div className="bg-white border border-on-surface p-6 h-full">
      <div className="flex items-center mb-6 gap-2">
        <IconHolder
          name="add_shopping_cart"
          bg="transparent"
          fontSize={24}
          color="var(--primary)"
          className="border-none!"
        />

        <Title>إنشاء طلب جديد</Title>
      </div>

      <form className="space-y-4">
        <InputController
          control={control}
          name="customerName"
          label="اسم العميل"
          placeholder="أدخل اسم العميل بالكامل"
        />

        <div className="grid grid-cols-2 gap-2">
          <InputController
            control={control}
            name="sku"
            label="رقم المنتج"
            placeholder="SKU-000"
          />

          <InputController
            control={control}
            name="quantity"
            label="الكمية"
            type="number"
          />
        </div>

        <SelectController
          control={control}
          name="shipping_method"
          label="طريقة التوصيل"
          options={[
            { name: "express", label: "شحن سريع" },
            { name: "standard", label: "شحن قياسي" },
            { name: "pickup", label: "إستلام من الفرع" },
          ]}
          getOptionLabel={(o) => o.label}
          getOptionValue={(o) => o.name}
          placeholder="طريقة التوصيل"
        />

        <UIButton
          className="w-full bg-primary text-white shadow-none!"
          iconName="arrow_back"
          iconPosition="end"
        >
          تأكيد الطلب
        </UIButton>
      </form>
    </div>
  );
}
