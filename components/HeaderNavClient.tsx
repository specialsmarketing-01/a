"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { MENU_SUBPAGE_ITEMS } from "@/lib/menuSubpageConfig";

export function HeaderNavClient() {
  const pathname = usePathname();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 991px)");
    const sync = () => setMobileNav(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setSubmenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!submenuOpen || !mobileNav) return;
      if (liRef.current && !liRef.current.contains(e.target as Node)) {
        setSubmenuOpen(false);
      }
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [submenuOpen, mobileNav]);

  const toggleSubmenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSubmenuOpen((o) => !o);
  }, []);

  const menuChildActive = MENU_SUBPAGE_ITEMS.some((i) => i.href === pathname);
  const hideMenuChefKontaktOnHome = pathname === "/";

  return (
    <ul className="ak-nav_list">
      <li>
        <Link href="/" data-key="nav_home">
          Startseite
        </Link>
      </li>
      <li>
        <Link href="/about" data-key="nav_about">
          Über uns
        </Link>
      </li>
      {!hideMenuChefKontaktOnHome ? (
        <li
          ref={liRef}
          className={`menu-item-has-children nav-submenu-managed${submenuOpen ? " nav-submenu-open" : ""}${
            menuChildActive ? " current-menu-item" : ""
          }`}
        >
          <Link href="/speisekarte" data-key="nav_menu">
            Speisekarte
          </Link>
          <button
            type="button"
            className="nav-submenu-toggle"
            aria-expanded={submenuOpen}
            aria-haspopup="true"
            aria-label="Speisekarte Untermenü"
            onClick={toggleSubmenu}
          />
          <ul>
            {MENU_SUBPAGE_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </li>
      ) : null}
      {!hideMenuChefKontaktOnHome ? (
        <li>
          <Link href="/meet-the-chef" data-key="nav_chef">
            CHEF
          </Link>
        </li>
      ) : null}
      <li>
        <Link href="/portfolio" data-key="nav_portfolio">
          Portfolio
        </Link>
      </li>
      <li>
        <Link href="/catering" data-key="nav_catering">
          Catering
        </Link>
      </li>
      <li>
        <Link href="/blog" data-key="nav_blog">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/gallery" data-key="nav_gallery">
          Galerie
        </Link>
      </li>
      {!hideMenuChefKontaktOnHome ? (
        <li>
          <Link href="/contact" data-key="nav_contact">
            Kontakt
          </Link>
        </li>
      ) : null}
      <li className="lang-switcher">
        <button type="button" data-lang="de">
          DE
        </button>
        <button type="button" data-lang="en">
          EN
        </button>
      </li>
    </ul>
  );
}
