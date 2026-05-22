import IconHolder from "@/components/ui/IconHolder";

const stats = [
  {
    title: "إجمالي المنتجات",
    value: "1,284",
    desc: "+12 هذا الشهر",
    icon: "inventory",
    iconClass: "text-primary",
    iconColor: "var(--primary)",
    bg: "bg-white",
  },
  {
    title: "تنبيهات نقص المخزون",
    value: "23",
    desc: "تحتاج لإعادة طلب فورية",
    icon: "warning",
    iconClass: "text-error",
    iconColor: "var(--teritary)",
    valueClass: "text-teritary",
    bg: "bg-surface-container-low",
  },
  {
    title: "قيمة المخزون الحالي",
    value: "452,000 ر.س",
    desc: "بناءً على سعر التكلفة",
    icon: "payments",
    iconClass: "text-secondary",
    iconColor: "var(--text-secondary)",
    bg: "bg-white",
  },
  {
    title: "معدل الدوران",
    value: "4.2",
    desc: "زيادة بنسبة 8% عن الربع السابق",
    icon: "sync_alt",
    iconColor: "var(--text-secondary)",
    bg: "bg-bg-secondary text-text-secondary",
  },
];

export default function InventoryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border-2 border-on-surface mb-12">
      {stats.map((item, index) => (
        <div
          key={item.title}
          className={`p-6 ${
            index !== stats.length - 1 ? "border-l-2" : ""
          } border-on-surface ${item.bg}`}
        >
          <div className="flex items-center gap-2 mb-2">
            <IconHolder
              name={item.icon}
              bg="transparent"
              color={item.iconColor}
              className="border-none!"
              fontSize={22}
            />
            <span className="text-sm text-outline uppercase">{item.title}</span>
          </div>

          <div className={`text-3xl font-bold ${item.valueClass || ""}`}>
            {item.value}
          </div>

          <div className="text-xs font-bold mt-2">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
