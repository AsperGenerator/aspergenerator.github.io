/* EDYCJA TREŚCI
Każdy dział ma sections: [ ... ]. Dodawaj dowolną liczbę obiektów, w dowolnej kolejności.
type: 'banner' - zdjęcie na całą szerokość działu, bez tekstu i akapitów.
type: 'lr-text' - nagłówek po lewej, tekst po prawej.
type: 'head-text' - nagłówek nad tekstem.
type: 'text' - sam tekst, bez nagłówka.
type: 'img-left' - zdjęcie po lewej, tekst po prawej.
type: 'img-right' - tekst po lewej, zdjęcie po prawej.
type: 'button-right' - przycisk z tekstem.
type: 'divider' - pozioma linia oddzielająca fragmenty.
heading jest opcjonalny. body: tekst lub tablica akapitów.
Przykład fragmentu ze zdjęciem:
{
    type: 'img-left',
    image: 'assets/industry.png',
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
        image: "assets/articleart/osobowy.title.png",
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
        image: "assets/articleart/osobowy.kragaut.1.png",
        alt: "Samochód w terenie.",
        heading: "Krągaut",
        body: "Nieco krągły samochód na wysokim poziomie, albo po prostu mistrz szosy. Dla tych, którzy cenią sobie wysoki poziom w samochodzie jak i dla tych, którzy mają niezbyt równą drogę. Może i nie jest terenówką, ale za to komfort to jego drugie imię.",
      },
      {
        type: "img-right",
        image: "assets/articleart/osobowy.kragaut.2.png",
        alt: "Wnętrze krągauta.",
        body: "Wnętrze samochodu jest bardzo wygodne, a ogromne szyby zapewniają niesamowite widoki.",
      },
      { type: "divider" },
      {
        type: "img-left",
        image: "assets/articleart/osobowy.wolowiec.1.png",
        alt: "Samochód w mieście.",
        heading: "Wołowiec",
        body: "Zbliża się jego premiera. Średniobudżetowy i niewielki, ale dobrze wyposażony samochód do codziennego miejskiego życia. ",
      },
      {
        type: "img-left",
        image: "assets/articleart/osobowy.wolowiec.2.png",
        alt: "Wnętrze wołowca.",
        body: "Dobrze wyposażone i wszechstronne miejsce wewnątrz jest znakomitym wyborem dla tych, którzy nie chcą za dużo wydać a mieć wszystko, co powinna posiadać osobówka. ",
      },
      {
        type: "img-left",
        image: "assets/articleart/osobowy.wolowiec.3.png",
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
        image: "assets/articleart/lekkie.title.png",
        alt: "Dostawczak",
      },
      {
        type: "img-right",
        image: "assets/articleart/lekkie.intro.png",
        alt: "Załadowany krofter.",
        heading: "Transport na własną rękę.",
        body: "Niewielkie, ale nie wymagają dodatkowych uprawnień. Przewiozą meble, kartony i wiele więcej.",
      },
      { type: "divider" },
      {
        type: "img-left",
        image: "assets/articleart/lekkie.krofter.1.png",
        alt: "Krofter na parkingu.",
        heading: "Krofter",
        body: "Bogato wyposażony, trzy miejsca siedzące, oświetlenie przestrzeni bagażowej, a nawet wysuwany razem z drzwiami schodek. Posiada wysuwane światła na masce.",
      },
      {
        type: "img-left",
        image: "assets/articleart/lekkie.krofter.2.png",
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
        type: "head-text",
        heading: "Strona w budowie.",
      },
      {
        type: "banner",
        image: "assets/budowa.gif",
      },
    ],
  },
  techniczny: {
    label: "04",
    title: "Pojazdy i sprzęt techniczny",
    sections: [
      {
        type: "head-text",
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
        type: "head-text",
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
        image: "assets/articleart/komora.title.png",
        alt: "Komora",
      },
      {
        type: "head-text",
        heading: "Przede wszystkim czysty Napoligrad.",
        body: "Cała energia zasilająca Napoligrad pochodzi z czystego źródła jakim jest elektrownia atomowa operowana przez AsperGenerator.",
      },
      {
        type: "img-left",
        image: "assets/articleart/komora.columbus.png",
        alt: "Komora Transformatora w zakładzie Columbus.",
        body: "Komora Transformatora dostarcza energię zawsze kiedy to możliwe - gdy jest moc, masz moc.\n Na wypadek przerw, zaprzyjaźniona firma Columbus oferuje magazyny energii, które dla ciebie podłączymy.",
      },
      {
        type: "img-left",
        image: "assets/articleart/komora.wymiary.png",
        alt: "Graficzne przedstawienie wymiarów Komora Transformatora",
        body: "Komora Transformatora nie zajmuje dużo miejsca, jej wymiary to 6x18. Wyposażona jest w zdalnie otwierane drzwi oraz wysuwaną kamerę, która daje podgląd na frontową część obiektu, aby zagwarantować bezpieczeństwo i sprawne działanie.",
      },
      {
        type: "button-right",
        body: "Zobacz pełne warunki korzystania na stronie",
        buttonText: "EULA Komora Transformatora",
        href: "#eulakomoratransformatora",
      },
    ],
  },
  eula: {
    label: "07",
    title: "EULA i informacje",
    sections: [
      {
        type: "head-text",
        heading: "Strona w budowie.",
      },
      {
        type: "banner",
        image: "assets/budowa.gif",
      },
    ],
  },
  eulakomoratransformatora: {
    title: "EULA Komora Transformatora",
    sections: [
      {
        type: "head-text",
        heading: "Strona w budowie.",
      },
      {
        type: "banner",
        image: "assets/budowa.gif",
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
  if (section.type === "text") {
    return `<section class="article-section article-plain-text">${body}</section>`;
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
