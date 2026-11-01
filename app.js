/* EDYCJA TREŚCI
Każdy dział ma sections: [ ... ]. Dodawaj dowolną liczbę obiektów, w dowolnej kolejności.
type: 'banner' - zdjęcie na całą szerokość działu, bez tekstu i akapitów.
type: 'lr-text' - nagłówek po lewej, tekst po prawej.
type: 'text' - nagłówek z tekstem.
type: 'img-left' - zdjęcie po lewej, tekst po prawej.
type: 'img-right' - tekst po lewej, zdjęcie po prawej.
type: 'button-right' - przycisk z tekstem.
type: 'divider' - pozioma linia oddzielająca fragmenty.
heading jest opcjonalny. body: tekst lub tablica akapitów.
Przykład fragmentu ze zdjęciem:
{
    type: 'img-left',
    image: 'assets/industry.jpg',
    alt: 'Zakład energetyczny',
    heading: 'Nasz zakład',
    body: ['Pierwszy akapit.', 'Drugi akapit.']
},
Przykład fragmentu z przyciskiem:
{
    type: 'button-right',
    heading: 'Warunki korzystania z przyłącza przemysłowego',
    body: 'Przejdź aby zobaczyć warunki',
    buttonText: 'przyłącza przemysłowego.',
    href: '#eulakomoratransformatora'
},
*/
const divisions = {
  osobowe: {
    label: "01",
    title: "Samochody osobowe",
    sections: [
      {
        type: "banner",
        image: "assets/articleart/osobowy.title.jpg",
        alt: "Osobówki",
      },
      {
        type: "lr-text",
        heading: "Różne oczekiwania, różne propozycje.",
        body: "Stale rozwijana oferta AsperGenerator jak na razie nie jest zbyt pokaźna, ale pracujemy nad jej poszerzeniem, optymalizacją komfortu, poprawą bezpieczeństwa i zwiększeniem bezawaryjnjości aby jak najwięcej osób mogło się cieszyć ze swojego wymarzonego samochodu.",
      },
      { type: "divider" },
      {
        type: "img-right",
        image: "assets/articleart/osobowy.kragaut.1.jpg",
        alt: "Samochód w terenie.",
        heading: "Krągaut",
        body: "Nieco krągły samochód na wysokim poziomie, albo po prostu mistrz szosy. Dla tych, którzy cenią sobie wysoki poziom w samochodzie jak i dla tych, którzy mają niezbyt równą drogę. Może i nie jest terenówką, ale za to komfort to jego drugie imię.",
      },
      {
        type: "img-right",
        image: "assets/articleart/osobowy.kragaut.2.jpg",
        alt: "Wnętrze krągauta.",
        body: "Wnętrze samochodu jest bardzo wygodne, a ogromne szyby zapewniają niesamowite widoki.",
      },
      { type: "divider" },
      {
        type: "img-left",
        image: "assets/articleart/osobowy.wolowiec.1.jpg",
        alt: "Samochód w mieście.",
        heading: "Wołowiec",
        body: "Zbliża się jego premiera. Średniobudżetowy i niewielki, ale dobrze wyposażony samochód do codziennego miejskiego życia. ",
      },
      {
        type: "img-left",
        image: "assets/articleart/osobowy.wolowiec.2.jpg",
        alt: "Wnętrze wołowca.",
        body: "Dobrze wyposażone i wszechstronne miejsce wewnątrz jest znakomitym wyborem dla tych, którzy nie chcą za dużo wydać a mieć wszystko, co powinna posiadać osobówka. ",
      },
      {
        type: "img-left",
        image: "assets/articleart/osobowy.wolowiec.3.jpg",
        alt: "Big Bagażnik.",
        body: "Mimo niewielkich rozmiarów, bagażnik jest nieproporcjonalnie pojemny. Poza ogromnymi zakupami, zmieści się tam wiele innych rzeczy. ",
      },
    ],
  },
  lekkie: {
    label: "02",
    title: "Samochody użytkowe lekkie",
    sections: [
      {
        type: "banner",
        image: "assets/articleart/lekkie.title.jpg",
        alt: "Dostawczak",
      },
      {
        type: "img-right",
        image: "assets/articleart/lekkie.intro.jpg",
        alt: "Załadowany krofter.",
        heading: "Transport na własną rękę.",
        body: "Niewielkie, ale nie wymagają dodatkowych uprawnień. Przewiozą meble, kartony i wiele więcej.",
      },
      { type: "divider" },
      {
        type: "img-left",
        image: "assets/articleart/lekkie.krofter.1.jpg",
        alt: "Krofter na parkingu.",
        heading: "Krofter",
        body: "Bogato wyposażony, trzy miejsca siedzące, oświetlenie przestrzeni bagażowej, a nawet wysuwany razem z drzwiami schodek. Posiada wysuwane światła na masce.",
      },
      {
        type: "img-left",
        image: "assets/articleart/lekkie.krofter.2.jpg",
        alt: "Wnętrze kroftera.",
        body: "Luka bagażowa jest bardzo wysoka, oświetlenie pozwoli na pracowanie w nocy, łatwiejsze odczytywanie etykiet, czy szybsze odnalezienie igły w stogu siana. Można nawet zrobić w niej mobuilne biuro, czego się sami raz podjęliśmy.",
      },
    ],
  },
  ciezkie: {
    label: "03",
    title: "Samochody użytkowe ciężkie",
    sections: [
      {
        type: "img-left",
        image: "assets/articleart/calka.1.jpg",
        alt: "Całka stoi i się ładnie prezentuje",
        heading: "Całka.",
        body: "Duża moc i adaptacyjny system skręcania. Prosty i skuteczny mechanizm sprzęgu siodłowego zapewnia szybkie podczepianie naczep. System steer–by–wire dostosowuje kąty skręcenia kół, zależnie od prędkości pojazdu, co ułatwia manewry na placu i poprawia precyzje przy wyższych prędkościach.",
      },
      {
        type: "img-right",
        image: "assets/articleart/calka.2.jpg",
        alt: "Kabina całki",
        body: "Kabina przestrzenna, za to bez łóżka, czy mikrofalówki. Nie jest to ciężarówka na bardzo dalekie dystanse, jednak jej komfortowe wnętrze pozwala na siedzenie długimi godzinami.",
      },
      { type: "divider" },
      {
        type: "img-right",
        image: "assets/atricleart/romeo.1.jpg",
        alt: "Roman",
        heading: "Romeo.",
        body: "Jednolity pojazd ciężarowy. Stworzony z myślą o bezpieczeństwie ładunku, jak i personalizacji wnętrza. Jest wypozażony w udoskonalony system steer–by–wire, czyli adaptacyjny regulator skrętu kół, co ułatwia manewrowanie w miejscu, oraz poprawia precyzję przy jeździe w większych prędkościach.",
      },
      {
        type: "button-right",
        body: "Romeo posiada zmodyfikowaną wersję EULA.",
        buttonText: "EULA Romeo",
        href: "#eularomeo",
      },
    ],
  },
  techniczny: {
    label: "04",
    title: "Pojazdy i sprzęt techniczny",
    sections: [
      {
        type: "text",
        heading: "Strona w budowie.",
      },
      {
        type: "banner",
        image: "assets/budowa.gif",
      },
    ],
  },
  drony: {
    label: "05",
    title: "Drony",
    sections: [
      {
        type: "text",
        heading: "Strona w budowie.",
      },
      {
        type: "banner",
        image: "assets/budowa.gif",
      },
    ],
  },
  komoratransformatora: {
    label: "06",
    title: "Komora transformatora",
    sections: [
      {
        type: "banner",
        image: "assets/articleart/komora.title.jpg",
        alt: "Komora",
      },
      {
        type: "text",
        heading: "Przede wszystkim czysty Napoligrad.",
        body: "Cała energia zasilająca Napoligrad pochodzi z czystego źródła jakim jest elektrownia atomowa operowana przez AsperGenerator.",
      },
      {
        type: "img-left",
        image: "assets/articleart/komora.columbus.jpg",
        alt: "Komora Transformatora w zakładzie Columbus.",
        body: "Komora Transformatora dostarcza energię zawsze kiedy to możliwe - gdy jest moc, masz moc.\n Na wypadek przerw, zaprzyjaźniona firma Columbus oferuje magazyny energii, które dla ciebie podłączymy.",
      },
      {
        type: "img-left",
        image: "assets/articleart/komora.wymiary.jpg",
        alt: "Graficzne przedstawienie wymiarów Komory Transformatora",
        body: "Komora Transformatora nie zajmuje dużo miejsca, jej wymiary to 6x18. Wyposażona jest w zdalnie otwierane drzwi oraz wysuwaną kamerę, która daje podgląd na frontową część obiektu, aby zagwarantować bezpieczeństwo i sprawne działanie.",
      },
      {
        type: "button-right",
        body: "Zobacz pełne warunki korzystania na stronie",
        buttonText: "EULA Komory Transformatora",
        href: "#eulakomoratransformatora",
      },
      {
        type: "banner",
        image: "assets/pekaboo.webp",
      },
    ],
  },
  uslugi: {
    label: "07",
    title: "Usługi",
    sections: [
      {
        type: "text",
        heading: "Strona nieukończona.",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Podnoszenie dźwigiem.",
        body: "AsperGenerator posiada w ofercie dźwig do kupienia. Jeśli nie zamierzasz kupować dźwigu, możesz go wynająć razem z operatorem.",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Transport ciężki.",
        body: "Opracowujemy transportery SPMT. Zanim będą dostępne, możesz zamówić usługę transportu przy ich użyciu. Przyczynisz się tym do szybszego ich ukończenia i wydania.",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Bezpieczne miejsce na serwer.",
        body: "Oferujemy w naszym bunkrze w Napoligradzie miejsce na wynajem. Wypozażone jest ono w szybkie łącze internetowe, zasilanie rezerwowe, bezpieczny system przeciwpożarowy oraz jest też odseparowane od innych.\n Uzyskuje się własny kod dostępu, nie tylko do wynajmowanego pomieszczenia, ale i na teren kompleksu.",
      },
    ],
  },

  eula: {
    label: "08",
    title: "EULA i informacje",
    sections: [
      {
        type: "text",
        heading: "1. Informacje ogólne.",
        body: [
          "1.1. EULA dotyczy wszystkich produktów AsperGenerator",
          "1.2. Capybara Industries jest dawną nazwą AsperGenerator. Wszystkie umowy podpisane z Capybara Industries są dalej aktualne.",
          "1.3. Informacje o zmianach znajdują się na dole strony.",
          "1.4. Administratorem danych osobowych jest AsperGenerator. Gromadzimy między innymi nagrania z kamer na terenie zakładów, dane kupujących i inne. Nie udostępniamy tych danych, chyba że mogą one służyć jako materiał dowodowy. Bierzemy pełną odpowiedzialność na przechowywanie tych danych. Z racji na swój charakter, dane z monitoringu są przechowywane czasowo.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "2. Zasady użytkowania produktów.",
        body: [
          "2.1. Ze względów bezpieczeństwa, AsperGenerator jest jedynym podmiotem, mogącym modyfikować pojazdy, urządzena i wszystkie inne produkty. Zabrania się wykonywania zmian w pojeździe na własną rękę. Zmiany te obejmują strukturę pojazdu, kolor, ustawienia podzespołów i inne.\nNie obejmuje to bagażu, elementów dekoracyjnych jak lampki, flagi, ani inna inna dekoracja, nie naruszająca kontrukcji ani malowania produktu.",
          "2.2. Ze względów bezpieczeństwa, AsperGenerator jest jedynym podmiotem, mogącym naprawiać produkty.",
          "2.3. Zabrania się odsprzedawania ani oddawania produktów AsperGenerator.",
          "2.4. Każdy produkt może posiadać zmienioną wersję EULA",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "3. Zobowiązania AsperGenerator.",
        body: [
          "3.1. AsperGenerator zobowiązuje się do odkupienia produktu na prośbę klienta. Wycenę prowadzi AsperGenerator.",
          "3.2. AsperGenerator nie ma prawa wymusić zwrotu produktów. Nie dotyczy to sytuacji, w których klient łamie zapisy EULA.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "4. Zwroty i reklamacje.",
        body: [
          "4.1. Klient może wnioskować o zwrot produktu w przeciągu 14 dni od odebrania produktu. AsperGenerator może odmówić przyjęcia zwrotu jeśli produkt nosi ślady uszkodzeń, jest uszkodzony, lub z powodów innych niż wymienione.\n W przypadku odmowy zwrotu, zaleca się przejście do akcji opisanych w punkcie 3.1.",
        ],
      },
      { type: "divider" },
      {
        type: "button-right",
        body: "EULA Komory Transformatora znajduje się w osobnym miejscu.",
        buttonText: "EULA Komory Transformatora",
        href: "#eulakomoratransformatora",
      },
    ],
  },
  eulakomoratransformatora: {
    title: "EULA Komory Transformatora",
    sections: [
      {
        type: "text",
        heading: "1. Zapewnienie zakładu AsperGenerator - część stała",
        body: [
          "1.1. AsperGenerator będzie dostarczało energię elektryczną zawsze kiedy jest to możliwe, niezależnie od stosunków między podmiotami i podobnymi. Jedynym wyjątkiem jest komunikat od NRMN.",
          "1.2. Administratorem i jedyną uprawnioną grupą są technicy elektrycy i energetycy AsperGenerator. Tylko te grupy są upoważniona do zdalnego jak i bezpośredniego dostępu do Komora Transformatora.",
          "1.3. AsperGenerator zastrzega sobie prawo do edycji części stałej. Zapewniamy jednak, że zmiany będą głównie kosmetyczne oraz/albo wynikające z ewolucji.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "2. Przepisy ogólne",
        body: [
          "2.1. Zakazuje się jakiejkolwiek ingerencji w Komorę Transformatora, gdyż skutkować to może poważnym uszkodzeniem Komory Transformatora oraz pobliskich obiektów, uszkodzeniem ciała, a w najgorszym przypadku śmiercią.",
          "3.7. Problemy z Komorą Transformatora należy zgłaszać do AsperGenerator. W przypadku wykrycia problemów przez AsperGenerator, wysłane zostaną odpowiednie jednostki.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "3. Rozmieszczenie",
        body: [
          "3.1. Komora Transformatora wymaga przestrzeni o wymiarach 22x10, z czego jej faktyczne wymiary to ~18x6.",
          "3.2. Zarówno na, jak i nad jej wymaganą przestrzenią zakazuje się umieszczania jakichkolwiek przeszkód.",
          "3.3. Wyznaczone miejsce musi być łatwo dostępne dla AsperGenerator w przypadku interwencji, kontroli i podobnych. W przypadku umieszczenia jej w części zamkniętej placówki, należy nadać uprawnienia dostępu dla uprawnionych jednostek opisanych w części 1.2. Dostęp ten powinien być równie prosty jak dla pracowników mających dostęp do części, w której Komora Transformatora jest umieszczona.",
          "3.4. Komora Transformatora jest sterowana zdalnie. Wyposażona jest w zdalnie otwierane drzwi oraz kamerę, która daje podgląd na frontową część Komory Transformatora.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        body: ["Wprowadzono: 10.3.2026", "Ostatnia aktualizacja: 15.9.2026"],
      },
    ],
  },
};

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

function renderParagraphs(body) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return paragraphs
    .filter((text) => text != null && text !== "")
    .map((text) => `<p>${escapeHTML(text)}</p>`)
    .join("");
}

function renderSection(section) {
  const heading = section.heading
    ? `<h2>${escapeHTML(section.heading)}</h2>`
    : "";
  const body = renderParagraphs(section.body);
  if (section.type === "lr-text") {
    return `<section class="article-section article-lr-text">${heading}<div>${body}</div></section>`;
  }
  if (section.type === "divider") {
    return '<hr class="article-divider" aria-hidden="true">';
  }
  if (section.type === "banner") {
    return `<figure class="article-banner"><img src="${escapeHTML(section.image)}" alt="${escapeHTML(section.alt)}" loading="lazy" decoding="async"></figure>`;
  }
  if (section.type === "img-left" || section.type === "img-right") {
    const image = `<figure class="article-photo"><img src="${escapeHTML(section.image)}" alt="${escapeHTML(section.alt)}" loading="lazy" decoding="async"></figure>`;
    return `<section class="article-section article-media ${section.type}">${image}<div class="article-copy">${heading}${body}</div></section>`;
  }
  if (section.type === "button-right") {
    const button = `<a class="primary article-button"href="${escapeHTML(section.href)}">${escapeHTML(section.buttonText)}</a>`;
    return `<section class="article-section article-button-right"><div class="article-copy">${heading}${body}</div>${button}</section>`;
  }
  return `<section class="article-section">${heading}${body}</section>`;
}

function renderSections(sections) {
  let html = "";
  let regularSections = "";

  const flushRegularSections = () => {
    if (!regularSections) return;
    html += `<div class="article-content">${regularSections}</div>`;
    regularSections = "";
  };

  for (const section of sections) {
    if (section.type === "banner") {
      flushRegularSections();
      html += renderSection(section);
    } else {
      regularSections += renderSection(section);
    }
  }

  flushRegularSections();
  return html;
}
const home = document.getElementById("home"),
  detail = document.getElementById("detail"),
  railInner = document.querySelector(".rail-inner");
let lastTrigger = null;
function render() {
  const key = decodeURIComponent(location.hash.slice(1)),
    data = divisions[key];
  if (!data) {
    document.body.classList.remove("open");
    home.inert = false;
    home.removeAttribute("aria-hidden");
    detail.inert = true;
    detail.setAttribute("aria-hidden", "true");
    railInner.inert = false;
    document.title = "AsperGenerator — Inżynieria jutra";
    if (lastTrigger) {
      lastTrigger.focus({ preventScroll: true });
      lastTrigger = null;
    }
    return;
  }
  document.getElementById("detail-label").textContent = data.label;
  document.getElementById("detail-title").textContent = data.title;
  document.getElementById("detail-body").innerHTML = renderSections(
    data.sections ?? [],
  );
  detail.scrollTop = 0;
  detail.inert = false;
  detail.setAttribute("aria-hidden", "false");
  home.inert = true;
  home.setAttribute("aria-hidden", "true");
  railInner.inert = true;
  document.body.classList.add("open");
  document.title = data.title + " — AsperGenerator";
  document.getElementById("detail-title").focus({ preventScroll: true });
}
document.querySelectorAll("[data-open]").forEach((button) =>
  button.addEventListener("click", () => {
    lastTrigger = button;
    location.hash = button.dataset.open;
  }),
);
document.querySelectorAll("nav a,.eula").forEach((link) =>
  link.addEventListener("click", () => {
    lastTrigger = link;
  }),
);
function closeDetail() {
  location.hash = "";
}
// Przyciski powrotu są opcjonalne — usunięcie jednego nie zatrzyma nawigacji.
document.querySelectorAll("#back, #bottom-back").forEach((button) => {
  button.addEventListener("click", closeDetail);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains("open"))
    closeDetail();
});
window.addEventListener("hashchange", render);
render();
