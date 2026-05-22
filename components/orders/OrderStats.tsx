import IconHolder from "@/components/ui/IconHolder";
import SystemUpdatesCard from "./SystemUpdatesCard";

const stats = [
  {
    title: "قيد الانتظار",
    value: "24",
    desc: "تتطلب معالجة فورية",
    icon: "pending_actions",
    className: "bg-bg-secondary! text-text-secondary",
  },
  {
    title: "تم الشحن",
    value: "158",
    desc: "في طريقها للعملاء",
    icon: "local_shipping",
    className: "bg-primary/10 text-primary",
  },
];

export default function OrdersStats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`${item.className} border border-on-surface p-6 flex flex-col justify-between h-50`}
        >
          <div className="flex justify-between items-start">
            <IconHolder
              name={item.icon}
              bg="transparent"
              className="border-none"
              fontSize={30}
              color="#333"
            />
            <span className="text-3xl font-bold">{item.value}</span>
          </div>

          <div>
            <p className="text-lg font-bold">{item.title}</p>
            <p className="text-sm opacity-80">{item.desc}</p>
          </div>
        </div>
      ))}

      <div className="col-span-2">
        <SystemUpdatesCard />
      </div>
    </div>
  );
}
