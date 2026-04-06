import Image from "next/image";
import Link from "next/link";
import { HeaderNavClient } from "@/components/HeaderNavClient";
import { HeaderTopMainMenu } from "@/components/HeaderTopMainMenu";

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
          <HeaderTopMainMenu />
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
