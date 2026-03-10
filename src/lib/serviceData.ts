export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  description: string;
  dlaKogo: string;
  coObejmuje: string[];
  faq: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "hale-magazynowe",
    title: "Hale magazynowe",
    metaTitle: "Hale magazynowe stalowe – projekt i budowa | Solidne Wykonawstwo",
    metaDescription: "Budowa hal magazynowych stalowych. Kompleksowa realizacja: dokumentacja, konstrukcja, obudowa, montaż. Bezpłatna wycena.",
    h1: "Hale magazynowe stalowe – projekt, produkcja, montaż",
    description: "Projektujemy i budujemy hale magazynowe o dowolnych wymiarach. Nasze konstrukcje zapewniają dużą przestrzeń użytkową, trwałość i szybki czas realizacji.",
    dlaKogo: "Dla firm logistycznych, produkcyjnych, handlowych oraz rolniczych potrzebujących nowoczesnej przestrzeni magazynowej.",
    coObejmuje: [
      "Dokumentacja architektoniczna i techniczna",
      "Produkcja konstrukcji stalowej",
      "Obudowa płytami warstwowymi lub blachą trapezową",
      "Montaż bram przemysłowych",
      "Fundamenty i posadzki przemysłowe",
    ],
    faq: [
      { q: "Jakie wymiary hali magazynowej są standardowe?", a: "Najczęściej realizujemy hale o szerokości 12-36 m, długości 24-100 m i wysokości 6-12 m. Wymiary dobieramy indywidualnie." },
      { q: "Jaki jest czas budowy hali magazynowej?", a: "Standardowy czas realizacji to 10-16 tygodni od podpisania umowy." },
      { q: "Czy można rozbudować halę w przyszłości?", a: "Tak, projektujemy konstrukcje z możliwością rozbudowy w jednym lub obu kierunkach." },
      { q: "Jakie posadzki stosujecie?", a: "Wykonujemy posadzki betonowe zbrojone, utwardzane powierzchniowo lub żywiczne." },
      { q: "Czy hala wymaga pozwolenia na budowę?", a: "Tak, dla obiektów powyżej 35 m² wymagane jest pozwolenie na budowę. Pomagamy w przygotowaniu dokumentacji." },
    ],
  },
  {
    slug: "hale-produkcyjne",
    title: "Hale produkcyjne",
    metaTitle: "Hale produkcyjne stalowe – budowa pod klucz | Solidne Wykonawstwo",
    metaDescription: "Budowa hal produkcyjnych stalowych. Od dokumentacji po montaż. Własne ekipy, szybka wycena. Podkarpackie, lubelskie, małopolskie.",
    h1: "Hale produkcyjne stalowe – realizacja pod klucz",
    description: "Hale produkcyjne wymagają specjalistycznego podejścia do wentylacji, oświetlenia i obciążeń. Nasze konstrukcje spełniają najwyższe standardy przemysłowe.",
    dlaKogo: "Dla przedsiębiorstw produkcyjnych, zakładów przetwórczych i firm potrzebujących specjalistycznej przestrzeni do produkcji.",
    coObejmuje: [
      "Projekt dostosowany do procesów produkcyjnych",
      "Konstrukcja stalowa o zwiększonej nośności",
      "Systemy wentylacji i doświetlenia",
      "Obudowa z izolacją termiczną i akustyczną",
      "Instalacje elektryczne i sanitarne",
    ],
    faq: [
      { q: "Jakie obciążenia wytrzymuje konstrukcja?", a: "Projektujemy konstrukcje pod indywidualne obciążenia, w tym suwnice, podwieszane instalacje i maszyny." },
      { q: "Czy zapewniacie wentylację hali?", a: "Tak, uwzględniamy systemy wentylacji mechanicznej i grawitacyjnej w projekcie." },
      { q: "Jaka izolacja jest stosowana?", a: "Stosujemy płyty warstwowe PIR/PUR o grubości od 60 do 200 mm w zależności od wymagań." },
      { q: "Czy realizujecie instalacje wewnętrzne?", a: "Tak, w ramach realizacji kompleksowej koordynujemy prace instalacyjne." },
      { q: "Jaka jest trwałość hali produkcyjnej?", a: "Przy prawidłowej konserwacji hala stalowa służy przez 30-50 lat." },
    ],
  },
  {
    slug: "hale-rolnicze",
    title: "Hale rolnicze",
    metaTitle: "Hale rolnicze stalowe – budowa dla rolników | Solidne Wykonawstwo",
    metaDescription: "Budowa hal rolniczych: magazyny zboża, obory, kurniki, budynki inwentarskie. Szybka realizacja i bezpłatna wycena.",
    h1: "Hale rolnicze – magazyny, obory, budynki inwentarskie",
    description: "Specjalizujemy się w budowie obiektów dla rolnictwa. Nasze hale rolnicze są ekonomiczne, funkcjonalne i dostosowane do specyfiki gospodarstw.",
    dlaKogo: "Dla rolników, gospodarstw, hodowców i firm z sektora rolno-spożywczego.",
    coObejmuje: [
      "Magazyny na zboże, pasze i maszyny",
      "Budynki inwentarskie (obory, kurniki)",
      "Wentylacja dostosowana do hodowli",
      "Posadzki antypoślizgowe",
      "Systemy odprowadzania ścieków",
    ],
    faq: [
      { q: "Czy realizujecie obory i kurniki?", a: "Tak, budujemy budynki inwentarskie z odpowiednią wentylacją i izolacją." },
      { q: "Jaki jest koszt hali rolniczej?", a: "Koszt zależy od wymiarów i wyposażenia. Wstępna wycena jest bezpłatna." },
      { q: "Czy można uzyskać dotacje na budowę?", a: "Wiele programów unijnych i krajowych wspiera inwestycje rolnicze. Pomagamy z dokumentacją do wniosków." },
      { q: "Jakie fundamenty są potrzebne?", a: "Typ fundamentów zależy od warunków gruntowych i obciążeń – dobieramy je indywidualnie." },
      { q: "Czy hala nadaje się do przechowywania maszyn?", a: "Tak, projektujemy hale z szerokim wjazdem i wysokością dostosowaną do kombajnów." },
    ],
  },
  {
    slug: "wiaty-stalowe",
    title: "Wiaty stalowe",
    metaTitle: "Wiaty stalowe – projekt i montaż | Solidne Wykonawstwo",
    metaDescription: "Budowa wiat stalowych: magazynowe, garażowe, na maszyny. Szybka realizacja, konkurencyjna cena. Bezpłatna wycena.",
    h1: "Wiaty stalowe – lekkie zadaszenia na każdą potrzebę",
    description: "Wiaty stalowe to ekonomiczne rozwiązanie do ochrony maszyn, pojazdów i materiałów przed warunkami atmosferycznymi.",
    dlaKogo: "Dla firm, rolników i osób prywatnych potrzebujących lekkiego zadaszenia lub otwartego magazynu.",
    coObejmuje: [
      "Wiaty jednonawowe i wielonawowe",
      "Pokrycie blachą trapezową lub poliwęglanem",
      "Rynny i odprowadzenie wody deszczowej",
      "Opcjonalne obudowy boczne",
      "Montaż na przygotowanych fundamentach",
    ],
    faq: [
      { q: "Czy wiata wymaga pozwolenia na budowę?", a: "Wiaty do 35 m² zazwyczaj wymagają jedynie zgłoszenia. Większe – pozwolenia na budowę." },
      { q: "Jaki jest czas montażu wiaty?", a: "Montaż standardowej wiaty trwa 3-7 dni roboczych." },
      { q: "Jakie jest pokrycie dachowe?", a: "Najczęściej stosujemy blachę trapezową T-35 lub poliwęglan komorowy." },
      { q: "Czy wiatę można dostawić do istniejącego budynku?", a: "Tak, projektujemy wiaty dostawne z odpowiednim połączeniem do ściany istniejącego obiektu." },
      { q: "Jaka jest trwałość wiaty stalowej?", a: "Ocynkowana konstrukcja służy przez 25-40 lat bez konieczności malowania." },
    ],
  },
  {
    slug: "chlodnie",
    title: "Chłodnie / obiekty izolowane",
    metaTitle: "Chłodnie stalowe i obiekty izolowane | Solidne Wykonawstwo",
    metaDescription: "Budowa chłodni i obiektów izolowanych termicznie. Płyty warstwowe PIR/PUR, systemy chłodnicze. Bezpłatna wycena.",
    h1: "Chłodnie i obiekty izolowane termicznie",
    description: "Realizujemy obiekty o podwyższonej izolacyjności termicznej: chłodnie, mroźnie, magazyny z kontrolą temperatury.",
    dlaKogo: "Dla firm spożywczych, logistycznych, farmaceutycznych i wszystkich wymagających kontroli temperatury.",
    coObejmuje: [
      "Płyty warstwowe o wysokiej izolacyjności (PIR/PUR 100-200 mm)",
      "Drzwi i bramy chłodnicze",
      "Posadzki izolowane termicznie",
      "Koordynacja instalacji chłodniczych",
      "Śluzy załadunkowe",
    ],
    faq: [
      { q: "Jaką temperaturę można utrzymać?", a: "W zależności od izolacji: od +2°C (chłodnia) do -25°C (mroźnia)." },
      { q: "Jakie płyty warstwowe stosujecie?", a: "Stosujemy płyty PIR i PUR o grubości 100-200 mm, współczynnik U od 0.20 W/m²K." },
      { q: "Czy montujecie systemy chłodnicze?", a: "Koordynujemy prace z certyfikowanymi instalatorami systemów chłodniczych." },
      { q: "Jaka jest energooszczędność obiektu?", a: "Wysoka izolacyjność płyt warstwowych znacząco redukuje koszty utrzymania temperatury." },
      { q: "Czy realizujecie śluzy załadunkowe?", a: "Tak, projektujemy i montujemy śluzy dostosowane do pojazdów dostawczych." },
    ],
  },
  {
    slug: "carporty",
    title: "Carporty / zadaszenia",
    metaTitle: "Carporty stalowe i zadaszenia | Solidne Wykonawstwo",
    metaDescription: "Budowa carportów stalowych i zadaszeń. Ochrona pojazdów i maszyn. Szybki montaż, konkurencyjna cena. Bezpłatna wycena.",
    h1: "Carporty i zadaszenia stalowe",
    description: "Carporty stalowe to eleganckie i trwałe rozwiązanie do ochrony pojazdów, maszyn i przestrzeni rekreacyjnych.",
    dlaKogo: "Dla osób prywatnych, firm, hoteli i obiektów użyteczności publicznej.",
    coObejmuje: [
      "Carporty jedno- i wielostanowiskowe",
      "Zadaszenia tarasów i stref wejściowych",
      "Konstrukcje z profili zamkniętych",
      "Pokrycie poliwęglanem lub blachą",
      "Montaż na kotwach chemicznych",
    ],
    faq: [
      { q: "Na ile pojazdów można zbudować carport?", a: "Projektujemy carporty od 1 do kilkudziesięciu stanowisk." },
      { q: "Czy carport wymaga fundamentów?", a: "Zazwyczaj wystarczą punktowe stopy fundamentowe lub kotwy chemiczne." },
      { q: "Jaki jest czas realizacji?", a: "Carport standardowy realizujemy w 2-4 tygodnie." },
      { q: "Czy można dobrać kolor konstrukcji?", a: "Konstrukcje są ocynkowane. Za dodatkową opłatą możemy je pomalować natryskowo lub proszkowo w dowolnym kolorze RAL." },
      { q: "Czy carport wymaga pozwolenia?", a: "Carporty do 35 m² zazwyczaj wymagają jedynie zgłoszenia budowlanego." },
    ],
  },
  {
    slug: "dokumentacja",
    title: "Dokumentacja architektoniczna i techniczna",
    metaTitle: "Dokumentacja projektowa hal stalowych | Solidne Wykonawstwo",
    metaDescription: "Dokumentacja architektoniczna i techniczna hal stalowych. Projekty budowlane, wykonawcze, branżowe. Bezpłatna wycena.",
    h1: "Dokumentacja architektoniczna i techniczna hal stalowych",
    description: "Przygotowujemy kompletną dokumentację niezbędną do uzyskania pozwolenia na budowę oraz realizacji inwestycji.",
    dlaKogo: "Dla inwestorów planujących budowę hali, którzy potrzebują kompletnej dokumentacji projektowej.",
    coObejmuje: [
      "Projekt architektoniczny",
      "Projekt konstrukcyjny",
      "Projekty branżowe (instalacje)",
      "Mapa do celów projektowych",
      "Dokumentacja do pozwolenia na budowę",
    ],
    faq: [
      { q: "Jaki jest czas przygotowania dokumentacji?", a: "Standardowo 3-6 tygodni w zależności od złożoności projektu." },
      { q: "Czy dokumentacja obejmuje instalacje?", a: "Tak, przygotowujemy projekty instalacji elektrycznych, wod-kan, wentylacji i ogrzewania." },
      { q: "Czy pomagacie z pozwoleniem na budowę?", a: "Tak, przygotowujemy kompletny wniosek o pozwolenie na budowę." },
      { q: "Czy projekt można zrealizować z innym wykonawcą?", a: "Tak, dokumentacja jest własnością inwestora i może być wykorzystana do realizacji z dowolnym wykonawcą." },
      { q: "Jakie normy stosujecie?", a: "Projektujemy zgodnie z Eurokodem 3 oraz obowiązującymi przepisami budowlanymi." },
    ],
  },
];
