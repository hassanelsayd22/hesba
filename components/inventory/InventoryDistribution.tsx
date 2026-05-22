import Title from "@/components/typography/Title";

const categories = [
  {
    title: "الإلكترونيات",
    percentage: 65,
    value: "290,000 ر.س",
    color: "bg-primary",
  },
  {
    title: "الملابس والأحذية",
    percentage: 20,
    value: "85,000 ر.س",
    color: "bg-text-secondary",
  },
  {
    title: "الإكسسوارات",
    percentage: 10,
    value: "42,000 ر.س",
    color: "bg-teritary",
  },
  {
    title: "أخرى",
    percentage: 5,
    value: "35,000 ر.س",
    color: "bg-slate-600",
  },
];

export default function InventoryDistribution() {
  return (
    <div className="mt-12">
      <div className="border-r-4 border-primary pr-3 mb-6">
        <Title>توزيع المخزون حسب الفئة</Title>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {categories.map((item, index) => (
          <div
            key={item.title}
            className={`border-2 p-4 bg-white ${
              index < 2 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <div className="flex justify-between mb-4">
              <span className="font-bold">{item.title}</span>

              <span className="font-mono">{item.percentage}%</span>
            </div>

            <div className="h-8 w-full border  flex overflow-hidden">
              <div
                className={item.color}
                style={{ width: `${item.percentage}%` }}
              />

              <div
                className="bg-slate-200"
                style={{
                  width: `${100 - item.percentage}%`,
                }}
              />
            </div>

            <p className="text-[10px] mt-2 text-outline">
              القيمة التقديرية: {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
