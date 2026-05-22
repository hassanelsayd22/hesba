"use client";
import StatusChip from "@/components/chips/StatusChip";
import { ColumnDef } from "@tanstack/react-table";

export const last_orders_columns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "رقم الطلب",
    cell: (info) => (
      <span className="font-data-mono text-body-base">
        {info.getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "customer",
    header: "العميل",
    cell: (info) => (
      <span className="font-bold text-body-base">
        {info.getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: "التاريخ",
    cell: (info) => (
      <span className="text-outline text-label-sm">
        {info.getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "total",
    header: "القيمة الإجمالية",
    cell: (info) => (
      <span className="font-bold">{info.getValue() as string}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "الحالة",
    cell: (info) => <StatusChip status={info.getValue() as any} />,
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <button className="material-symbols-outlined text-outline hover:text-primary">
        more_vert
      </button>
    ),
  },
];
