"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import IconHolder from "../IconHolder";

const links = [
  {
    title: "لوحة القيادة",
    icon: "dashboard",
    href: "/dashboard",
  },
  {
    title: "المنتجات",
    icon: "inventory_2",
    href: "/products",
  },
  {
    title: "الطلبات",
    icon: "shopping_cart",
    href: "/orders",
  },
  {
    title: "المخزون",
    icon: "warehouse",
    href: "/inventory",
  },
  {
    title: "العملاء",
    icon: "group",
    href: "/customers",
  },
  {
    title: "المعاملات",
    icon: "receipt_long",
    href: "/transactions",
  },
  {
    title: "الأصول",
    icon: "account_balance",
    href: "/assets",
  },
  {
    title: "التقارير",
    icon: "assessment",
    href: "/reports",
  },
];

const bottomLinks = [
  {
    title: "الإعدادات",
    icon: "settings",
    href: "/settings",
  },
  {
    title: "تسجيل الخروج",
    icon: "logout",
    href: "/logout",
    danger: true,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col h-screen fixed right-0 top-0 overflow-y-auto w-64 border-l border-[#1b1b1c] z-50 bg-[#F4F5F7]">
      {/* Logo */}
      <div className="p-3 py-[6.7px] border-b border-[#1b1b1c]">
        <div className="flex items-center gap-3">
          <Image src={"/images/logo.png"} alt="Logo" width={100} height={50} />
        </div>
      </div>

      {/* Main Links */}
      <nav className="flex-1 py-4">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "flex items-center gap-3 px-6 py-3 transition-colors duration-150 font-sans text-right font-bold text-sm",
                isActive
                  ? "bg-[#0052CC] text-white border-r-4 border-white"
                  : "text-slate-600 hover:bg-slate-200",
              )}
            >
              <IconHolder
                name={link.icon}
                fontSize={20}
                className="bg-transparent! border-0!"
                color={isActive ? "white" : "#45556c"}
              />
              <span>{link.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Links */}
      <div className="p-4 border-t border-[#1b1b1c]">
        {bottomLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "flex items-center gap-3 px-6 py-2 transition-colors duration-150 font-sans text-right font-bold text-sm mb-1",
                link.danger
                  ? "text-error hover:bg-error-container"
                  : isActive
                    ? "bg-[#0052CC] text-white"
                    : "text-slate-600 hover:bg-slate-200",
              )}
            >
              <IconHolder
                name={link.icon}
                fontSize={20}
                className="bg-transparent! border-0!"
                color={isActive ? "white" : "#45556c"}
              />
              <span>{link.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
