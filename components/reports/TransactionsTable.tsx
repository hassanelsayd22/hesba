import Title from "../typography/Title";
import BrutalTable from "../table";
import IconHolder from "../ui/IconHolder";

const transactions = [
  {
    invoice: "INV-2023-089",
    customer: "شركة الأفق الرقمي",
    date: "24 ديسمبر 2023",
    amount: "12,450 ر.س",
    status: "تم الدفع",
    statusType: "paid",
  },
  {
    invoice: "INV-2023-090",
    customer: "مؤسسة توريد الأنظمة",
    date: "22 ديسمبر 2023",
    amount: "8,900 ر.س",
    status: "معلق",
    statusType: "pending",
  },
  {
    invoice: "INV-2023-091",
    customer: "تقنيات الغد المحدودة",
    date: "21 ديسمبر 2023",
    amount: "42,100 ر.س",
    status: "تم الدفع",
    statusType: "paid",
  },
  {
    invoice: "INV-2023-092",
    customer: "مركز البيانات الموحد",
    date: "18 ديسمبر 2023",
    amount: "5,200 ر.س",
    status: "متأخر",
    statusType: "late",
  },
];

const transactionColumns = [
  {
    accessorKey: "invoice",
    header: "رقم الفاتورة",
  },
  {
    accessorKey: "customer",
    header: "العميل",
    cell: ({ row }: any) => (
      <span className="font-bold">{row.original.customer}</span>
    ),
  },
  {
    accessorKey: "date",
    header: "التاريخ",
  },
  {
    accessorKey: "amount",
    header: "المبلغ",
    cell: ({ row }: any) => (
      <span className="font-black">{row.original.amount}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "الحالة",
    cell: ({ row }: any) => {
      const variants = {
        paid: "bg-secondary-container text-on-secondary-container",
        pending: "bg-tertiary-container text-on-tertiary-container",
        late: "bg-error-container text-on-error-container",
      };

      return (
        <span
          className={`px-2 py-1 text-[10px] font-black ${
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
    header: "",
    cell: () => (
      <button>
        <IconHolder
          name="more_vert"
          fontSize={20}
          bg="transparent"
          color="#333"
          className="border-0!"
        />
      </button>
    ),
  },
];
const TransactionsTable = () => {
  return (
    <div className="col-span-12 border border-slate-900 bg-white">
      <div className="flex flex-col gap-4 border-b border-slate-900 p-4 md:flex-row md:items-center md:justify-between">
        <Title>أحدث المعاملات المالية</Title>
      </div>

      <BrutalTable data={transactions} columns={transactionColumns} />
    </div>
  );
};

export default TransactionsTable;
