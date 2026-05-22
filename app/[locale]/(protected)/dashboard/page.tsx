import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import Statistics from "./components/Statistics";
import BarChart from "@/lib/charts/bar/BarChart";
import LowStock from "./components/LowStock";
import BrutalTable from "@/components/table";
import { last_orders_columns } from "./components/helper";

type Order = {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: "completed" | "processing" | "cancelled";
};

const data: Order[] = [
  {
    id: "#INV-8821",
    customer: "شركة الأمل للتجارة",
    date: "24 أكتوبر 2023",
    total: "12,400 ر.س",
    status: "completed",
  },
  {
    id: "#INV-8820",
    customer: "مؤسسة فهد السعدون",
    date: "23 أكتوبر 2023",
    total: "4,200 ر.س",
    status: "processing",
  },
];
const Dashboard = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <Heading>لوحة القيادة</Heading>
        <SubHeading>ملخص العمليات والنشاط المالي لليوم</SubHeading>
      </header>
      <Statistics />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" dir="ltr">
        <BarChart
          data={[
            { x: "السبت", y: 320 },
            { x: "الأحد", y: 480 },
            { x: "الإثنين", y: 390 },
            { x: "الثلاثاء", y: 610 },
            { x: "الأربعاء", y: 610 },
            { x: "الخميس", y: 610 },
            { x: "الجمعة", y: 610 },
          ]}
          colorScheme={["#0052cc"]}
          title="أداء المبيعات الأسبوعي"
          height={300}
          showValues
          showGrid={false}
          barRadius={4}
          animated
          background="white"
          className="col-span-2 brutalist-border brutalist-shadow"
        />
        <LowStock />
      </div>

      <div className="border border-slate-200 bg-white">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-headline-md font-headline-md">آخر الطلبات</h3>

          <button className="text-primary font-bold text-label-sm flex items-center gap-1">
            <span>عرض الكل</span>
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
          </button>
        </div>

        <BrutalTable data={data} columns={last_orders_columns} />
      </div>
    </div>
  );
};

export default Dashboard;
