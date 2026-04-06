import Link from "next/link";

type Props = {
  breadcrumbLabel: string;
  title: string;
};

/**
 * Hero + content shell matching inner pages (ak-commmon-hero, ak-about-bg-color).
 * Uses H1 for the page title as requested for placeholder menu sections.
 */
export function MenuPlaceholderShell({ breadcrumbLabel, title }: Props) {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / {breadcrumbLabel}
              </div>
              <h1 className="ak-section-title page-title-anim">{title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ak-about-bg-color">
        <div className="ak-height-150 ak-height-lg-60"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="about-subtext mb-0">Content coming soon</p>
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-60"></div>
      </section>
    </>
  );
}
