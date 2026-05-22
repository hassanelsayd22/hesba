import Title from "../typography/Title";

const kpiCards = [
  {
    title: "إجمالي قيمة الأصول",
    value: "2,450,000 ر.س",
    color: "text-primary",
  },
  {
    title: "الاستهلاك المتراكم",
    value: "425,300 ر.س",
    color: "text-tertiary",
  },
  {
    title: "صافي القيمة الدفترية",
    value: "2,024,700 ر.س",
    color: "text-on-surface",
  },
  {
    title: "الأصول المضافة (هذا العام)",
    value: "12 أصل",
    color: "text-secondary",
  },
];

const KPICards = () => {
  return (
    <section className="border border-[#1b1b1c] mb-8 bg-white">
      <Title className="py-3 px-4 text-xl!">
        مؤشرات الأداء الرئيسية للأصول
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {kpiCards.map((card) => (
          <div
            key={card.title}
            className="border-t md:not-even:border-l xl:md:not-last:border-l md:border-t border-[#1b1b1c] border-b-0 p-6"
          >
            <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
              {card.title}
            </p>

            <h3 className={`text-3xl font-bold ${card.color}`}>{card.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KPICards;
