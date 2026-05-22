import SubHeading from "@/components/typography/SubHeading";
import Title from "@/components/typography/Title";
import UIButton from "@/components/ui/UIButton";
import Image from "next/image";

const IMAGE_PATH =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCQnU5GAE-WCr2hui-7p-LlxBjyWLeMoFlUhLPPa6PaZHIMtpOaZChB_wWXNWYOJYvDhnbrVM6lGDvffqYx-Zhv6WUENlZDA_5Q7ZgI8UFf9fWEmkdqYT-jFlP_3-ocyfoC5LNFTywJevJ88h2OFUDrhD-QR4yK6Plv7Qxu6t-rdmnoNePGlGIYGIqv1eI5IClmLrTdMgpOvfwbyu-oxC7fMp8i04mHz4q6aICYYSfooJDy9Xgs3HuRPEGWG-n6_3vp5RqscI4Ba4Y";

const items = [
  { id: 1, name: "كرسي مكتبي برو", stock: 2 },
  { id: 2, name: "مكتب خشب مودرن", stock: 1 },
  { id: 3, name: "شاشة 24 بوصة", stock: 3 },
];

const LowStock = () => {
  return (
    <div className="brutalist-border bg-white p-6 space-y-8 brutalist-shadow">
      <Title>نقص المخزون</Title>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-3 brutalist-border"
          >
            <div className="w-12 h-12 bg-surface-container flex items-center justify-center brutalist-border border-slate-200">
              <Image
                src={IMAGE_PATH}
                width={100}
                height={100}
                alt={item.name}
              />
            </div>

            <div className="flex-1 space-y-1">
              <Title className="text-base!">{item.name}</Title>
              <SubHeading className="text-xs! text-teritary!">
                المتبقي: {item.stock} قطعة
              </SubHeading>
            </div>

            <UIButton className="h-7! px-2! shadow-[black_3px_3px]!">
              طلب
            </UIButton>
          </div>
        ))}
      </div>

      <UIButton
        backgroundClass="bg-white text-black!"
        className="w-full! shadow-none!"
      >
        مشاهدة كافة التنبيهات
      </UIButton>
    </div>
  );
};

export default LowStock;
