import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import UIButton from "@/components/ui/Button";

export default function InventoryHeader() {
  return (
    <div className="flex justify-between items-end mb-8 border-b-2 border-on-surface pb-4">
      <div>
        <Heading>إدارة المخزون</Heading>
        <SubHeading>مراقبة وتتبع حركة الأصناف والمستودعات بشكل لحظي</SubHeading>
      </div>

      <div className="flex gap-4">
        <UIButton
          iconName="file_download"
          className="bg-white! hover:bg-white/90! text-slate-700! shadow-none!"
        >
          تصدير التقرير
        </UIButton>

        <UIButton className="bg-primary text-white shadow-none!" iconName="add">
          إضافة حركة مخزنية
        </UIButton>
      </div>
    </div>
  );
}
