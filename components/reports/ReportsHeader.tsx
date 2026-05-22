import Heading from "../typography/Heading";
import SubHeading from "../typography/SubHeading";
import UIButton from "@/components/ui/UIButton";

const ReportsHeader = () => {
  return (
    <section className="mb-8 flex flex-col gap-6 pb-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <Heading>التقارير التحليلية</Heading>

        <SubHeading>
          نظرة شاملة على الأداء المالي وحركة المخزون للفترة الحالية
        </SubHeading>
      </div>

      <div className="flex flex-wrap gap-2">
        <UIButton
          iconName="calendar_today"
          className="bg-white! text-slate-700! shadow-none!"
        >
          الربع الحالي
        </UIButton>
        <UIButton
          iconName="download"
          className="bg-white! text-slate-700! shadow-none!"
        >
          تصدير البيانات (PDF)
        </UIButton>
      </div>
    </section>
  );
};

export default ReportsHeader;
