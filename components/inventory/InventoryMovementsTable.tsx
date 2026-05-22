"use client";
import Image from "next/image";
import UIButton from "@/components/ui/UIButton";
import IconHolder from "@/components/ui/IconHolder";
import Title from "@/components/typography/Title";
import Pagination from "../Pagination";
import BrutalTable from "../table";

const data = [
  {
    date: "2023-10-24 14:30",
    name: "ساعة ذكية - إكس 1",
    sku: "SKU-8829-WHT",
    warehouse: "المستودع الرئيسي - جدة",
    movement: "إضافة (توريد)",
    quantity: "+150",
    balance: "420 وحدة",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDC750K2_xNX4skeBzYbTHDiyuPd0QEq88xnPT5-OGi5G1jEoXTwneRVN7nn7SxYuLrzji5VRlHton6h36-Hc8qtTzYTqAB2OYMKUQbdK9tvXtJI12kyV2Im_mPJNdcia7RJ8ktoHjZQt4_CilJ4Eo8vMtChbPeXd_kfYoS6WG1PX0kID8oHMJLvdGpKrL8MZRbu8IxGmlbAKjU1ectfbSWNvi5BWRxSAudc43mGxZ3uYbsDtEC1CBSzQ4Xg7FD7YzYCOcnLIFVa1w",
  },
];

export default function InventoryMovementsTable() {
  const columns = [
    {
      header: "التاريخ والوقت",
      accessorKey: "date",
    },
    {
      header: "المنتج / SKU",
      cell: ({ row }: any) => (
        <div className="flex items-center gap-3">
          <Image
            src={row.original.image}
            alt={row.original.name}
            width={40}
            height={40}
            className="border border-on-surface grayscale hover:grayscale-0 transition-all"
          />

          <div>
            <p className="font-bold text-sm">{row.original.name}</p>

            <p className="text-[10px] text-outline">{row.original.sku}</p>
          </div>
        </div>
      ),
    },
    {
      header: "المستودع",
      accessorKey: "warehouse",
    },
    {
      header: "نوع الحركة",
      accessorKey: "movement",
      cell: ({ row }: any) => (
        <span className="inline-block px-2 py-1 border text-[10px] font-black">
          {row.original.movement}
        </span>
      ),
    },
    {
      header: "الكمية",
      accessorKey: "quantity",
    },
    {
      header: "الرصيد بعد الحركة",
      accessorKey: "balance",
    },
    {
      header: "الإجراءات",
      cell: () => (
        <button>
          <IconHolder
            name="more_vert"
            fontSize={26}
            color="#333"
            bg="transparent"
            className="border-none!"
          />
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center p-4 border-b-2 border-on-surface bg-surface-container-lowest">
        <div className="flex items-center gap-6">
          <Title>حركات المخزون الأخيرة</Title>

          <div className="flex border border-on-surface">
            <UIButton className="shadow-none! bg-white! text-slate-700! text-xs! h-6!">
              الكل
            </UIButton>

            <UIButton className="shadow-none! bg-white! text-slate-700! text-xs! h-6!">
              إضافة (+)
            </UIButton>

            <UIButton className="shadow-none! bg-white! text-slate-700! text-xs! h-6!">
              صرف (-)
            </UIButton>
          </div>
        </div>

        <div className="flex gap-2">
          <UIButton
            className="w-8! h-8! p-0 shadow-none!"
            backgroundClass="bg-white!"
          >
            <IconHolder
              name="filter_list"
              fontSize={18}
              bg="transparent"
              className="border-none!"
              color="#333"
            />
          </UIButton>

          <UIButton
            className="w-8! h-8! p-0 shadow-none!"
            backgroundClass="bg-white!"
          >
            <IconHolder
              name="refresh"
              fontSize={18}
              bg="transparent"
              className="border-none!"
              color="#333"
            />
          </UIButton>
        </div>
      </div>

      <BrutalTable columns={columns} data={data} />

      <Pagination />
    </>
  );
}
