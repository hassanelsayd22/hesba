"use client";
import { useForm } from "react-hook-form";
import UIButton from "@/components/ui/UIButton";
import IconHolder from "@/components/ui/IconHolder";
import Title from "@/components/typography/Title";
import InputController from "../controllers/InputController";

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

        <div>
          <label className="block text-sm font-bold mb-1">طريقة الشحن</label>

          <select className="w-full border border-on-surface p-2 bg-white">
            <option value="express">توصيل سريع</option>
            <option value="standard">توصيل قياسي</option>
            <option value="pickup">استلام من الفرع</option>
          </select>
        </div>

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
