import clsx from "clsx";

const stats = [
  {
    title: "الإيرادات",
    value: "124,500.00",
    unit: "ر.س",
    change: "12%+ عن الشهر الماضي",
    trend: "up",
    color: "text-text-secondary",
    bg: "",
    icon: "trending_up",
  },
  {
    title: "المصروفات",
    value: "42,320.50",
    unit: "ر.س",
    change: "5%+ زيادة في التكاليف",
    trend: "down",
    color: "text-teritary",
    bg: "",
    icon: "trending_down",
  },
  {
    title: "الأرباح",
    value: "82,179.50",
    unit: "ر.س",
    change: "أداء ممتاز",
    trend: "neutral",
    color: "text-primary",
    valueColor: "text-primary",
    bg: "bg-primary/10",
    icon: "check_circle",
  },
  {
    title: "تنبيهات المخزون",
    value: "14",
    unit: "منتجات منخفضة",
    action: true,
    color: "text-teritary",
    valueColor: "text-teritary",
    bg: "bg-teritary/10",
  },
];

const Statistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-white mb-10 brutalist-shadow">
      {stats.map((item, index) => (
        <div key={index} className={`p-6 brutalist-border  ${item.bg}`}>
          {/* Title */}
          <p
            className={clsx(
              `text-xs ${item.valueColor ?? "text-slate-500"} mb-2 uppercase`,
            )}
          >
            {item.title}
          </p>

          {/* Value */}
          <div className="flex items-baseline gap-2">
            <span
              className={clsx(
                `text-2xl font-semibold ${item.valueColor ?? "text-slate-900"}`,
              )}
            >
              {item.value}
            </span>
            <span
              className={clsx(`text-xs ${item.valueColor ?? "text-slate-500"}`)}
            >
              {item.unit}
            </span>
          </div>

          {/* Footer */}
          {item.action ? (
            <div className="mt-4">
              <button className="bg-teritary text-white px-3 py-1 text-xs font-bold">
                عرض القائمة
              </button>
            </div>
          ) : (
            <div
              className={`mt-4 flex items-center gap-1 text-xs font-bold ${item.color}`}
            >
              <span className="material-symbols-outlined text-sm">
                {item.icon}
              </span>
              <span>{item.change}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Statistics;
