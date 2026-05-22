import CreateOrderCard from "@/components/orders/CreateOrderCard";
import OrdersStats from "@/components/orders/OrderStats";
import OrdersTable from "@/components/orders/OrdersTable";
import OrdersBanner from "@/components/orders/OrdersBanner";
import Pagination from "@/components/Pagination";
import Heading from "@/components/typography/Heading";
import IconHolder from "@/components/ui/IconHolder";

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Heading>الطلبات</Heading>

        <div className="flex text-xs font-bold text-slate-500 gap-2">
          <span>الرئيسية</span>
          <IconHolder
            name="chevron_left"
            fontSize={20}
            bg="transparent"
            className="border-none"
            color="#333"
          />
          <span className="text-primary">عرض الطلبات</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CreateOrderCard />

        <div className="md:col-span-2">
          <OrdersStats />
        </div>
      </div>

      <div className="bg-white border border-slate-300 overflow-hidden">
        <OrdersTable />
        <Pagination />
      </div>

      <OrdersBanner />
    </div>
  );
}
