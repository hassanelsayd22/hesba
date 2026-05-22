"use client";

import UIButton from "@/components/ui/UIButton";
import IconHolder from "@/components/ui/IconHolder";
import Title from "@/components/typography/Title";
import BrutalTable from "../table";

const data = [
  {
    id: "#ORD-8921",
    customer: "أحمد عبد الله",
    date: "2023/10/24",
    total: "1,250.00 ر.س",
    status: "قيد الانتظار",
  },
  {
    id: "#ORD-8920",
    customer: "سارة الخالدي",
    date: "2023/10/23",
    total: "450.50 ر.س",
    status: "تم الشحن",
  },
];

export default function OrdersTable() {
  const columns = [
    {
      header: "رقم الطلب",
      accessorKey: "id",
    },
    {
      header: "العميل",
      accessorKey: "customer",
    },
    {
      header: "التاريخ",
      accessorKey: "date",
    },
    {
      header: "المبلغ الإجمالي",
      accessorKey: "total",
    },
    {
      header: "الحالة",
      accessorKey: "status",
      cell: ({ row }: any) => (
        <span className="px-3 py-1 border text-xs font-bold inline-block">
          {row.original.status}
        </span>
      ),
    },
    {
      header: "الإجراءات",
      cell: () => (
        <div className="flex justify-center gap-3">
          <button>
            <IconHolder
              name="visibility"
              bg="transparent"
              color="#333"
              className="border-none!"
              size={32}
            />
          </button>

          <button>
            <IconHolder
              name="edit"
              bg="transparent"
              color="#333"
              className="border-none!"
              size={32}
            />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="p-6 border-b border-slate-300 bg-gray-100 flex justify-between items-center">
        <Title>جدول الطلبات الحديثة</Title>

        <div className="flex gap-2">
          <UIButton
            iconName="filter_list"
            iconPosition="start"
            className="shadow-none! bg-white! text-slate-800!"
          >
            تصفية
          </UIButton>

          <UIButton
            iconName="download"
            iconPosition="start"
            className="shadow-none! bg-white! text-slate-800!"
          >
            تصدير CSV
          </UIButton>
        </div>
      </div>

      <BrutalTable columns={columns} data={data} />
    </>
  );
}
