import Heading from "@/components/typography/Heading";
import UIButton from "@/components/ui/UIButton";
import IconHolder from "@/components/ui/IconHolder";

export default function ProductsHeader() {
  return (
    <div className="flex justify-between items-end mb-8">
      <div className="space-y-2">
        <Heading>المنتجات</Heading>

        <div className="flex text-xs font-bold text-slate-500 gap-2">
          <span>الرئيسية</span>
          <IconHolder
            name="chevron_left"
            fontSize={20}
            bg="transparent"
            className="border-none"
            color="#333"
          />
          <span className="text-primary">عرض المنتجات</span>
        </div>
      </div>

      <UIButton
        iconName="add"
        className="bg-primary text-white px-6 py-3 shadow-none!"
      >
        إضافة منتج جديد
      </UIButton>
    </div>
  );
}
