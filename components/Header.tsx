import Image from "next/image";
import Link from "next/link";
import { HeaderNavClient } from "@/components/HeaderNavClient";

/** Extracted from `index.html` — structure and classes unchanged; internal routes use `Link`. */
export function Header() {
  return (
    <header className="ak-site_header ak-style1 ak-sticky_header ak-site_header_full_width">
      <div className="header-top">
        <div className="wrapper">
          <div className="header-logo">
            <Link href="/reservations" className="logo">
              Tischreservierung
            </Link>
          </div>
          <div className="center-log">
            <Link href="/">
              <Image
                src="/assets/img/Hari1090-Logo.svg"
                alt=""
                width={200}
                height={56}
                priority
                unoptimized
              />
            </Link>
          </div>
          <button className="ak-menu-toggle" id="akMenuToggle" type="button">
            <svg viewBox="0 0 20 15" width="40px" height="30px" className="ak-menu-icon">
              <path d="M20,2 L2,2" className="bar-1"></path>
              <path d="M2,7 L20,7" className="bar-2"></path>
              <path d="M30,12 L2,12" className="bar-3"></path>
            </svg>
          </button>
          <ul className="top-main-menu">
            <li className="top-main-menu-li">
              <Link href="/">Startseite</Link>
              <Image
                className="top-main-menu-img"
                src="/assets/img/fullWM_1.jpg"
                alt=""
                width={1920}
                height={1080}
                sizes="400px"
              />
            </li>
            <li className="top-main-menu-li">
              <Link href="/about">Über uns</Link>
              <Image
                className="top-main-menu-img"
                src="/assets/img/fullWM_about.jpg"
                alt=""
                width={1920}
                height={1080}
                sizes="400px"
              />
            </li>
            <li className="top-main-menu-li">
              <Link href="/speisekarte">Speisekarte</Link>
              <Image
                className="top-main-menu-img menu-img"
                src="/assets/img/fullWM_menu.jpg"
                alt=""
                width={1920}
                height={1080}
                sizes="400px"
              />
            </li>
            <li className="top-main-menu-li">
              <Link href="/meet-the-chef">CHEF</Link>
              <Image
                className="top-main-menu-img"
                src="/assets/img/fullWM_chef.jpg"
                alt=""
                width={1920}
                height={1080}
                sizes="400px"
              />
            </li>
            <li className="top-main-menu-li">
              <Link href="/contact">Kontakt</Link>
              <Image
                className="top-main-menu-img"
                src="/assets/img/fullWM_contact.jpg"
                alt=""
                width={1920}
                height={1080}
                sizes="400px"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-bar-border"></div>
      <div className="ak-main_header">
        <div className="container">
          <div className="ak-main_header_in">
            <div className="ak-main_header_left">
              <Link className="ak-site_branding" href="/">
                <Image
                  src="/assets/img/Hari1090-Logo.svg"
                  alt=""
                  width={200}
                  height={56}
                  priority
                  unoptimized
                />
              </Link>
            </div>
            <div className="ak-main_header_right">
              <div className="ak-nav ak-medium">
                <HeaderNavClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
