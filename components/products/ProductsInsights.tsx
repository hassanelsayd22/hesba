import Title from "@/components/typography/Title";
import SubHeading from "@/components/typography/SubHeading";
import UIButton from "@/components/ui/Button";
import IconHolder from "@/components/ui/IconHolder";

export default function ProductsInsights() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="border-2 border-dashed border-slate-300 p-6">
        <div className="flex items-center gap-2 mb-4 text-primary">
          <IconHolder
            name="lightbulb"
            fontSize={20}
            bg="transparent"
            className="border-none"
            color="var(--bg-primary)"
          />
          <Title>نصيحة ذكية</Title>
        </div>

        <SubHeading>
          هناك 5 منتجات في فئة &apos;الإلكترونيات&apos; لم يتم تحديث أسعارها منذ
          أكثر من 30 يوماً.
        </SubHeading>

        <a className="text-primary font-bold underline mt-4 inline-block">
          عرض المنتجات المقترحة
        </a>
      </div>

      <div className="border-2 border-dashed border-slate-300 p-6">
        <div className="flex items-center gap-2 mb-4 text-text-secondary">
          <IconHolder
            name="auto_awesome"
            fontSize={20}
            bg="transparent"
            className="border-none"
            color="var(--text-secondary)"
          />
          <Title>تحديث سريع</Title>
        </div>

        <SubHeading>
          يمكنك الآن تصدير تقارير المخزون مباشرة إلى نظام الضرائب المحلي.
        </SubHeading>

        <UIButton className="mt-4 shadow-none!">إعداد الربط</UIButton>
      </div>
    </div>
  );
}
