"use client";
import BrutalTable from "@/components/table";
import IconHolder from "@/components/ui/IconHolder";
import Image from "next/image";

const data = [
  {
    name: "ساعة ذكية برو",
    sku: "WCH-001-BK",
    category: "إلكترونيات",
    price: "1,250.00 ر.س",
    stock: "45 وحدة",
    status: "متوفر",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQnU5GAE-WCr2hui-7p-LlxBjyWLeMoFlUhLPPa6PaZHIMtpOaZChB_wWXNWYOJYvDhnbrVM6lGDvffqYx-Zhv6WUENlZDA_5Q7ZgI8UFf9fWEmkdqYT-jFlP_3-ocyfoC5LNFTywJevJ88h2OFUDrhD-QR4yK6Plv7Qxu6t-rdmnoNePGlGIYGIqv1eI5IClmLrTdMgpOvfwbyu-oxC7fMp8i04mHz4q6aICYYSfooJDy9Xgs3HuRPEGWG-n6_3vp5RqscI4Ba4Y",
  },
];

export default function ProductsTable() {
  const columns = [
    {
      header: "الاسم",
      accessorKey: "name",
      cell: ({ row }: any) => (
        <div className="flex items-center gap-3">
          <Image
            src={row.original.image}
            alt=""
            width={40}
            height={40}
            className="border"
          />
          <span className="font-bold">{row.original.name}</span>
        </div>
      ),
    },
    { header: "SKU", accessorKey: "sku" },
    { header: "الفئة", accessorKey: "category" },
    { header: "السعر", accessorKey: "price" },
    { header: "المخزون", accessorKey: "stock" },
    { header: "الحالة", accessorKey: "status" },
    {
      header: "الإجراءات",
      cell: () => (
        <div className="flex gap-2 justify-center">
          <IconHolder
            name="edit"
            bg="transparent"
            fontSize={16}
            color="#333"
            className="border-none"
          />
          <IconHolder
            name="delete"
            bg="transparent"
            fontSize={16}
            color="#333"
            className="border-none"
          />
        </div>
      ),
    },
  ];

  return <BrutalTable columns={columns} data={data} />;
}
