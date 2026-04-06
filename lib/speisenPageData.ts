/**
 * Content structure mirrors https://hari1090.com/speisen/ (German copy preserved).
 */

export type SpeisenMenuItem = {
  title: string;
  price: string;
  description?: string;
};

export type SpeisenMenuSection = {
  id: string;
  /** Section heading (omit when hideHeading) */
  title: string;
  /** Subtitle under section title (e.g. BEILAGEN NACHSPEISEN tagline) */
  subtitle?: string;
  /** Optional intro block(s) before menu rows */
  intro?: string[];
  items: SpeisenMenuItem[];
  /** Sticky nav / category strip as on original page */
  navStripBefore?: string;
  /** Aloo Palak–Gajjar block has no heading on hari1090.com */
  hideHeading?: boolean;
};

/** Top-of-page CTA wie auf hari1090.com */
export const SPEISEN_BOOK_TABLE = {
  href: "https://hari1090.com/reservierung/",
  label: "book a table",
} as const;

export const SPEISEN_INTRO = {
  kicker: "🍽️ Speisen im Hari 1090",
  headline: "Internationale Küche mit Raffinesse – für jeden Geschmack",
  paragraphs: [
    "Im Hari’s 1090 erwartet Sie eine moderne, weltoffene Küche, die kulinarische Klassiker neu interpretiert und mit frischen, hochwertigen Zutaten überzeugt. Ob mediterran inspiriert, asiatisch angehaucht oder österreichisch verfeinert – unsere Speisen sind so vielfältig wie unsere Gäste.",
    "Genießen Sie eine Auswahl an leichten Vorspeisen, raffinierten Hauptgerichten und hausgemachten Desserts – liebevoll zubereitet und stilvoll serviert. Auch vegetarische und vegane Optionen finden bei uns einen festen Platz auf der Karte.",
    "Egal ob Business-Lunch, Dinner-Date oder entspannter Abend mit Freunden – bei uns wird jede Mahlzeit zum kleinen Erlebnis.",
  ],
} as const;

export const SPEISEN_MENU_SECTIONS: SpeisenMenuSection[] = [
  {
    id: "vorspeisen",
    title: "VORSPEISEN",
    items: [
      {
        title: "Gegrillte Garnelen mit Cocktail-Dip",
        price: "13.90",
        description:
          "Knusprig gegrillte Garnelen – außen goldbraun, innen zart – serviert mit einem hausgemachten, fein abgeschmeckten Cocktail-Dip. (G, M)",
      },
      {
        title: "Hari’s Mango-Avocado Tartare mit gegrillten Garnelen",
        price: "14.90",
        description:
          "Fruchtige Mango trifft auf cremige Avocado – harmonisch vereint zu einem erfrischenden Tatar. Dazu servieren wir knusprig gegrillte Garnelen – ein leichter, eleganter Start in Ihr Menü. (G, M)",
      },
      {
        title: "Crispy Spring Rolls (VEG)",
        price: "7.90",
        description:
          "Knusprig goldene Teigröllchen, raffiniert gefüllt mit saisonalem Gemüse und zartem indischem Frischkäse. Serviert mit einem aromatischen Duo aus Minze- und Tamarindensauce. (A, G, M, vegetarisch)",
      },
      {
        title: "Golden Mini Samosa (VEG)",
        price: "7.90",
        description:
          "Hausgemachte, knusprig frittierte Teigtaschen mit einer würzigen Füllung aus Kartoffeln und grünen Erbsen – serviert mit frischer Minzsauce und fruchtig-herber Tamarindensauce. (A, M, vegan)",
      },
      {
        title: "Alu Tikki (VEG)",
        price: "7.90",
        description:
          "Handgemachte Laibchen aus pürierten Kartoffeln und verschiedenen Kräutern, serviert mit Minze-, Knoblauch- und Tamarindesauce sowie leicht würzigen Kartoffelsträußeln für einen knusprigen Geschmack. (G, M, veg.)",
      },
      {
        title: "Crispy Chicken Patty",
        price: "7.50",
        description:
          "Knusprig gebackene Teigtaschen, herzhaft gefüllt mit fein gewürztem Hühnerfaschierten und zarten Erbsen. Dazu reichen wir eine frische Minzsauce und fruchtige Tamarindensauce. (A, M)",
      },
      {
        title: "Grilled Chicken Tikka",
        price: "7.90",
        description:
          "Zartes Hühnerfleisch, in aromatischen Gewürzen und Joghurt mariniert, traditionell gegrillt – saftig, rauchig und voll im Geschmack. Serviert mit einem erfrischenden Minze-Dip. (G, M)",
      },
      {
        title: "Papadam mit Mango-Chutney (VEG)",
        price: "3.50",
        description:
          "Knusprig-dünnes Linsenbrot, goldbraun geröstet – begleitet von fruchtig-pikantem Mango-Chutney. Ein klassischer Auftakt der indischen Küche.",
      },
    ],
  },
  {
    id: "spezialitaet-des-hauses",
    navStripBefore:
      "🇮🇳 Indische Hauptspeisen Indische Hauptspeisen Die Klassiker 🍔 Burger, Tacos, Snacks & Wraps",
    title: '"Spezialität des Hauses"',
    items: [
      {
        title: "Chicken 65 mit Basmatireis",
        price: "18.90",
        description:
          "Zartes Hühnerfleisch, kunstvoll mariniert und in einer raffinierten Gewürzkomposition schonend gegart - begleitet von duftendem Basmatireis. Eine südindische Spezialität mit Tiefe und Charakter. (G, M)",
      },
      {
        title: "Gegrillter Lachs in Kokos-Curry mit Basmatireis",
        price: "25.90",
        description:
          "Außen knusprig, innen zart - edles Lachsfilet vom Grill, serviert auf einer sämigen Curry-Sauce mit Kokosmilch und reifen Tomaten. Ein harmonisches Spiel aus feiner Würze und exotischer Frische. (D, G)",
      },
      {
        title: "Tandoori-Garnelen in Currysauce mit Basmatireis",
        price: "25.90",
        description:
          "Zart gegrillte Garnelen in einer aromatischen Tandoori-Gewürzmischung, serviert auf einer cremigen, fein abgeschmeckten Currysauce. (B, G, M)",
      },
      {
        title: "Tandoori Garnelen vom Grill mit Basmatireis",
        price: "25.50",
        description:
          "Saftig-zarte Garnelen, in einer aromatischen Joghurt-Gewürzmarinade veredelt und traditionell im Tandoori-Stil gegrillt. Serviert mit gerösteten Paprikastreifen und erfrischendem Minze-Chutney. (B, G, M)",
      },
      {
        title: "Lamm Curry mit Basmatireis",
        price: "26.90",
        description:
          "Zart geschmortes Lammfleisch in einem fein abgeschmeckten, aromatischen Curry - nach traditionell-mughalischer Art zubereitet. (M)",
      },
    ],
  },
  {
    id: "biryanis",
    title: "🍚 Unsere beliebten Biryanis",
    intro: [
      "Kumar's Royal Biryani:",
      "Inspiriert von den königlichen Rezepturen Hyderabads & Lucknows - exklusiv bei Hariogo. Verfeinert vom Starkoch Hr. Vijay Kumar zu einem aromatischen Meisterwerk voller Gewürze, Raffinesse und Liebe zum Detail. Ein königlicher Genuss! Leicht würziges Reisgericht mit Mandeln, Nüsse und vielen Gewürzen (G, M, N). Empfehlung mit Raita (Joghurt mit Gewürzen).",
    ],
    items: [
      {
        title: "Veg. Biryani (gegrilltes, saisonales Gemüse, veg.)",
        price: "20.90",
      },
      {
        title: "Chicken Biryani (mariniertes, gegrilltes Hühnerfleisch)",
        price: "21.90",
      },
      {
        title: "Lamm Biryani (zartes geschmortes Lammfleisch)",
        price: "28.50",
      },
      {
        title: "Tandoori Garnelen Biryani (knusprig gegrillte Garnelen)",
        price: "29.5",
      },
      {
        title: "Chicken Tikka Masala mit Basmatireis",
        price: "21.90",
        description:
          "Saftig gegrillte und zarte Hühnerbrust, in Joghurt und einer fein abgestimmten Gewürzkomposition mariniert – vollendet in einem cremig leicht-würzigen Masala-Curry. Serviert mit duftendem Basmatireis. (G, M)",
      },
      {
        title: "Butter Chicken mit Basmatireis",
        price: "18.90",
        description:
          "Zart gegrillte, marinierte Hühnerkeule in einer cremigen, buttrig-milden Currysauce mit feiner Tomatennote. Serviert mit duftendem Basmatireis. (G, M)",
      },
      {
        title: "Tandoori-Chicken mit Basmatireis",
        price: "18.90",
        description:
          "Zartes Hühnerfleisch, in aromatischem Joghurt-Gewürz-Marinade eingelegt und traditionell gegrillt. Serviert mit gerösteten Paprikastreifen, duftendem Basmatireis und erfrischendem Minze-Chutney. (G, M)",
      },
    ],
  },
  {
    id: "vegetarians",
    title: "For Vegetarians",
    items: [
      {
        title: "Kumar's Vegan Fusion mit Basmatireis",
        price: "18.50",
        description:
          "Schonend sautiertes, saisonales Gemüse in einem cremigen Kokos-Curry mit feiner Gewürznote. Serviert mit duftendem Basmatireis – pflanzlicher Genuss in seiner elegantesten Form. (vegan)",
      },
      {
        title: "Shahi Paneer mit Basmatireis",
        price: "18.90",
        description:
          "Indischer Frischkäse in einer sämig-cremigen Curry-Sauce mit milden Gewürzen – ein königlicher Klassiker der nordindischen Küche. Serviert mit duftendem Basmatireis. (G, M, vegetarisch)",
      },
      {
        title: "Dal Makhani mit Basmatireis",
        price: "17.50",
        description:
          "Langsam geschmorte schwarze Linsen, verfeinert mit Butter, Sahne und ausgewählten Gewürzen – cremig, aromatisch und tief im Geschmack. Ein traditionsreicher Klassiker der nordindischen Küche, serviert mit duftendem Basmatireis. (G, M, vegetarisch)",
      },
      {
        title: "Palak Paneer mit Basmatireis",
        price: "18.90",
        description:
          "Zarter, indischer Frischkäse in einer sämigen Spinatcreme, fein gewürzt und harmonisch abgeschmeckt. Serviert mit duftendem Basmatireis. (G, M, vegetarisch)",
      },
    ],
  },
  {
    id: "burger-snacks",
    title: "🍔 Burger, Tacos, Snacks & Wraps",
    items: [
      {
        title: "Chicken Burger mit Fries",
        price: "16.90",
        description:
          "Saftig gegrilltes Hühner-Patty aus frisch faschiertem Hühnerfleisch mit feiner Gewürzmischung, serviert im Burger-Bun mit knackigem Salat, Tomaten, Gurken, roten Zwiebeln und zart schmelzendem Cheddar. Abgerundet mit unserer Haus-Burgersauce. Dazu servieren wir knusprige Fries. (A, G, M)",
      },
      {
        title: "Mini-Smash Beef Burger mit Fries",
        price: "16.90",
        description:
          "Frisch gepresstes Rindfleisch-Patty, knusprig angebraten und serviert im soften Bun - mit knackigem Salat, Tomaten, Gurken, roten Zwiebeln und geschmolzenem Cheddar. Verfeinert mit unserer würzigen Haus-Burgersauce. Dazu knusprige Fries. (A, G, M)",
      },
      {
        title: "Hari's Club Sandwich",
        price: "14.90",
        description:
          "Ein Klassiker neu interpretiert: Zart gegrilltes Hühnerfleisch, knuspriger Toast, frischer Salat, Tomaten, Gurken und ein fein gegartes Ei – liebevoll geschichtet, serviert mit Nachos und hausgemachter Sauce. (A, C, G)",
      },
      {
        title: "Chicken Tacos 3x",
        price: "14.90",
        description:
          "Würzig mariniertes Hühnerfleisch in soften Tacos, gefüllt mit cremigen Bohnen, Paprika, Tomaten und roten Zwiebeln – verfeinert mit einer aromatischen Masala-Sauce. (A, G, M)",
      },
      {
        title: "Vegan Burger mit Fries (vegan)",
        price: "15.50",
        description:
          "Knuspriges, hausgemachtes Kartoffel-Patty im Burger-Bun, kombiniert mit frischem Salat, Tomaten, Gurken und roten Zwiebeln. Abgerundet mit einem aromatischen Minze-Tamarinden Dip. Serviert mit knusprigen Fries. (A, M, vegan)",
      },
      {
        title: "Avocado Tacos 3x (vegetarisch)",
        price: "14.90",
        description:
          "Frische Avocado, geröstete Paprika, rote Zwiebeln und cremige Bohnen in soften Tacos – abgerundet mit einem aromatischen Avocado-Minze-Chutney. Ein veganer Genuss voller Farbe und Geschmack. (A, G, M, vegetarisch)",
      },
      {
        title: "Original Fries (vegan, glutenfrei)",
        price: "5.50",
        description:
          "Knusprig goldene Kartoffelpommes – außen kross, innen weich. Serviert mit klassischem Ketchup. (vegan, glutenfrei)",
      },
    ],
  },
  {
    id: "dips",
    title: "🥣 Our Homemade Dips",
    items: [
      { title: "Minze Dip (vegan)", price: "1.20" },
      { title: "Tamarinde Dip (vegan)", price: "1.20" },
      { title: "Mango Dip (G, M)", price: "1.20" },
      { title: "Ketchup (G, M)", price: "0.70" },
      { title: "Tikkan Masala Dip (G, M)", price: "1.50" },
      { title: "Garlic Dip (G, M)", price: "1.20" },
      { title: "Hot Chili Dip (G, M)", price: "1.00" },
      { title: "Mayo (G, M)", price: "1.00" },
    ],
  },
  {
    id: "fisch-meerestiere",
    navStripBefore:
      "🦐 Fisch & Meeresfrüchte 🍗 Indische Klassiker mit Lamm 🍄 Veggie - Beilagen / Desserts",
    title: "Fisch & Meeresfrüchte",
    items: [
      {
        title: "Gegrillte Riesengarnelen mit Basmatireis",
        price: "29.50",
        description:
          "Saftig gegrillte Riesengarnelen, in einer aromatischen Joghurt-Gewürzmarinade veredelt und traditionell im Tandoori-Stil zubereitet. Serviert mit gerösteten Paprikastreifen und erfrischendem Minze-Chutney. (B, G, M)",
      },
      {
        title: "Fisch Curry mit Basmatireis",
        price: "26.90",
        description:
          "Seelachsfilet in einer cremigen, fein abgestimmten Kokos-Currysauce mit Curryblättern und Senfsaat – ein Genuss von der Küste. (D, M)",
      },
      {
        title: "Lachs Tikka Masala mit Basmatireis",
        price: "26.90",
        description:
          "Zart gegrillte Lachsfiletstreifen in einer cremig leicht-würzigen Masala-Sauce mit feiner Tomatennote. Serviert mit duftendem Basmatireis. (D, G, M)",
      },
      {
        title: "Lamm Tikka Masala mit Basmatireis",
        price: "28.90",
        description:
          "Zart gegrilltes Lammfleisch, in einer fein abgestimmten Gewürzkomposition mariniert – vollendet in einem cremig leicht-würzigen Masala-Curry. Serviert mit duftendem Basmatireis. (G, M)",
      },
      {
        title: "Lamm Korma mit Basmatireis",
        price: "28.90",
        description:
          "Zart geschmortes Lammfleisch in einer cremigen Cashewnuss-Sauce mit milder Würze, verfeinert mit feinem Safran. Ein Gericht wie aus 1001 Nacht. (N, M)",
      },
    ],
  },
  {
    id: "kleine-gerichte",
    hideHeading: true,
    title: "",
    items: [
      {
        title: "Aloo Palak",
        price: "6.90",
        description: "Kartoffeln und Spinat in einer milden Currysauce. (M)",
      },
      {
        title: "Tadka Dal",
        price: "6.50",
        description: "Gelbe Linsen mit Kreuzkümmel, Koriander und Zwiebeln. (veg.)",
      },
      {
        title: "Raita",
        price: "3.90",
        description: "Joghurt mit Gewürzen, Gurken und Tomaten. (M)",
      },
      {
        title: "Mango Lassi",
        price: "4.90",
        description: "Indisches Joghurt-Getränk mit Mango. (M)",
      },
      {
        title: "Gajjar Ka Halwa",
        price: "5.50",
        description: "Indischer Karotten-Pudding mit Kardamom und Nüssen. (M, N)",
      },
    ],
  },
  {
    id: "beilagen",
    title: "BEILAGEN NACHSPEISEN",
    subtitle: "Frische und Qualität aus der Region",
    items: [
      {
        title: "Reis",
        price: "3.00",
        description: "Aromatischer, locker gedämpfter Langkorn-Basmati-Reis ein Klassiker der indischen Küche.",
      },
      {
        title: "Naan (Fladenbrot)",
        price: "3.50",
        description:
          "Im Tandoor gebackenes, weiches Fladenbrot ideal als Begleiter zu Currys, Daal und Tandoori-Spezialitäten. (A, G)",
      },
      {
        title: "Paratha",
        price: "3.50",
        description:
          "Buttrig-blättriges Fladenbrot, goldbraun gebacken herzhaft im Geschmack und wunderbar sättigend. (A. G)",
      },
      {
        title: "Roti",
        price: "2.50",
        description:
          "Dünnes Fladenbrot aus feinem Weizenvollkornmehl leicht, bekömmlich und traditionell zubereitet. (A. G)",
      },
      {
        title: "Raita",
        price: "3.00",
        description:
          "Cremiger Joghurt mit aromatischen Gewürzen und frischen Kräutern ein erfrischender Begleiter zu würzigen und scharfen Gerichten wie Biryani. (A. G)",
      },
    ],
  },
  {
    id: "salate",
    title: "SALATE",
    items: [
      {
        title: "Blattsalat mit Mango-Clementin Dressing",
        price: "9.90",
        description:
          "Knackige Blattsalate, veredelt mit unserem hausgemachten Mango-Clementinen-Dressing, frischem Granatapfel, edlen Walnüssen und nährstoffreichen Chia-Samen. (G. M, N)",
      },
      {
        title: "Hari's Sommer Salat",
        price: "13.90",
        description:
          "Knackige Blattsalate, veredelt mit unserem hausgemachten Mango-Clementinen-Dressing, frischem Granatapfel, edlen Walnüssen und nährstoffreichen Chia-Samen. (G. M, N)",
      },
      {
        title: "Backhendlsalat",
        price: "13.50",
        description:
          "Knusprig goldbraun gebackenes Hühnerfleisch, serviert auf einem frischen, bunt gemischten Salatbouquet. (A, C, G)",
      },
      {
        title: "Caesar Salad",
        price: "13.90",
        description:
          "Zart gegrilltes Hühnerfleisch auf knackigem Salat, verfeinert mit frisch geriebenem Parmesan. goldbraunen Croutons und saftigen Tomaten. (A. G. M)",
      },
      {
        title: "Griechischer Bauernsalat",
        price: "11.90",
        description:
          "Frische Gurken, Paprika, Tomaten und Zwiebeln, kombiniert mit aromatischen Oliven und cremigem Feta ein mediterraner Klassiker. (G)",
      },
      {
        title: "Kartoffelsalat",
        price: "4.50",
        description:
          "Fein marinierte Kartoffeln mit Zwiebeln, Essig und einem Hauch Senf -klassisch und aromatisch. (M)",
      },
    ],
  },
  {
    id: "nachspeisen",
    title: "NACHSPEISEN",
    items: [
      {
        title: "Pistazientiramisu",
        price: "8.90",
        description:
          "Unser Highlight und Publikumsliebling: Cremiges Tiramisu verfeinert mit einer edlen Pistazien-Creme himmlisch zart und unwiderstehlich. (A. C. G. H)",
      },
      {
        title: "Indischer Milchreis (Kheer)",
        price: "6.90",
        description:
          "Cremiger Milchreis sanft verfeinert mit duftendem Kardamom und einer dezenten Süße. Ein klassisches Dessert der indischen Küche. (G)",
      },
      {
        title: "Cheesecake with Flavour",
        price: "7.00",
        description:
          "Cremiger Cheesecake mit feinem Keksboden wahlweise verfeinert mit Schokolade, Salted Caramel, Toffee oder fruchtigem Beeren-Topping. (A, C, G)",
      },
      {
        title: "Eis-Kaffee-Dessert",
        price: "7.50",
        description:
          "Feincremiges Kaffee-Eis trifft auf einen zarten Schokoboden und wird mit einem Hauch Vanille verfeinert. Abgerundet mit knusprigem Schokoladencrunch und edlen Schokoladengeschmack -ein himmlisches Dessert für alle Kaffee-Liebhaber. (A,C,G,H)",
      },
      {
        title: "Gajar ka Halwa Indischer Karottenpudding",
        price: "7.90",
        description:
          "langsam in Milch und Ghee gekocht, verfeinert mit Kardamom. Mandeln & Pistazien. Hausgemacht, warm serviert dazu Vanilleeis und Rosensirup. (G, H, C)",
      },
      {
        title: "Lava-cake mit Pistazien-Füllung",
        price: "7.50",
        description:
          "Feines Schokoladensoufflé mit warmem, flüssigem Kern und edler Pistazienfüllung außen zart gebacken, innen himmlisch schmelzend. (A, C, F, G, H) +1 Kugel Vanilleeis auf Wunsch 1,00",
      },
      {
        title: "Lava-cake",
        price: "7.50",
        description:
          "Zartes Schokoladensoufflé mit einem warmen, flüssigen Kern aus dunkler Schokolade ein unwiderstehlicher Genuss für Schokoladenliebhaber. (A, C, F, G, H) + 1 Kugel Vanilleeis auf Wunsch 1,00",
      },
      {
        title: "Rosenduft-Coupé",
        price: "6.50",
        description:
          "Feines Vanille- und Erdbeereis, veredelt mit duftendem Rosensirup -orientalisch inspiriert und herrlich erfrischend. (G. H. C)",
      },
    ],
  },
];

/**
 * Footer + Allergene + Markenzeile exakt wie auf der Quellseite (inkl. !Allergene:A ohne Leerzeichen).
 */
export const SPEISEN_FOOTER_AND_ALLERGEN =
  "Wir legen großen Wert auf regionale Zutaten und bereiten unsere Speisen frisch für Sie zu. Unsere Gerichte werden mit viel Liebe und Sorgfalt zubereitet, um Ihnen das Beste auf den Teller zu bringen.Bei Hari’s Bistro wird jede Speise frisch und individuell zubereitet. Bitte planen Sie ausreichend Zeit für Ihren Restaurantbesuch ein. Selbstverständlich können Sie den Schärfegrad Ihres Gerichts selbst bestimmen, von mild bis indisch scharf. Teilen Sie uns einfach bei der Bestellung Ihre Wünsche mit.Unsere erfahrenen Köche setzen alles daran, Ihre Vorstellungen perfekt umzusetzen.Wir freuen uns auf Ihren Besuch und sind stets bestrebt, Ihnen ein unvergessliches kulinarisches Erlebnis zu bereiten.Alle Preise sind in Euro angegeben und verstehen sich inklusive der gesetzlich vorgeschriebenen Mehrwertsteuer.Wir möchten höflichst darauf hinweisen, dass wir pro Person € 1,50 Gedeck berechnen.Vielen Dank für Ihr Verständnis und Ihre Unterstützung für lokale Produzenten!Allergene:A Glutenhaltiges Getreide und daraus gewonneneErzeugnisseB Krebstiere und daraus gewonnene ErzeugnisseC Eier von Geflügel und daraus gewonnene ErzeugnisseD Fisch und daraus gewonnene Erzeugnisse (außer Gelatine)E Erdnüsse und daraus gewonnene ErzeugnisseFSojabohnen und daraus gewonnene ErzeugnisseGMilch von Säugetieren und MilcherzeugnisseH-Schalenfrüchte und daraus gewonnene ErzeugnisseL Sellerie und daraus gewonnene ErzeugnisseM Senf und daraus gewonnene ErzeugnisseN-Sesamsamen und daraus gewonnene ErzeugnisseO Schwefeldioxid und SulfitePLupinen und daraus gewonnene ErzeugnisseR – Weichtiere und daraus gewonnene ErzeugnisseHari 1090BY KUMAR’S KITCHEN" as const;

export const SPEISEN_GUTSCHEIN = {
  title: "🎁 Genuss verschenken – mit einem Gutschein von Hari1090",
  body: "Ein Gutschein von Hari1090 ist mehr als ein Geschenk – es ist eine Einladung zu einem besonderen Moment.",
  href: "https://hari1090.com/gutscheine-hari1090/",
  linkLabel: "Gutscheine",
} as const;
