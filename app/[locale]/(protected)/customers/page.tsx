"use client";

import BrutalTable from "@/components/table";
import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import Title from "@/components/typography/Title";
import UIButton from "@/components/ui/UIButton";
import IconHolder from "@/components/ui/IconHolder";
import Image from "next/image";

const customers = [
  {
    id: 1,
    name: "أحمد محمود السعدني",
    company: "شركة الأفق للمقاولات",
    total: "14,250.00 ر.س",
    status: "نشط",
    active: true,
    initials: "أ",
  },
  {
    id: 2,
    name: "سارة يوسف جاد",
    company: "مؤسسة جاد للتجارة",
    total: "8,900.50 ر.س",
    status: "نشط",
    initials: "س",
  },
  {
    id: 3,
    name: "خالد عبد الرحمن",
    company: "فردي",
    total: "2,100.00 ر.س",
    status: "متوقف",
    initials: "خ",
  },
  {
    id: 4,
    name: "ليلى حسن علي",
    company: "مكتب ليلى للهندسة",
    total: "12,600.00 ر.س",
    status: "نشط",
    initials: "ل",
  },
];

const transactions = [
  {
    date: "2023-11-25",
    invoice: "#INV-8842",
    description: "أدوات بناء ومعدات ثقيلة",
    amount: "4,500.00 ر.س",
    status: "مكتمل",
  },
  {
    date: "2023-11-12",
    invoice: "#INV-8791",
    description: "دفعة مقدمة - مشروع البرج",
    amount: "8,000.00 ر.س",
    status: "مكتمل",
  },
  {
    date: "2023-10-30",
    invoice: "#INV-8655",
    description: "صيانة دورية للمعدات",
    amount: "1,750.00 ر.س",
    status: "معلق",
  },
];

const transactionColumns = [
  {
    accessorKey: "date",
    header: "التاريخ",
  },
  {
    accessorKey: "invoice",
    header: "رقم الفاتورة",
    cell: ({ row }) => (
      <span className="font-bold">{row.original.invoice}</span>
    ),
  },
  {
    accessorKey: "description",
    header: "الوصف",
  },
  {
    accessorKey: "amount",
    header: "المبلغ",
    cell: ({ row }) => <span className="font-mono">{row.original.amount}</span>,
  },
  {
    accessorKey: "status",
    header: "الحالة",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 text-[10px] font-bold ${
          row.original.status === "مكتمل"
            ? "bg-secondary-container text-on-secondary-container"
            : "bg-tertiary-container text-white"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
];

const purchaseChart = [40, 60, 30, 80, 50, 90];

export default function CustomersPage() {
  return (
    <main className="flex flex-col gap-6 lg:flex-row">
      {/* Customers List */}
      <section className="flex w-full flex-col gap-6 lg:w-2/5">
        <div className="flex items-center justify-between border border-on-surface bg-white p-4">
          <div className="flex items-center gap-2">
            <Title>قائمة العملاء</Title>

            <span className="bg-primary px-2 py-0.5 text-[10px] font-bold text-white">
              142
            </span>
          </div>

          <UIButton className="shadow-none!" iconName="person_add">
            إضافة عميل
          </UIButton>
        </div>

        <div className="overflow-hidden border border-on-surface bg-white">
          <div className="flex border-b border-on-surface bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline-variant">
            <div className="w-1/2 border-l border-on-surface p-3">
              معلومات العميل
            </div>

            <div className="w-1/4 border-l border-on-surface p-3">
              إجمالي المشتريات
            </div>

            <div className="w-1/4 p-3">الحالة</div>
          </div>

          <div className="divide-y divide-on-surface">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className={`flex items-center transition-colors ${
                  customer.active
                    ? "bg-primary text-white"
                    : "cursor-pointer hover:bg-surface-container-low"
                }`}
              >
                <div
                  className={`flex w-1/2 items-center gap-3 p-4 ${
                    customer.active
                      ? "border-l border-white"
                      : "border-l border-on-surface"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center border text-lg font-bold ${
                      customer.active
                        ? "border-white bg-primary-container"
                        : "border-on-surface"
                    }`}
                  >
                    {customer.initials}
                  </div>

                  <div>
                    <p className="font-bold">{customer.name}</p>

                    <p
                      className={`text-[10px] ${
                        customer.active ? "opacity-80" : "text-outline"
                      }`}
                    >
                      {customer.company}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-1/4 p-4 font-mono ${
                    customer.active
                      ? "border-l border-white"
                      : "border-l border-on-surface"
                  }`}
                >
                  {customer.total}
                </div>

                <div className="w-1/4 p-4">
                  <span
                    className={`px-2 py-1 text-[10px] font-bold ${
                      customer.status === "نشط"
                        ? customer.active
                          ? "bg-white text-primary"
                          : "bg-text-secondary text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {customer.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Details */}
      <section className="flex w-full flex-col gap-6 lg:w-3/5">
        <div className="relative overflow-hidden border border-on-surface bg-white p-8">
          <div className="absolute -right-16 -top-16 h-32 w-32 rotate-45 bg-primary-container/10" />

          <div className="relative z-10 mb-8 flex flex-col justify-between gap-6 xl:flex-row">
            <div className="flex gap-6">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Uor2t8cdmP6CPzZ0zNGOFYKX598N5nw5TCdpRR2SGp9xWtzaQeGOdN-Sbh25TnhDSnAfHnOWogTJ38UfLASRCEmQSYq_lhCAJJfRINWocJUPY5B-35qGF9FTQNYx5mTkZ9u-Lsy3SAepcMjYrm1z5Lk2sNFTvmKbJO1wCVZoyXJmrD--wueIYMRs-kqrcEfDQOCAMfXAfjavg9MaA6gIMN10EDqmWgTZWM2IYAfEW855s3FGAW3E3A4_c9qDiX47XTKCQDLqdHg"
                alt="صورة العميل"
                width={96}
                height={96}
                className="h-24 w-24 border border-on-surface object-cover"
              />

              <div>
                <div className="mb-1 flex items-center gap-3">
                  <Heading className="text-display-lg">
                    أحمد محمود السعدني
                  </Heading>
                </div>

                <SubHeading className="mb-4 font-bold">
                  شركة الأفق للمقاولات - الرقم الضريبي: 300455621000003
                </SubHeading>

                <div className="flex gap-4">
                  <UIButton className="shadow-none!">تعديل الملف</UIButton>

                  <UIButton className="bg-white text-slate-700! shadow-none!">
                    إرسال بريد
                  </UIButton>
                </div>
              </div>
            </div>

            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-tighter text-outline">
                الرصيد الحالي
              </p>

              <p className="font-mono text-3xl font-black text-primary">
                2,450.00 ر.س
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <InfoCard icon="call" title="رقم الجوال" value="+966 50 123 4567" />

            <InfoCard
              icon="mail"
              title="البريد الإلكتروني"
              value="ahmed@alofuq.com"
            />

            <InfoCard
              icon="location_on"
              title="الموقع"
              value="الرياض، حي الملز"
            />
          </div>

          {/* Transactions */}
          <div className="border border-on-surface">
            <div className="flex items-center justify-between border-b border-on-surface bg-surface-container p-3">
              <span className="text-sm font-bold">آخر المعاملات</span>

              <button className="text-[10px] font-bold text-primary underline">
                عرض السجل الكامل
              </button>
            </div>

            <BrutalTable data={transactions} columns={transactionColumns} />
          </div>

          {/* Bottom Widgets */}
          <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Purchase Analytics */}
            <div className="border border-on-surface bg-surface-bright p-4">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold">
                <IconHolder icon="analytics" />
                تحليل المشتريات
              </h3>

              <div className="flex h-32 items-end justify-between gap-1 border-b border-on-surface px-2 pb-1">
                {purchaseChart.map((height, index) => (
                  <div
                    key={index}
                    className="w-1/6 bg-primary"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="mt-1 flex justify-between px-1 text-[10px] font-bold text-outline">
                <span>يونيو</span>
                <span>يوليو</span>
                <span>أغسطس</span>
                <span>سبتمبر</span>
                <span>أكتوبر</span>
                <span>نوفمبر</span>
              </div>
            </div>

            {/* Notes */}
            <div className="border border-on-surface bg-surface-bright p-4">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold">
                <IconHolder icon="notes" />
                ملاحظات إدارية
              </h3>

              <p className="text-xs leading-relaxed text-outline">
                العميل يفضل التعامل بنظام الدفع الآجل لمدة 15 يوم. التواصل يتم
                مباشرة مع المهندس أحمد أو المحاسب محمد. تاريخ تجديد العقد السنوي
                في شهر يناير القادم.
              </p>

              <div className="mt-4 flex justify-end">
                <UIButton className="border border-primary px-2 py-1 text-[10px] text-primary hover:bg-primary hover:text-white">
                  إضافة ملاحظة
                </UIButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div
      className="border space-y-1 p-4 rounded-md"
      style={{
        boxShadow: "#000 2px 2px",
      }}
    >
      <IconHolder
        name={icon}
        color="var(--primary)"
        className="border-none!"
        fontSize={18}
        bg="transparent"
      />

      <p className="text-[10px] font-bold text-outline">{title}</p>

      <p className="text-xs font-semibold">{value}</p>
    </div>
  );
}
