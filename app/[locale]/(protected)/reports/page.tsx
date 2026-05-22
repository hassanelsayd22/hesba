"use client";

import ReportsHeader from "@/components/reports/ReportsHeader";
import TransactionsTable from "@/components/reports/TransactionsTable";
import Title from "@/components/typography/Title";
import IconHolder from "@/components/ui/IconHolder";

const inventoryItems = [
  {
    name: "معالج إنتل Core i7",
    level: "عالي",
    variant: "high",
  },
  {
    name: "لوحة أم ASUS B550",
    level: "عالي",
    variant: "high",
  },
  {
    name: "ذاكرة RAM 16GB",
    level: "متوسط",
    variant: "medium",
  },
];

export default function ReportsAnalyticsPage() {
  return (
    <main>
      <ReportsHeader />

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col overflow-hidden border border-slate-900 lg:col-span-8">
          <div className="flex items-center justify-between border-b border-slate-900 bg-slate-100 p-4">
            <Title>بيان الأرباح والخسائر</Title>

            <span className="font-mono text-sm text-outline">
              أكتوبر 2023 - ديسمبر 2023
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="border-r-2 border-primary p-4">
                <p className="mb-1 text-xs font-bold text-outline">
                  إجمالي المبيعات
                </p>

                <h3 className="text-2xl font-black">245,800 ر.س</h3>

                <div className="mt-1 flex items-center gap-1 text-xs font-bold text-secondary">
                  <IconHolder name="trending_up" fontSize={14} />

                  <span>+12.5% عن الشهر الماضي</span>
                </div>
              </div>

              <div className="border-r-2 border-error p-4">
                <p className="mb-1 text-xs font-bold text-outline">
                  تكلفة البضاعة المباعة
                </p>

                <h3 className="text-2xl font-black">152,400 ر.س</h3>

                <p className="mt-1 text-xs font-bold text-error">
                  زيادة 4% في التوريد
                </p>
              </div>

              <div className="border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-xs font-bold text-outline">
                  صافي الربح
                </p>

                <h3 className="text-2xl font-black text-primary">93,400 ر.س</h3>

                <p className="mt-1 text-xs font-bold text-secondary">
                  هامش ربح 38%
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex h-48 items-end justify-between gap-2 border-b border-slate-200 pb-2">
                {[60, 45, 85, 30, 55, 70, 40].map((height, index) => (
                  <div
                    key={index}
                    className={`group relative flex-1 transition-colors ${
                      index === 2
                        ? "bg-primary"
                        : "bg-slate-200 hover:bg-primary"
                    }`}
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ))}
              </div>

              <div className="mt-2 flex justify-between text-[10px] font-bold text-slate-400">
                <span>أكتوبر</span>
                <span>ديسمبر</span>
                <span>فبراير</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 flex flex-col border border-slate-900 lg:col-span-4">
          <div className="border-b border-slate-900 bg-slate-100 p-4">
            <Title>ملخص المخزون</Title>
          </div>

          <div className="flex flex-1 flex-col space-y-6 p-6">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm font-bold">
                <span>القيمة الإجمالية للمخزون</span>

                <span className="font-mono">842,000 ر.س</span>
              </div>

              <div className="h-4 overflow-hidden border border-slate-200 bg-slate-100">
                <div className="h-full w-[75%] bg-primary" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-slate-200 p-3">
                <p className="text-[10px] font-bold text-outline">
                  منتجات منخفضة
                </p>

                <h4 className="text-xl font-black text-error">12</h4>
              </div>

              <div className="border border-slate-200 p-3">
                <p className="text-[10px] font-bold text-outline">
                  منتجات راكدة
                </p>

                <h4 className="text-xl font-black">28</h4>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="mb-3 text-xs font-bold">الأصناف الأكثر دورانًا</h4>

              <div className="space-y-3">
                {inventoryItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="font-bold">{item.name}</span>

                    <span
                      className={`px-2 py-0.5 text-[10px] font-black ${
                        item.variant === "high"
                          ? "bg-secondary-container"
                          : "bg-surface-container-high"
                      }`}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <TransactionsTable />

        {/* Insights */}
        <div className="col-span-12 border border-slate-200 border-l-4 border-l-primary bg-white p-6 lg:col-span-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-3">
              <IconHolder
                name="lightbulb"
                color="var(--primary)"
                bg="transparent"
                fontSize={20}
                className="border-none"
              />
            </div>

            <div>
              <h4 className="font-bold text-slate-900">توصية إدارة المخزون</h4>

              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                هناك زيادة بنسبة 15% في الطلب على فئة أجهزة الشبكات. نقترح زيادة
                حد إعادة الطلب لهذا الصنف بمقدار 20 وحدة لتجنب نفاذ المخزون في
                الربع القادم.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 border border-slate-200 border-l-4 border-l-text-secondary bg-white p-6 lg:col-span-6">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-50 p-3">
              <IconHolder
                name="monetization_on"
                color="var(--text-secondary)"
                bg="transparent"
                fontSize={20}
                className="border-none"
              />
            </div>

            <div>
              <h4 className="font-bold text-slate-900">
                السيولة النقدية المتوقعة
              </h4>

              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                من المتوقع تحصيل مبالغ بقيمة 124,000 ر.س خلال الـ 15 يومًا
                القادمة بناءً على الفواتير المستحقة. هذا سيغطي التكاليف
                التشغيلية بنسبة 140%.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
