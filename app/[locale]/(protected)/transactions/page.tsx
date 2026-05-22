"use client";

import InputController from "@/components/controllers/InputController";
import BrutalTable from "@/components/table";
import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import Title from "@/components/typography/Title";
import UIButton from "@/components/ui/UIButton";
import IconHolder from "@/components/ui/IconHolder";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

const stats = [
  {
    title: "إجمالي الدخل",
    value: "42,500.00 ر.س",
    icon: "trending_up",
    color: "text-secondary",
    bg: "bg-white",
    border: "border-outline",
  },
  {
    title: "إجمالي المصروفات",
    value: "12,340.50 ر.س",
    icon: "trending_down",
    color: "text-tertiary",
    bg: "bg-white",
    border: "border-outline",
  },
  {
    title: "صافي الرصيد",
    value: "30,159.50 ر.س",
    icon: "account_balance_wallet",
    color: "text-primary",
    bg: "bg-white",
    border: "border-outline",
  },
  {
    title: "معاملات هذا الشهر",
    value: "156",
    icon: "calendar_month",
    color: "text-white",
    bg: "bg-primary-container",
    border: "border-primary-container",
    light: true,
  },
];

const transactions = [
  {
    date: "2023-11-24",
    description: "بيع منتج - آي فون 15",
    category: "دخل مبيعات",
    amount: "+5,400.00",
    type: "income",
  },
  {
    date: "2023-11-23",
    description: "إيجار المكتب الشهري",
    category: "مصاريف ثابتة",
    amount: "-2,500.00",
    type: "expense",
  },
  {
    date: "2023-11-22",
    description: "توريد بضاعة - سماعات",
    category: "مشتريات",
    amount: "-1,200.00",
    type: "expense",
  },
  {
    date: "2023-11-21",
    description: "عمولة مبيعات خارجية",
    category: "دخل إضافي",
    amount: "+850.00",
    type: "income",
  },
  {
    date: "2023-11-20",
    description: "فاتورة كهرباء ومياه",
    category: "فواتير",
    amount: "-450.00",
    type: "expense",
  },
];

export default function FinanceDashboardPage() {
  const { control } = useForm();
  const columns = useMemo(
    () => [
      {
        accessorKey: "date",
        header: "التاريخ",
        cell: ({ row }) => (
          <span className="font-mono">{row.original.date}</span>
        ),
      },
      {
        accessorKey: "description",
        header: "الوصف",
        cell: ({ row }) => (
          <span className="font-bold">{row.original.description}</span>
        ),
      },
      {
        accessorKey: "category",
        header: "الفئة",
        cell: ({ row }) => (
          <span
            className={`px-2 py-0.5 text-xs font-bold uppercase ${
              row.original.type === "income"
                ? "bg-secondary-container text-on-secondary-container"
                : row.original.category === "مشتريات"
                  ? "bg-surface-container-highest text-on-surface"
                  : "bg-tertiary-fixed text-on-tertiary-fixed"
            }`}
          >
            {row.original.category}
          </span>
        ),
      },
      {
        accessorKey: "amount",
        header: "المبلغ",
        cell: ({ row }) => (
          <div
            className={`text-left font-mono font-bold ${
              row.original.type === "income"
                ? "text-secondary"
                : "text-tertiary"
            }`}
          >
            {row.original.amount}
          </div>
        ),
      },
      {
        id: "actions",
        header: "الإجراءات",
        cell: () => (
          <div className="flex justify-center">
            <button className="p-1 hover:text-primary">
              <IconHolder icon="edit" />
            </button>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <main>
      {/* Stats */}
      <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`flex flex-col justify-between border p-6 ${stat.bg} ${stat.border}`}
          >
            <span
              className={`text-label-sm font-label-sm ${
                stat.light ? "text-white/80" : "text-outline"
              }`}
            >
              {stat.title}
            </span>

            <div className="mt-2 flex items-baseline justify-between">
              <span
                className={`text-headline-md font-headline-md ${stat.color}`}
              >
                {stat.value}
              </span>

              <IconHolder icon={stat.icon} className={stat.color} />
            </div>
          </div>
        ))}
      </section>

      {/* Content */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Transactions */}
        <div className="lg:col-span-2">
          <div className="mb-4 border border-outline bg-white">
            <div className="flex items-center justify-between border-b border-outline bg-surface-container p-4">
              <Title>سجل المعاملات الأخير</Title>

              <div className="flex gap-2">
                <UIButton className="border border-outline bg-white px-3 py-1 text-xs hover:bg-on-surface hover:text-white">
                  تصدير PDF
                </UIButton>

                <UIButton className="border border-outline bg-white px-3 py-1 text-xs hover:bg-on-surface hover:text-white">
                  تصفية
                </UIButton>
              </div>
            </div>

            <BrutalTable data={transactions} columns={columns} />
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className="flex h-8 w-8 items-center justify-center border border-outline transition-colors hover:bg-primary-container hover:text-white"
              >
                {page}
              </button>
            ))}

            <button className="flex h-8 w-8 items-center justify-center border border-outline transition-colors hover:bg-primary-container hover:text-white">
              <IconHolder icon="chevron_left" />
            </button>
          </div>
        </div>

        {/* Form */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 border border-outline bg-white p-6">
            <div className="mb-6 flex items-center gap-2 border-b border-outline pb-4">
              <IconHolder icon="add_box" className="text-primary-container" />

              <Title>إضافة معاملة جديدة</Title>
            </div>

            <form className="space-y-4">
              {/* Type */}
              <div>
                <label className="mb-1 block text-label-sm font-label-sm text-on-surface">
                  نوع المعاملة
                </label>

                <div className="grid grid-cols-2 border border-outline">
                  <button
                    type="button"
                    className="bg-primary-container px-4 py-2 text-sm font-bold text-white"
                  >
                    دخل
                  </button>

                  <button
                    type="button"
                    className="bg-white px-4 py-2 text-sm font-bold text-on-surface hover:bg-surface-container"
                  >
                    مصروف
                  </button>
                </div>
              </div>

              <InputController
                control={control}
                name="amount"
                label="المبلغ (ر.س)"
                placeholder="0.00"
                type="number"
              />

              {/* Category */}
              <div>
                <label className="mb-1 block text-label-sm font-label-sm text-on-surface">
                  الفئة
                </label>

                <select className="w-full border border-outline bg-white p-3 text-right outline-none focus:border-2 focus:border-primary-container">
                  <option>مبيعات</option>
                  <option>إيجار</option>
                  <option>رواتب</option>
                  <option>خدمات</option>
                  <option>أخرى</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="mb-1 block text-label-sm font-label-sm text-on-surface">
                  الوصف
                </label>

                <textarea
                  rows={3}
                  placeholder="اكتب تفاصيل المعاملة هنا..."
                  className="w-full border border-outline p-3 text-right outline-none focus:border-2 focus:border-primary-container"
                />
              </div>

              <InputController
                control={control}
                name="date"
                label="التاريخ"
                type="date"
              />

              <UIButton className="w-full border border-primary bg-primary-container py-4 text-base text-white hover:bg-primary">
                حفظ المعاملة
              </UIButton>
            </form>

            {/* Upload */}
            <div className="mt-8 border-t border-dashed border-outline pt-6">
              <SubHeading className="mb-4 text-xs">
                رفع ملف إثبات (فاتورة/إيصال)
              </SubHeading>

              <div className="flex cursor-pointer flex-col items-center justify-center border-2 border-dashed border-outline-variant bg-surface-bright p-8 transition-colors hover:bg-surface-container-low">
                <IconHolder
                  icon="cloud_upload"
                  className="mb-2 text-3xl text-outline"
                />

                <span className="text-xs font-bold text-outline">
                  اسحب الملف هنا أو انقر للرفع
                </span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Bottom Section */}
      <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Expense Distribution */}
        <div className="relative overflow-hidden border border-outline bg-white p-6">
          <div className="relative z-10">
            <Heading className="mb-2 text-lg">توزيع المصروفات</Heading>

            <SubHeading className="mb-6 text-sm">
              تحليل فئات الإنفاق للشهر الحالي
            </SubHeading>

            <div className="space-y-4">
              <ExpenseBar
                label="إيجار (65%)"
                width="65%"
                className="bg-tertiary"
              />

              <ExpenseBar
                label="كهرباء (20%)"
                width="20%"
                className="bg-primary-fixed-dim"
              />

              <ExpenseBar
                label="أخرى (15%)"
                width="15%"
                className="bg-outline"
              />
            </div>
          </div>
        </div>

        {/* Audit Report */}
        <div className="flex items-center gap-6 border border-on-surface bg-on-surface p-6 text-white">
          <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center bg-primary-container p-4">
            <IconHolder icon="verified" className="text-5xl" />
          </div>

          <div>
            <Heading className="mb-2 text-lg">تقرير التدقيق ربع السنوي</Heading>

            <p className="mb-4 text-sm opacity-80">
              تم الانتهاء من مراجعة كافة معاملات الربع الثالث بنجاح وبدون فروقات
              مالية.
            </p>

            <UIButton className="bg-white px-6 py-2 text-sm font-bold text-on-surface hover:bg-primary-container hover:text-white">
              تحميل التقرير
            </UIButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function ExpenseBar({ label, width, className }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-4 w-full bg-surface-container-high">
        <div className={`h-full ${className}`} style={{ width }} />
      </div>

      <span className="w-24 font-mono text-xs">{label}</span>
    </div>
  );
}
