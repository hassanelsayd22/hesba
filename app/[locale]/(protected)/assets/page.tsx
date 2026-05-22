"use client";

import AssetsHeader from "@/components/assets/AssetsHeader";
import AssetsTable from "@/components/assets/AssetsTable";
import KPICards from "@/components/assets/KPICards";

import IconHolder from "@/components/ui/IconHolder";

const sideCards = [
  {
    icon: "verified",
    title: "ضمانات سارية",
    description:
      "هناك 14 أصل تتجاوز قيمتها 500,000 ر.س تمتلك شهادات ضمان سارية المفعول حتى 2026.",
    color: "var(--text-secondary)",
  },
  {
    icon: "warning",
    title: "أصول حرجة",
    description:
      "3 خوادم بيانات تقترب من نهاية عمرها الافتراضي. نوصي بجدولة الاستبدال في الربع المالي القادم.",
    color: "var(--teritary)",
  },
  {
    icon: "history",
    title: "آخر تحديث للقيمة",
    description:
      "تم تحديث حسابات الاستهلاك لجميع الأصول تلقائياً بناءً على إغلاق شهر يونيو الماضي.",
    color: "var(--primary)",
  },
];

export default function FixedAssetsPage() {
  return (
    <main>
      {/* Header */}
      <AssetsHeader />

      {/* KPI Cards */}
      <KPICards />

      {/* Content */}
      <section className="grid grid-cols-12 gap-8">
        {/* Table */}
        <AssetsTable />

        {/* Side Cards */}
        <div className="col-span-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {sideCards.map((card) => (
            <div
              key={card.title}
              className="relative border border-[#1b1b1c] bg-white p-6"
            >
              <IconHolder
                name={card.icon}
                color={card.color}
                fontSize={24}
                bg="transparent"
                className={`mb-4 border-none`}
              />

              <h4 className="mb-2 font-bold">{card.title}</h4>

              <p className="text-sm text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
