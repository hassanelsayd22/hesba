import IconHolder from "@/components/ui/IconHolder";

const stats = [
  {
    label: "إجمالي المنتجات",
    value: "1,284",
    desc: "+12%",
    icon: "trending_up",
    isPositive: true,
  },
  {
    label: "قيمة المخزون",
    value: "42,500 ر.س",
  },
  {
    label: "منخفض المخزون",
    value: "12",
    icon: "warning",
    isNegative: true,
  },
  {
    label: "الفئات النشطة",
    value: "24",
  },
];

export default function ProductsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {stats.map((item, i) => (
        <div key={i} className="bg-white border border-slate-200 p-4">
          <p className="text-slate-500 text-sm mb-2">{item.label}</p>

          <div className="flex justify-between items-center">
            <span
              className={`text-lg font-bold ${
                item.isNegative ? "text-teritary" : ""
              }`}
            >
              {item.value}
            </span>
            <div className="flex text-sm">
              {item.icon && (
                <IconHolder
                  name={item.icon}
                  fontSize={20}
                  bg="transparent"
                  className="border-none"
                  color={
                    item.isNegative
                      ? "var(--teritary)"
                      : "var(--text-secondary)"
                  }
                />
              )}
              <span
                className={`text-sm font-bold ${
                  item.isNegative ? "text-teritary" : "text-text-secondary"
                }`}
              >
                {item?.desc}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
