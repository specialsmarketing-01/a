"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Links hidden on `/` so the video hero stays free of Speisekarte / CHEF / Kontakt labels in the top strip. */
const HIDDEN_ON_HOME = new Set(["/speisekarte", "/meet-the-chef", "/contact"]);

export function HeaderTopMainMenu() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const items: {
    href: string;
    label: string;
    src: string;
    menuImg?: boolean;
  }[] = [
    { href: "/", label: "Startseite", src: "/assets/img/fullWM_1.jpg" },
    { href: "/about", label: "Über uns", src: "/assets/img/fullWM_about.jpg" },
    { href: "/speisekarte", label: "Speisekarte", src: "/assets/img/fullWM_menu.jpg", menuImg: true },
    { href: "/meet-the-chef", label: "CHEF", src: "/assets/img/fullWM_chef.jpg" },
    { href: "/contact", label: "Kontakt", src: "/assets/img/fullWM_contact.jpg" },
  ];

  return (
    <ul className="top-main-menu">
      {items.map((item) => {
        if (isHome && HIDDEN_ON_HOME.has(item.href)) return null;
        return (
          <li key={item.href} className="top-main-menu-li">
            <Link href={item.href}>{item.label}</Link>
            <Image
              className={item.menuImg ? "top-main-menu-img menu-img" : "top-main-menu-img"}
              src={item.src}
              alt=""
              width={1920}
              height={1080}
              sizes="400px"
            />
          </li>
        );
      })}
    </ul>
  );
}
