import Title from "../typography/Title";
import UIButton from "../ui/Button";
import BrutalTable from "../table";
import IconHolder from "../ui/IconHolder";
import Pagination from "../Pagination";
import Progress from "../ui/Progress";

const assets = [
  {
    asset: "خادم بيانات ديل PowerEdge",
    serial: "SN: DE-9920-X12",
    purchaseDate: "2022/05/15",
    purchaseValue: "45,000 ر.س",
    depreciation: 40,
    depreciationValue: 18000,
    status: "يعمل بكفاءة",
    statusType: "success",
  },
  {
    asset: "نظام تكييف مركزي - المبنى أ",
    serial: "SN: HV-AC-887",
    purchaseDate: "2020/01/10",
    purchaseValue: "120,000 ر.س",
    depreciation: 75,
    depreciationValue: 90000,
    status: "صيانة دورية",
    statusType: "warning",
  },
  {
    asset: "أسطول سيارات توصيل (5)",
    serial: "FL-ID: 0023-V5",
    purchaseDate: "2023/03/22",
    purchaseValue: "650,000 ر.س",
    depreciation: 15,
    depreciationValue: 97500,
    status: "يعمل بكفاءة",
    statusType: "success",
  },
  {
    asset: "تجهيزات مكتبية - الطابق الثالث",
    serial: "OFF-FUR-33",
    purchaseDate: "2019/11/05",
    purchaseValue: "85,000 ر.س",
    depreciation: 95,
    depreciationValue: 80750,
    status: "منتهي القيمة",
    statusType: "danger",
  },
];

const columns = [
  {
    accessorKey: "asset",
    header: "اسم الأصل / الرقم التسلسلي",
    cell: ({ row }: any) => (
      <div>
        <p className="font-bold text-on-surface">{row.original.asset}</p>

        <p className="text-xs text-slate-400 font-mono">
          {row.original.serial}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "purchaseDate",
    header: "تاريخ الشراء",
  },
  {
    accessorKey: "purchaseValue",
    header: "قيمة الشراء",
  },
  {
    accessorKey: "depreciation",
    header: "الاستهلاك الحالي",
    cell: ({ row }: any) => (
      <Progress
        completed={row.original.depreciation}
        completedColor={
          row.original.depreciation >= 90 ? "var(--teritary)" : "var(--primary)"
        }
        amount={row.original.depreciationValue}
      />
    ),
  },
  {
    accessorKey: "status",
    header: "الحالة",
    cell: ({ row }: any) => {
      const variants = {
        success: "bg-secondary-container text-on-secondary-container",
        warning: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
        danger: "bg-error-container text-on-error-container",
      };

      return (
        <span
          className={`px-2 py-1 text-[10px] font-bold ${
            variants[row.original.statusType as keyof typeof variants]
          }`}
        >
          {row.original.status}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "إجراءات",
    cell: () => (
      <div className="flex items-center justify-center gap-2">
        <button>
          <IconHolder
            name="edit"
            fontSize={22}
            bg="transparent"
            color="#888"
            className="border-none!"
          />
        </button>

        <button>
          <IconHolder
            name="delete"
            fontSize={22}
            bg="transparent"
            color="#888"
            className="border-none!"
          />
        </button>
      </div>
    ),
  },
];

const AssetsTable = () => {
  return (
    <div className="col-span-12 overflow-hidden border border-[#1b1b1c] bg-white">
      <div className="flex flex-col gap-4 border-b border-slate-200 bg-surface-container-low p-6 md:flex-row md:items-center md:justify-between">
        <Title>قائمة الأصول</Title>

        <div className="flex gap-2">
          <UIButton className="shadow-none! bg-white! text-slate-900! h-8! font-semibold">
            تصفية
          </UIButton>

          <UIButton className="shadow-none! bg-white! text-slate-900! h-8! font-semibold">
            تصدير PDF
          </UIButton>
        </div>
      </div>

      <BrutalTable data={assets} columns={columns} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default AssetsTable;
