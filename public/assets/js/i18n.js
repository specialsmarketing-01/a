const translations = {
  de: {
    // Navbar
    nav_home: "Startseite",
    nav_about: "Über uns",
    nav_menu: "Speisekarte",
    nav_chef: "CHEF",
    nav_portfolio: "Portfolio",
    nav_catering: "Catering",
    nav_blog: "Blog",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",

    // Footer + contact basics
    footer_email_label: "Email Address",
    footer_phone_label: "Telefon",
    footer_address_label: "Adresse",
    footer_hours_label: "Öffnungszeiten",
    footer_copyright:
      "© 2025, Alle Rechte vorbehalten HARI1090",

    // Opening hours text
    hours_line_1: "MO–FR 11:30–22:00",
    hours_line_2: "Samstag: 12:00–22:30",
    hours_line_3: "Sonntag: Ruhetag",

    // Hero / common titles (examples)
    home_hero_title_1: "Elegance Retreat",
    home_hero_title_2: "Restaurant",
    home_hero_subtitle: "Elegante italienische Küche",

    // Buttons
    btn_reservation: "Reservierung",
    btn_view_more: "Mehr ansehen",

    // Forms (generic)
    form_name_label: "Name",
    form_email_label: "E-Mail",
    form_message_label: "Nachricht",
    form_submit: "Senden",

    // Info banner (from task)
    info_notice_title: "Hinweis",
    info_notice_text:
      "Vom 23. bis 30. März 2026 sind wir aufgrund eines Caterings tagsüber außer Haus. Am Abend können Sie Ihren Tisch selbstverständlich wie gewohnt reservieren. Ab dem 31. März 2026 sind wir wieder ganztägig mit vollem Service für Sie da und freuen uns auf Ihren Besuch."
  },
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_menu: "Menu",
    nav_chef: "CHEF",
    nav_portfolio: "Portfolio",
    nav_catering: "Catering",
    nav_blog: "Blog",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    // Footer + contact basics
    footer_email_label: "Email Address",
    footer_phone_label: "Phone",
    footer_address_label: "Address",
    footer_hours_label: "Opening hours",
    footer_copyright:
      "© 2025, All Rights Reserved HARI1090",

    // Opening hours text
    hours_line_1: "MON–FRI 11:30–22:00",
    hours_line_2: "Saturday: 12:00–22:30",
    hours_line_3: "Sunday: Closed",

    // Hero / common titles (examples)
    home_hero_title_1: "Elegance Retreat",
    home_hero_title_2: "Restaurant",
    home_hero_subtitle: "Elegant Italian Food",

    // Buttons
    btn_reservation: "Reservation",
    btn_view_more: "View more",

    // Forms (generic)
    form_name_label: "Name",
    form_email_label: "Email",
    form_message_label: "Message",
    form_submit: "Send",

    // Info banner (from task)
    info_notice_title: "Info",
    info_notice_text:
      "From March 23 to 30, 2026 we are out during the day due to catering. In the evening you can of course reserve your table as usual. From March 31, 2026 we will again be at your service all day and look forward to your visit."
  }
};

const I18N_STORAGE_KEY = "hari1090_lang";

function getCurrentLang() {
  if (typeof window === "undefined") return "de";
  const stored = window.localStorage.getItem(I18N_STORAGE_KEY);
  return stored === "en" || stored === "de" ? stored : "de";
}

function setCurrentLang(lang) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(I18N_STORAGE_KEY, lang);
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.de;

  // Navbar links (data-key matches translation keys)
  document.querySelectorAll("a[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Placeholders
  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

  // Values (buttons / inputs)
  document.querySelectorAll("[data-i18n-value]").forEach((el) => {
    const key = el.getAttribute("data-i18n-value");
    if (dict[key]) {
      el.value = dict[key];
    }
  });

  // Optional: aria-labels
  document
    .querySelectorAll("[data-i18n-aria-label]")
    .forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (dict[key]) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

  // Update active state on language switcher
  document
    .querySelectorAll(".lang-switcher button[data-lang]")
    .forEach((btn) => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
}

function initLanguageSwitcher() {
  const current = getCurrentLang();
  applyTranslations(current);

  document
    .querySelectorAll(".lang-switcher button[data-lang]")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        setCurrentLang(lang);
        applyTranslations(lang);
      });
    });
}

document.addEventListener("DOMContentLoaded", initLanguageSwitcher);

