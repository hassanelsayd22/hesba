import UIButton from "@/components/ui/Button";
import Image from "next/image";

export default function SystemUpdatesCard() {
  return (
    <div className="bg-white border border-on-surface p-4 py-8 flex items-center gap-4 h-50">
      <div className="h-16 w-16 overflow-hidden border border-on-surface relative">
        <Image
          fill
          alt="System updates"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBct8p2HiuW5SOAZSPZnfn3lPZZHATfd1B2TZom4bs2L6qy59ONPak9RKiayCp8H969YWGDHoAao8hDWoTkyYAvQ4-E7lxzaNaCIT_lr56lNoQ49xeByyu6jYC8xzXQ2R1mVkVPznsNV0SlQJLoW8Sr78GuB08ZKqRl_jDm0TQITaCSlr_uIx3toyyYhqDm5ZvToc44l2g9ca9bWD6guXA-N9k6YQgnGZIoOQMrtQxI-3vL_yPhjNVsDubWHM1DW75peMbFkqqH2nk"
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bold">تحديثات النظام</h3>

        <p className="text-sm text-slate-500">
          تم مزامنة آخر 12 طلب مع منصة المتجر الإلكتروني بنجاح.
        </p>
      </div>

      <UIButton className="shadow-none! bg-white! text-slate-800!">
        عرض السجل
      </UIButton>
    </div>
  );
}
