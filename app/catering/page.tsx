import type { Metadata } from "next";
import Link from "next/link";
import pageMeta from "@/content/page-meta.json";
import { CateringGsapInit } from "@/components/CateringGsapInit";

export const metadata: Metadata = {
  title: pageMeta.catering.title,
};

const cateringPageStyles = `
        /* Catering category cards: always show copy (portfolio cards use hover-only overlay) */
        .catering-event-cards .ak-card.ak-style-1 {
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: visible;
        }

        .catering-event-cards .ak-card.ak-style-1 .ak-card-img {
            aspect-ratio: 16 / 10;
            overflow: hidden;
            flex-shrink: 0;
        }

        .catering-event-cards .ak-card.ak-style-1 .ak-card-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .catering-event-cards .ak-card.ak-style-1 .card-info {
            position: relative;
            left: auto;
            bottom: auto;
            opacity: 1;
            margin: 0;
            flex: 1;
            background-color: #040D10;
        }

        .catering-event-cards .ak-card.ak-style-1:hover>.card-info {
            bottom: auto;
        }

        .catering-event-cards .ak-card.ak-style-1 .card-info .card-text {
            padding: 28px 24px 32px;
        }

        .catering-event-cards .ak-card.ak-style-1 .card-info .card-text .card-title {
            color: #FFD28D;
            font-size: 1.15rem;
            line-height: 1.3;
        }

        /* Prachtsaal photo: natural aspect ratio, no crop/stretch */
        .catering-prachtsaal-photo img {
            width: 100%;
            height: auto !important;
            object-fit: contain;
            vertical-align: middle;
        }

        .catering-lead-section .contact-content {
            display: block;
            width: 100%;
            max-width: 100%;
        }

        .catering-lead-section .contact-form {
            width: 100% !important;
        }

        .catering-lead-section .contact-form label {
            display: block;
            margin-bottom: 6px;
            font-size: 0.9rem;
            opacity: 0.95;
        }

        .catering-lead-section .contact-form select {
            background-color: transparent;
            border: 1px solid #4F4836;
            padding: 10px;
            width: 100%;
            margin-bottom: 16px;
            color: inherit;
        }

        .catering-lead-section .contact-form fieldset {
            border: 1px solid rgba(79, 72, 54, 0.6);
            padding: 1.25rem 1.25rem 0.5rem;
            margin-bottom: 1.5rem;
        }

        .catering-lead-section .contact-form legend {
            padding: 0 0.5rem;
            font-size: 1rem;
            width: auto;
            float: none;
        }

        .catering-lead-section .contact-form .form-check {
            margin-bottom: 12px;
        }

        .catering-lead-section .contact-form .form-check-input {
            margin-top: 0.35em;
        }

        .catering-quote {
            border-color: rgba(255,255,255,0.35) !important;
            font-style: italic;
        }
`;

export default function CateringPage() {
  return (
    <div className="catering-gsap-root">
      <CateringGsapInit />
      <style dangerouslySetInnerHTML={{ __html: cateringPageStyles }} />
      <section>
        <div
          className="ak-commmon-hero ak-style1 ak-bg"
          data-src="/assets/img/banner_top_all.png"
        >
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Catering
              </div>
              <h2 className="ak-section-title page-title-anim">Catering</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="ak-about-bg-color">
        <div className="ak-height-150 ak-height-lg-60"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2
                className="anim-title-2 ak-white-color text-center text-md-start"
                style={{ lineHeight: 1.25 }}
              >
                BEZIEHUNG ZWISCHEN GAST UND GASTGEBER
              </h2>
              <div className="ak-height-25"></div>
              <p
                className="about-subtext text-center text-md-start"
                style={{ fontSize: "1.15rem", color: "var(--heading-color)" }}
              >
                HARI1090 CATERING WIEN – Spezialisiert auf internationales & indisches, Event Catering und
                Firmenevents
              </p>
              <div className="ak-height-40 ak-height-lg-30"></div>
              <p className="about-subtext">
                Willkommen bei Hari1090, Ihrem Experten für exquisites Catering in Wien! Wir verstehen, dass Catering
                mehr als nur Essen servieren ist – es ist eine Kunstform, eine Magie, die die Beziehung zwischen Gast
                und Gastgeber definiert. Unser Versprechen geht über die Zubereitung von Speisen hinaus; es umfasst die
                Kunst der Präsentation, die Liebe zum Detail und die Einzigartigkeit unserer Gerichte. Mit einem
                Chefkoch, der seine Expertise bei einem der weltweit führenden Catering-Unternehmen in der indischen
                Küche entwickelt hat, meistern wir Herausforderungen und erfüllen Anforderungen perfekt. Teilen Sie uns
                Ihre kulinarischen Wünsche mit, nennen Sie die Anzahl der Gäste, und wir kümmern uns um den Rest. Bei uns
                wird jedes Event, sei es eine Firmenfeier, Hochzeit oder Gartenparty, zu einem unvergesslichen Moment
                dank höchster Essensqualität.
              </p>
              <div className="ak-height-30"></div>
              <p className="about-subtext mb-0">
                Aktuelle Details und Angebote finden Sie auch auf unserer Website:{" "}
                <a
                  href="https://hari1090.com/catering/"
                  className="text-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hari1090.com/catering
                </a>
              </p>
              <div className="ak-height-70 ak-height-lg-50"></div>

              <h2 className="anim-title-2 ak-white-color">Quelle des Staunens</h2>
              <div className="ak-height-30"></div>
              <h3 className="anim-title-2 ak-white-color" style={{ fontSize: "1.35rem", letterSpacing: "0.02em" }}>
                Über uns
              </h3>
              <div className="ak-height-25"></div>
              <p className="about-subtext">
                Unser Team bei Hari1090 by Kumar’s Kitchen bringt über 35 Jahre Erfahrung in der gehobenen Gastronomie
                und im Premium-Catering mit. In dieser Zeit haben wir unzählige Veranstaltungen – von exklusiven
                Firmenfeiern über hochkarätige Galaabende bis hin zu privaten Festen und großen Hochzeiten – auf höchstem
                Niveau kulinarisch begleitet.
              </p>
              <div className="ak-height-25"></div>
              <p className="about-subtext">
                Besonders hervorzuheben ist unsere enge Zusammenarbeit mit internationalen Spitzenköchen, darunter
                erfahrene Do&Co-Chefköche, die weltweit für Airlines, Formel-1-Events, Staatsbankette und Luxus-Events im
                Einsatz waren. Dieses einzigartige Know-how kombinieren wir mit unserer eigenen Handschrift: innovative
                Konzepte, kreative Menügestaltung, kompromisslose Frische und Perfektion bis ins kleinste Detail.
              </p>
              <div className="ak-height-25"></div>
              <p className="about-subtext">
                <strong>Unsere Philosophie:</strong> kulinarische Exzellenz, absolute Zuverlässigkeit und
                maßgeschneiderter Service. Wir stehen für Liebe zum Detail, höchste Professionalität, reibungslose
                Organisation, Premium-Qualität und Herzlichkeit – damit Ihre Gäste nicht nur satt, sondern begeistert
                nach Hause gehen.
              </p>
              <div className="ak-height-25"></div>
              <p className="about-subtext">
                Mit Hari1090 by Kumar’s Kitchen entscheiden Sie sich für einen Partner, der Erfahrung, Kreativität,
                Leidenschaft und internationale Spitzenqualität vereint. Wir machen Ihr Event nicht nur erfolgreich,
                sondern zu einem unvergesslichen Erlebnis, das lange in Erinnerung bleibt.
              </p>
              <div className="ak-height-50 ak-height-lg-35"></div>

              <h3 className="anim-title-2 ak-white-color" style={{ fontSize: "1.25rem" }}>
                Wenn die Leidenschaft zum Beruf wird
              </h3>
              <div className="ak-height-25"></div>
              <blockquote className="about-subtext border-start border-2 ps-4 ms-1 catering-quote">
                <p className="mb-3">
                  „Kochen ist nicht nur unsere Leidenschaft, sondern etwas, das tief in unseren Herzen sitzt. Es macht
                  nicht nur Spaß, das Essen zuzubereiten, sondern auch darüber nachzudenken, wie man es verbessern oder
                  noch gesünder zubereiten kann. Es ist wirklich eine Kunst, über das Kochen Bescheid zu wissen. Wir
                  glauben, dass es weit mehr ist, als nur Zutaten zusammen zu rühren.
                </p>
                <p className="mb-0">
                  Die Gefühle, die man beim Kochen erlebt, berühren das End-Ergebnis des Essens.“
                </p>
                <footer className="mt-3 about-subtext" style={{ fontStyle: "normal", opacity: 0.9 }}>
                  (Das Küchenteam von Hari1090)
                </footer>
              </blockquote>

              <div className="ak-height-80 ak-height-lg-55"></div>

              <p
                className="about-subtext text-uppercase mb-2"
                style={{ letterSpacing: "0.14em", fontSize: "0.8rem", opacity: 0.85 }}
              >
                Veranstaltungen
              </p>
              <h2 className="anim-title-2 ak-white-color">Unsere Catering- & Eventangebote</h2>
              <div className="ak-height-30"></div>
              <p className="about-subtext">
                Unser erfahrenes Team steht Ihnen bei der gesamten Planung Ihrer Veranstaltung zur Seite – von der ersten
                Besichtigung bis hin zum letzten Detail. Egal, ob Sie ein geschäftliches Meeting, eine Konferenz oder ein
                gesellschaftliches Beisammensein planen, wir setzen alles daran, dass Ihr Event unvergesslich wird. Nutzen
                Sie unseren Prachtsaal für Ihr Meeting und lassen Sie sich von uns die perfekten Fingerfood-Platten für
                Sie und Ihre Gäste zusammenstellen.
              </p>
              <div className="ak-height-35"></div>
              <div className="d-flex justify-content-center">
                <div className="rounded overflow-hidden mx-auto w-100 catering-prachtsaal-photo" style={{ maxWidth: "56rem" }}>
                  <img
                    src="/assets/img/catering/herosecrion.jpg"
                    alt="Hari1090 – Catering & Veranstaltungen"
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              </div>
              <div className="ak-height-55 ak-height-lg-40"></div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 catering-event-cards">
                <div className="col">
                  <div className="ak-card ak-style-1 h-100">
                    <div className="ak-card-img">
                      <img src="/assets/img/catering/catering-private-dining.jpg" alt="Private Dining & Feiern" />
                    </div>
                    <div className="card-info">
                      <div className="card-text style-1">
                        <h5 className="card-title">Private Dining & Feiern</h5>
                        <p className="about-subtext mb-0 mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                          Für besondere Momente im kleinen Kreis – ob Geburtstage, Jubiläen oder elegante Dinnerpartys.
                          Wir kreieren kulinarische Erlebnisse mit feinem Service, die Ihre Gäste begeistern.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ak-card ak-style-1 h-100">
                    <div className="ak-card-img">
                      <img src="/assets/img/catering/catering-corporate.jpg" alt="Corporate Events & Business" />
                    </div>
                    <div className="card-info">
                      <div className="card-text style-1">
                        <h5 className="card-title">Corporate Events & Business</h5>
                        <p className="about-subtext mb-0 mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                          Von Business-Lunches über Produktpräsentationen bis zu großen Firmenfeiern – wir verbinden
                          Präzision, Qualität und Stil für Ihren professionellen Auftritt. Perfekt organisiert,
                          geschmackvoll serviert.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ak-card ak-style-1 h-100">
                    <div className="ak-card-img">
                      <img src="/assets/img/catering/catering-wedding.jpg" alt="Wedding Catering & Receptions" />
                    </div>
                    <div className="card-info">
                      <div className="card-text style-1">
                        <h5 className="card-title">Wedding Catering & Receptions</h5>
                        <p className="about-subtext mb-0 mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                          Ihr schönster Tag verdient Perfektion. Ob klassisch, modern oder thematisch – unser Team
                          gestaltet kulinarische Hochzeitskonzepte, die Herzen berühren und Erinnerungen schaffen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ak-card ak-style-1 h-100">
                    <div className="ak-card-img">
                      <img src="/assets/img/catering/catering-anniversary.jpg" alt="Anniversary & Family Celebrations" />
                    </div>
                    <div className="card-info">
                      <div className="card-text style-1">
                        <h5 className="card-title">Anniversary & Family Celebrations</h5>
                        <p className="about-subtext mb-0 mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                          Feiern Sie Ihre Meilensteine mit Genuss. Vom familiären Fest bis zum Gala-Dinner sorgen wir für
                          Atmosphäre, Stil und außergewöhnliche Küche.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ak-card ak-style-1 h-100">
                    <div className="ak-card-img">
                      <img src="/assets/img/catering/catering-gala-vip.jpg" alt="Gala Dinners & VIP Events" />
                    </div>
                    <div className="card-info">
                      <div className="card-text style-1">
                        <h5 className="card-title">Gala Dinners & VIP Events</h5>
                        <p className="about-subtext mb-0 mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                          Feinste Haute Cuisine für anspruchsvolle Gäste. Ob Gala-Abend, Preisverleihung oder
                          Diplomatenempfang – unser Team bietet Service und Qualität auf internationalem Top-Niveau.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ak-card ak-style-1 h-100">
                    <div className="ak-card-img">
                      <img src="/assets/img/catering/catering-cocktail.jpg" alt="Cocktail Receptions & Social" />
                    </div>
                    <div className="card-info">
                      <div className="card-text style-1">
                        <h5 className="card-title">Cocktail Receptions & Social</h5>
                        <p className="about-subtext mb-0 mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                          Leichte, elegante Häppchen, perfekt abgestimmte Drinks und ein Ambiente zum Verweilen. Ideal für
                          Empfänge, Networking-Events oder Abendveranstaltungen mit Stil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ak-card ak-style-1 h-100">
                    <div className="ak-card-img">
                      <img src="/assets/img/catering/catering-cultural.jpg" alt="Cultural & Embassy Events" />
                    </div>
                    <div className="card-info">
                      <div className="card-text style-1">
                        <h5 className="card-title">Cultural & Embassy Events</h5>
                        <p className="about-subtext mb-0 mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                          Feinschmecker auf diplomatischer Mission – Hari1090 und Kumar’s Kitchen sind erfahrene Partner
                          für internationale Delegationen, Kulturabende und Botschaftsempfänge. Authentisch. Elegant.
                          Weltgewandt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ak-card ak-style-1 h-100">
                    <div className="ak-card-img">
                      <img src="/assets/img/catering/catering-buffet.jpg" alt="Luxury Buffet & Flying Service" />
                    </div>
                    <div className="card-info">
                      <div className="card-text style-1">
                        <h5 className="card-title">Luxury Buffet & Flying Service</h5>
                        <p className="about-subtext mb-0 mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                          Ob Flying Dinner oder großzügiges Buffet – wir kombinieren internationale Raffinesse mit der
                          Präzision der gehobenen Küche. Jedes Gericht – frisch, kunstvoll und harmonisch präsentiert.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="ak-card ak-style-1 h-100">
                    <div className="ak-card-img">
                      <img src="/assets/img/catering/catering-outdoor.jpg" alt="Outdoor & Garden Parties" />
                    </div>
                    <div className="card-info">
                      <div className="card-text style-1">
                        <h5 className="card-title">Outdoor & Garden Parties</h5>
                        <p className="about-subtext mb-0 mt-2" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                          Genuss im Freien, elegant inszeniert. Von sommerlichen Grillbuffets bis zu eleganten
                          Gartenfeiern – wir bringen feine Küche an Ihren Lieblingsort.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ak-height-60 ak-height-lg-40"></div>

              <div className="border-bottom-1 mb-5"></div>
              <h3 className="anim-title-2 ak-white-color mb-4">Kontakt & Anfrage</h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <p className="footer-contact-label mb-2">Adresse</p>
                  <p>
                    <a href="https://maps.app.goo.gl/gAd1JdfRW5d6eHkn7" target="_blank" rel="noopener noreferrer">
                      Althanstraße 51, 1090 Wien
                    </a>
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="footer-contact-label mb-2">E-Mail</p>
                  <p>
                    <a href="mailto:reservierung@hari1090.com">reservierung@hari1090.com</a>
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="footer-contact-label mb-2">Telefon</p>
                  <p>
                    <a href="tel:+4369913961360">+43 699 1396 1360</a>
                  </p>
                </div>
              </div>
              <div className="ak-height-40"></div>
              <div className="d-flex flex-wrap gap-3">
                <Link href="/contact" className="ak-btn style-5">
                  <span>Nachricht senden</span>
                </Link>
                <Link href="/reservations" className="ak-btn style-5">
                  <span>Tisch reservieren</span>
                </Link>
              </div>
              <div className="ak-height-70 ak-height-lg-50"></div>
              <div className="border-bottom-1 mb-5"></div>
              <div className="catering-lead-section">
                <h3 className="contact-form-title anim-title-2 ak-white-color mb-2">Event-Anfrage</h3>
                <p className="about-subtext mb-4">
                  Bitte füllen Sie die Felder so vollständig wie möglich aus – so können wir Ihr Catering oder Ihre
                  Veranstaltung präzise planen und Ihnen ein passendes Angebot unterbreiten.
                </p>
                <div className="contact-content width-full">
                  <div className="contact-form width-full">
                    <form
                      id="catering-event-lead-form"
                      action="https://formsubmit.co/reservierung@hari1090.com"
                      method="POST"
                    >
                      <input type="hidden" name="_subject" value="Catering / Event-Anfrage – Hari1090 Website" />
                      <input type="hidden" name="_template" value="table" />
                      <input
                        type="text"
                        name="_honey"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />

                      <fieldset>
                        <legend className="footer-contact-label">Kontakt & Rechnungsempfänger</legend>
                        <div className="row g-3">
                          <div className="col-md-3">
                            <label htmlFor="lead-anrede">Anrede</label>
                            <select id="lead-anrede" name="anrede">
                              <option value="">— bitte wählen —</option>
                              <option value="herr">Herr</option>
                              <option value="frau">Frau</option>
                              <option value="divers">Divers</option>
                              <option value="firma">Firma</option>
                            </select>
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="lead-vorname">
                              Vorname <span aria-hidden="true">*</span>
                            </label>
                            <div className="from-input p-0">
                              <input
                                id="lead-vorname"
                                name="vorname"
                                type="text"
                                placeholder="Vorname"
                                required
                                autoComplete="given-name"
                              />
                            </div>
                          </div>
                          <div className="col-md-5">
                            <label htmlFor="lead-nachname">
                              Nachname <span aria-hidden="true">*</span>
                            </label>
                            <div className="from-input p-0">
                              <input
                                id="lead-nachname"
                                name="nachname"
                                type="text"
                                placeholder="Nachname"
                                required
                                autoComplete="family-name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lead-firma">Firma / Organisation</label>
                            <div className="from-input p-0">
                              <input
                                id="lead-firma"
                                name="firma_organisation"
                                type="text"
                                placeholder="Optional"
                                autoComplete="organization"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lead-position">Position / Abteilung</label>
                            <div className="from-input p-0">
                              <input id="lead-position" name="position_abteilung" type="text" placeholder="Optional" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lead-email">
                              E-Mail <span aria-hidden="true">*</span>
                            </label>
                            <div className="from-input p-0">
                              <input
                                id="lead-email"
                                name="email"
                                type="email"
                                placeholder="name@beispiel.at"
                                required
                                autoComplete="email"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="lead-telefon">
                              Telefon <span aria-hidden="true">*</span>
                            </label>
                            <div className="from-input p-0">
                              <input
                                id="lead-telefon"
                                name="telefon"
                                type="tel"
                                placeholder="+43 …"
                                required
                                autoComplete="tel"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="lead-telefon-alt">Telefon (alternativ)</label>
                            <div className="from-input p-0">
                              <input
                                id="lead-telefon-alt"
                                name="telefon_alternativ"
                                type="tel"
                                placeholder="Optional"
                                autoComplete="tel"
                              />
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset>
                        <legend className="footer-contact-label">Event & Termin</legend>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label htmlFor="lead-event-art">
                              Art der Veranstaltung <span aria-hidden="true">*</span>
                            </label>
                            <select id="lead-event-art" name="event_art" required>
                              <option value="">— bitte wählen —</option>
                              <option value="private-dining">Private Dining & Feiern</option>
                              <option value="corporate">Corporate Events & Business</option>
                              <option value="wedding">Wedding Catering & Receptions</option>
                              <option value="anniversary">Anniversary & Family Celebrations</option>
                              <option value="gala-vip">Gala Dinners & VIP Events</option>
                              <option value="cocktail">Cocktail Receptions & Social</option>
                              <option value="cultural-embassy">Cultural & Embassy Events</option>
                              <option value="buffet-flying">Luxury Buffet & Flying Service</option>
                              <option value="outdoor-garden">Outdoor & Garden Parties</option>
                              <option value="sonstiges">Sonstiges / Kombination</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="lead-datum">Wunschtermin (Datum)</label>
                            <div className="from-input p-0">
                              <input id="lead-datum" name="wunschtermin_datum" type="date" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="lead-datum-alt">Alternativtermin</label>
                            <div className="from-input p-0">
                              <input id="lead-datum-alt" name="alternativtermin_datum" type="date" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="lead-beginn">Beginn (ca.)</label>
                            <div className="from-input p-0">
                              <input id="lead-beginn" name="uhrzeit_beginn" type="time" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="lead-ende">Ende (ca.)</label>
                            <div className="from-input p-0">
                              <input id="lead-ende" name="uhrzeit_ende" type="time" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="lead-dauer">Dauer (falls bekannt)</label>
                            <div className="from-input p-0">
                              <input id="lead-dauer" name="dauer_text" type="text" placeholder="z. B. 4 Stunden" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="lead-gaeste">
                              Anzahl Gäste (Erwachsene) <span aria-hidden="true">*</span>
                            </label>
                            <div className="from-input p-0">
                              <input
                                id="lead-gaeste"
                                name="anzahl_gaeste_erwachsene"
                                type="number"
                                min={1}
                                placeholder="z. B. 50"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="lead-kinder">Kinder (Anzahl)</label>
                            <div className="from-input p-0">
                              <input id="lead-kinder" name="anzahl_kinder" type="number" min={0} placeholder="0" />
                            </div>
                          </div>
                          <div className="col-12">
                            <label htmlFor="lead-event-titel">Name / Titel des Events</label>
                            <div className="from-input p-0">
                              <input
                                id="lead-event-titel"
                                name="event_titel"
                                type="text"
                                placeholder="z. B. Firmenjubiläum, Hochzeit Maria & …"
                              />
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset>
                        <legend className="footer-contact-label">Ort & Rahmen</legend>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label htmlFor="lead-ort-typ">
                              Wo soll stattfinden? <span aria-hidden="true">*</span>
                            </label>
                            <select id="lead-ort-typ" name="veranstaltungsort_typ" required>
                              <option value="">— bitte wählen —</option>
                              <option value="hari1090-prachtsaal">Bei Hari1090 (Prachtsaal / Restaurant)</option>
                              <option value="extern-nur-catering">Externe Location (nur Catering / Lieferung)</option>
                              <option value="beides-offen">Noch offen / Beratung gewünscht</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lead-budget">Budget-Rahmen (ungefähr)</label>
                            <select id="lead-budget" name="budget_rahmen">
                              <option value="">— optional —</option>
                              <option value="unter-3k">unter 3.000 €</option>
                              <option value="3k-8k">3.000 – 8.000 €</option>
                              <option value="8k-20k">8.000 – 20.000 €</option>
                              <option value="20k-50k">20.000 – 50.000 €</option>
                              <option value="ueber-50k">über 50.000 €</option>
                              <option value="offen">Noch offen / Gespräch</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <label htmlFor="lead-adresse-extern">Adresse der externen Location (Straße, PLZ, Ort)</label>
                            <div className="from-input p-0">
                              <input
                                id="lead-adresse-extern"
                                name="adresse_externe_location"
                                type="text"
                                placeholder="Falls zutreffend – vollständige Adresse oder Stichwort"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lead-service-stil">Gewünschter Service-Stil</label>
                            <select id="lead-service-stil" name="service_stil">
                              <option value="">— optional —</option>
                              <option value="sitzmenue">Sitzmenü / plated</option>
                              <option value="buffet">Buffet</option>
                              <option value="flying">Flying Service / Walking Dinner</option>
                              <option value="cocktail">Cocktail / Fingerfood</option>
                              <option value="bbq-garten">Grill / Garten</option>
                              <option value="mix">Mix / Beratung</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lead-getraenke">Getränke</label>
                            <select id="lead-getraenke" name="getraenke">
                              <option value="">— optional —</option>
                              <option value="weinbegleitung">Weinbegleitung</option>
                              <option value="bar-cocktails">Bar & Cocktails</option>
                              <option value="sekt-empfang">Sekt / Empfang</option>
                              <option value="alkoholfrei">Schwerpunkt alkoholfrei</option>
                              <option value="offen">Noch offen</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <label htmlFor="lead-logistik">Aufbau, Lieferfenster, Parken, Lieferantenzugang</label>
                            <textarea
                              id="lead-logistik"
                              name="logistik_parken_zugang"
                              rows={3}
                              className="col-12"
                              placeholder="Zeitfenster für Anlieferung, Hintereingang, Aufzug, Parkplätze für Gäste …"
                            ></textarea>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset>
                        <legend className="footer-contact-label">Kulinarik & Besonderheiten</legend>
                        <div className="row g-3">
                          <div className="col-12">
                            <label htmlFor="lead-speisen">Wünsche zur Küche / Menürichtung</label>
                            <textarea
                              id="lead-speisen"
                              name="kulinarische_wuensche"
                              rows={3}
                              className="col-12"
                              placeholder="z. B. international, indisch, vegetarische Optionen, Kinder …"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <label htmlFor="lead-allergene">Allergien & Unverträglichkeiten</label>
                            <textarea
                              id="lead-allergene"
                              name="allergien_intoleranzen"
                              rows={3}
                              className="col-12"
                              placeholder="Nüsse, Gluten, Laktose, religiöse Vorgaben …"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <label htmlFor="lead-technik">Technik / Besondere Ausstattung</label>
                            <textarea
                              id="lead-technik"
                              name="technik_besondere_ausstattung"
                              rows={2}
                              className="col-12"
                              placeholder="Mikrofon, Bühne, DJ-Tisch, zusätzliche Tische …"
                            ></textarea>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lead-quelle">Wie sind Sie auf uns aufmerksam geworden?</label>
                            <select id="lead-quelle" name="quelle">
                              <option value="">— optional —</option>
                              <option value="empfehlung">Empfehlung</option>
                              <option value="google">Google / Suche</option>
                              <option value="social">Social Media</option>
                              <option value="event">Event / Messe</option>
                              <option value="sonstiges">Sonstiges</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <label htmlFor="lead-freitext">Weitere Wünsche & Anmerkungen</label>
                            <textarea
                              id="lead-freitext"
                              name="weitere_anmerkungen"
                              rows={4}
                              className="col-12"
                              placeholder="Alles, was wir für Ihr Angebot wissen sollten …"
                            ></textarea>
                          </div>
                        </div>
                      </fieldset>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="datenschutz_ok"
                          id="lead-dsgvo"
                          value="ja"
                          required
                        />
                        <label className="form-check-label about-subtext" htmlFor="lead-dsgvo">
                          Ich habe die Datenschutzhinweise zur Kenntnis genommen und willige in die Verarbeitung meiner
                          Angaben zur Bearbeitung dieser Anfrage ein. <span aria-hidden="true">*</span>
                        </label>
                      </div>

                      <div className="ak-height-30"></div>
                      <div className="ak-btn style-5">
                        <button type="submit">Anfrage senden</button>
                      </div>
                      <p className="about-subtext mt-4 mb-0" style={{ fontSize: "0.85rem", opacity: 0.85 }}>
                        Pflichtfelder sind mit * gekennzeichnet. Versand erfolgt über einen gesicherten Dienst; Sie
                        erhalten eine Bestätigung an Ihre E-Mail.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-60"></div>
      </section>
    </div>
  );
}
