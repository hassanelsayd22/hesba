import UIButton from "@/components/ui/UIButton";
import IconHolder from "@/components/ui/IconHolder";

export default function Pagination() {
  return (
    <div className="p-4 flex justify-between items-center">
      <span className="text-xs text-slate-500">عرض 1-4 من أصل 1,284 منتج</span>

      <div className="flex gap-2">
        <UIButton disabled className="shadow-none! bg-white">
          <IconHolder
            className="border-none!"
            name="chevron_right"
            bg="transparent"
            color="#333"
            fontSize={20}
          />
        </UIButton>

        <UIButton className="shadow-none! bg-white text-[#333]!">1</UIButton>
        <UIButton className="shadow-none! bg-white text-[#333]!">2</UIButton>
        <UIButton className="shadow-none! bg-white text-[#333]!">3</UIButton>

        <UIButton className="shadow-none! bg-white">
          <IconHolder
            name="chevron_left"
            className="border-none!"
            bg="transparent"
            color="#333"
            fontSize={20}
          />
        </UIButton>
      </div>
    </div>
  );
}
