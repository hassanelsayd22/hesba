import UIButton from "@/components/ui/UIButton";
import IconHolder from "@/components/ui/IconHolder";

export default function ProductsFilters() {
  return (
    <div className="p-4 border-b border-slate-200 flex flex-wrap justify-between gap-4">
      <div className="flex items-center gap-2">
        <UIButton
          className="shadow-none! bg-white! text-[#333]!"
          iconPosition="start"
          iconName="filter_list"
        >
          تصفية
        </UIButton>

        <div className="h-6 w-px bg-slate-300" />

        <UIButton
          className="shadow-none! bg-white! text-[#333]!"
          iconPosition="end"
          iconName="expand_more"
        >
          الفئة: الكل
        </UIButton>

        <UIButton
          className="shadow-none! bg-white! text-[#333]!"
          iconPosition="end"
          iconName="expand_more"
        >
          الحالة: نشط
        </UIButton>
      </div>

      <div className="flex gap-2">
        <UIButton className="shadow-none!" backgroundClass="bg-white">
          <IconHolder
            name="file_download"
            fontSize={20}
            bg="transparent"
            className="border-none"
            color="#333"
          />
        </UIButton>

        <UIButton className="shadow-none!" backgroundClass="bg-white">
          <IconHolder
            name="print"
            fontSize={20}
            bg="transparent"
            className="border-none"
            color="#333"
          />
        </UIButton>
      </div>
    </div>
  );
}
