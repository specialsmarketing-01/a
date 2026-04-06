/**
 * Matches `index.html` script order. Omits unused plugins (no references in main.js):
 * bootstrap.bundle, isotope, jquery.slick, locomotive-scroll, pagination.
 */
export const TEMPLATE_SCRIPTS = [
  "/assets/js/plugins/jquery-3.7.1.min.js",
  "/assets/js/plugins/swiper.min.js",
  "/assets/js/plugins/lightgallery.min.js",
  "/assets/js/plugins/ScrollSmoother.min.js",
  "/assets/js/plugins/SplitText.min.js",
  "/assets/js/plugins/ScrollTrigger.min.js",
  "/assets/js/plugins/ScrollToPlugin.min.js",
  "/assets/js/plugins/gsap.min.js",
  "/assets/js/i18n.js",
  "/assets/js/main.js",
] as const;
