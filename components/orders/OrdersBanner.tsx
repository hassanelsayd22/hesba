import UIButton from "@/components/ui/Button";
import IconHolder from "@/components/ui/IconHolder";

export default function OrdersBanner() {
  return (
    <div className="bg-teritary text-white p-4 border border-on-surface flex items-center justify-between">
      <div className="flex items-center gap-4">
        <IconHolder
          name="warning"
          color="white"
          bg="transparent"
          className="border-none!"
          fontSize={30}
        />

        <div>
          <p className="font-bold">تنبيه المخزون</p>

          <p className="text-sm opacity-90">
            يوجد 4 طلبات قيد الانتظار تحتوي على منتجات قاربت على النفاد.
          </p>
        </div>
      </div>

      <UIButton className="bg-white hover:bg-white/90! text-teritary! shadow-none! border-none! font-bold ">
        مراجعة المخزون
      </UIButton>
    </div>
  );
}
