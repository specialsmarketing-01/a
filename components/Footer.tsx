import Image from "next/image";
import Link from "next/link";

/** Extracted from `index.html` — structure and classes unchanged; page links use `Link`. */
export function Footer() {
  return (
    <footer>
      <div className="ak-footer ak-style-1">
        <div className="ak-bg footer-bg-img" data-src="/assets/img/footer_bg.png"></div>

        <div className="container ak-hr-container">
          <div className="ak-braner-logo type-color-1 footer-logo">
            <div className="footer-log-elem">
              <div className="footer-log-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="0 0 30 13" fill="none">
                  <path d="M28.991 12.2063L14.8322 1L0.67334 12.2063" stroke="white" strokeLinecap="round" />
                </svg>
              </div>
              <Image src="/assets/img/Hari1090-Logo.svg" alt="" width={200} height={56} unoptimized />
            </div>
          </div>
          <div className="ak-height-100 ak-height-lg-60"></div>
          <div className="ak-footer-hr-top"></div>

          <div className="footer-main">
            <div className="footer-eamil-menu">
              <p className="footer-contact-label">Email Address</p>
              <div className="footer-email">
                <a href="mailto:reservierung@hari1090.com">reservierung@hari1090.com</a>
              </div>
              <div className="footer-menu">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/speisekarte">Menu</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/meet-the-chef">CHEF</Link>
                  </li>
                  <li>
                    <Link href="/contact">Conatct</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ak-height-75 ak-height-lg-5"></div>
            <div className="footer-info">
              <p className="footer-contact-label">Adresse</p>
              <div className="footer-address">
                <a href="https://maps.app.goo.gl/gAd1JdfRW5d6eHkn7" target="_blank" rel="noopener noreferrer">
                  Althanstraße 51, 1090 Wien
                </a>
              </div>
              <p className="footer-contact-label">Rufen Sie uns an!</p>
              <div className="fooer-phn">
                <a href="tel:+4369913961360">+43 699 1396 1360</a>
              </div>
              <div className="footer-time">
                <p data-i18n="hours_line_1">MO-FR 11:30-22:00</p>
                <div className="footer-time-border my-1"></div>
                <p data-i18n="hours_line_2">Samstag: 12:00-22:30</p>
                <div className="footer-time-border my-1"></div>
                <p data-i18n="hours_line_3">Sonntag: Ruhetag</p>
              </div>
              <div className="footer-btn">
                <Link href="/reservations">
                  <div className="ak-btn style-5">Reservations</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="ak-footer-hr-bottom qodef-grid-item"></div>
          <div className="ak-height-130 ak-height-lg-30"></div>

          <div className="copy-right-section">
            <p className="text-uppercase text-md-center text-white" data-i18n="footer_copyright">
              © 2025, Alle Rechte vorbehalten HARI1090
            </p>
          </div>

          <div className="ak-height-45 ak-height-lg-30"></div>
        </div>
      </div>
    </footer>
  );
}
