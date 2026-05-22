import Heading from "../typography/Heading";
import SubHeading from "../typography/SubHeading";
import UIButton from "@/components/ui/UIButton";

const AssetsHeader = () => {
  return (
    <section className="flex flex-col gap-6 mb-10 md:flex-row md:items-end md:justify-between">
      <div>
        <Heading>إدارة الأصول الثابتة</Heading>

        <SubHeading>
          تتبع القيمة الدفترية، الاستهلاك، والعمر الافتراضي للأصول المؤسسية.
        </SubHeading>
      </div>

      <UIButton iconName="add" className="shadow-none!">
        إضافة أصل جديد
      </UIButton>
    </section>
  );
};

export default AssetsHeader;
