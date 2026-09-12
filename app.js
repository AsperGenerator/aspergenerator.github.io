/* EDYCJA TREŚCI
Każdy dział ma sections: [ ... ]. Dodawaj dowolną liczbę obiektów, w dowolnej kolejności.
type: 'intro' — nagłówek po lewej, tekst po prawej.
type: 'text' — nagłówek nad tekstem.
type: 'plain-text' — sam tekst, bez nagłówka.
type: 'image-left' — zdjęcie po lewej, tekst po prawej.
type: 'image-right' — tekst po lewej, zdjęcie po prawej.
type: 'divider' — pozioma linia oddzielająca fragmenty.
type: 'banner' — zdjęcie na całą szerokość działu, bez tekstu i akapitów.
heading jest opcjonalny. body: tekst lub tablica akapitów.
Przykład fragmentu ze zdjęciem (wklej do sections, oddzielając przecinkiem):
{
    type: "image-left",
    image: "assets/industry.png",
    alt: "Zakład energetyczny",
    heading: "Nasz zakład",
    body: ["Pierwszy akapit.", "Drugi akapit."]
},
Na telefonie oba układy zdjęciowe pokazują najpierw zdjęcie, potem tekst.
*/
const divisions = {

    "osobowe": {
        "label": "01",
        "title": "Samochody osobowe",
        "sections": [
            {
                type: "banner",
                image: "assets/articleart/osobowy.title.png",
                alt: "Osobówki"
            },
            {
                type: "intro",
                heading: "Różne oczekiwania, różne propozycje.",
                body: "Stale rozwijana oferta AsperGenerator jak na razie nie jest zbyt pokaźna, ale pracujemy nad jej poszerzeniem, optymalizacją komfortu, poprawą bezpieczeństwa i zwiększeniem bezawaryjnjości aby jak najwięcej osób mogło się cieszyć ze swojego wymarzonego samochodu."
            },
            { type: "divider" },
            {
                type: "image-right",
                image: "assets/articleart/osobowy.kragaut.1.png",
                alt: "Samochód w terenie.",
                body: "Krągaut, czyli nieco krągły samochód na wysokim poziomie, albo po prostu mistrz szosy. Dla tych, którzy cenią sobie wysoki poziom w samochodzie jak i dla tych, którzy mają niezbyt równą drogę. Może i nie jest terenówką, ale za to komfort to jego drugie imię."
            },
            {
                type: "image-right",
                image: "assets/articleart/osobowy.kragaut.2.png",
                alt: "Wnętrze krągauta.",
                body: "Wnętrze samochodu jest bardzo wygodne, a ogromne szyby zapewniają niesamowite widoki."
            },
            { type: "divider" },
            {
                type: "image-left",
                image: "assets/articleart/osobowy.wolowiec.1.png",
                alt: "Samochód w mieście.",
                body: "Już niedługo premiera nowego samochodu, czyli Wołowiec. Średniobudżetowy i niewielki, ale dobrze wyposażony samochód do codziennego miejskiego życia. ",
            },
            {
                type: "image-left",
                image: "assets/articleart/osobowy.wolowiec.2.png",
                alt: "Wnętrze wołowca.",
                body: "Dobrze wyposażone i wszechstronne miejsce wewnątrz jest znakomitym wyborem dla tych, którzy nie chcą za dużo wydać a mieć wszystko, co powinna posiadać osobówka. ",
            },
            {
                type: "image-left",
                image: "assets/articleart/osobowy.wolowiec.3.png",
                alt: "Big Bagażnik.",
                body: "Mimo niewielkich rozmiarów, bagażnik jest nieproporcjonalnie pojemny. Poza ogromnymi zakupami, zmieści się tam wiele innych rzeczy. ",
            }
        ]
    },
    "ciezarowe": {
        "label": "02",
        "title": "Samochody ciężarowe",
        "sections": [
            {
                type: "intro",
                heading: "Transport bez zbędnych kompromisów.",
                body: "Gdy zadanie wymaga przewiezienia więcej, liczy się solidna konstrukcja i łatwa obsługa. Dział pojazdów użytkowych AsperGenerator dostarcza rozwiązania dla logistyki, budownictwa i transportu specjalistycznego."
            },
            {
                type: "text",
                heading: "Narzędzie dopasowane do zadania.",
                body: "Modułowa konstrukcja podwozia umożliwia przygotowanie pojazdu pod różne zabudowy. Kabiny projektujemy z uwzględnieniem widoczności i codziennej pracy kierowcy, a punkty obsługowe pozostają łatwo dostępne."
            },
            {
                type: "text",
                heading: "Zaplecze dla całej floty",
                body: "Długoterminowa eksploatacja zaczyna się od planu. Nasz dział wsparcia pomaga dobrać harmonogram obsługi, konfigurację pojazdów i zapas części do charakteru pracy floty."
            }
        ]
    },
    "transformator": {
        "label": "03",
        "title": "Komora Transformatora™",
        "sections": [
            {
                type: "intro",
                heading: "Moc pod pełną kontrolą.",
                body: "Komora Transformatora™ to zintegrowane rozwiązanie dla infrastruktury energetycznej AsperGenerator. W jednej przestrzeni łączy układ transformacji, chłodzenie i monitoring — tworząc techniczne serce zakładów, które nie mogą stać w miejscu."
            },
            {
                type: "text",
                heading: "Zaprojektowana jako całość.",
                body: "Każdy element komory jest częścią wspólnego systemu. Rozmieszczenie urządzeń uwzględnia przepływ powietrza, dostęp serwisowy i możliwość rozbudowy. Osłony oddzielają strefy robocze, a centralny panel zbiera informacje o pracy instalacji."
            },
            {
                type: "text",
                heading: "Energia na kolejne etapy",
                body: "Komora może rozwijać się razem z zakładem. Modułowy układ pozwala planować kolejne sekcje bez przebudowy całej infrastruktury. Zespół AsperGenerator wspiera dobór konfiguracji, integrację z obiektem oraz obsługę podczas eksploatacji."
            }
        ]
    },
    "przemysl": {
        "label": "04",
        "title": "Rozwiązania przemysłowe",
        "sections": [
            {
                type: "intro",
                heading: "System, w którym wszystko współpracuje.",
                body: "Tworzymy zaplecze dla produkcji: stanowiska robocze, instalacje pomocnicze i rozwiązania automatyki. Punktem wyjścia jest zawsze proces — jego wymagania, ograniczenia i ludzie, którzy przy nim pracują."
            },
            {
                type: "text",
                heading: "Inżynieria całego procesu.",
                body: "Łączymy konstrukcję mechaniczną z zasilaniem i sterowaniem. Spójny projekt ułatwia obsługę oraz pomaga zachować porządek w dokumentacji. Poszczególne moduły można dostosować do układu hali i kolejnych etapów inwestycji."
            },
            {
                type: "text",
                heading: "Przestrzeń na przyszłe zadania",
                body: "Wraz ze zmianą skali produkcji zmieniają się potrzeby zakładu. Projektujemy rozwiązania z myślą o dostępie do urządzeń i późniejszej rozbudowie, aby kolejne zmiany miały solidny punkt wyjścia."
            }
        ]
    },
    "serwis": {
        "label": "05",
        "title": "Serwis i części",
        "sections": [
            {
                type: "intro",
                heading: "Dbamy o ciąg dalszy.",
                body: "Oddanie maszyny do pracy to początek jej historii. Dział wsparcia AsperGenerator zajmuje się diagnostyką, przeglądami i doborem części do pojazdów oraz instalacji naszej grupy."
            },
            {
                type: "text",
                heading: "Wiedza o każdym podzespole.",
                body: "Dobra obsługa opiera się na dokumentacji i znajomości konstrukcji. Zespoły techniczne pracują na wspólnych standardach, a historia przeglądów pomaga planować kolejne czynności serwisowe."
            },
            {
                type: "text",
                heading: "Przygotuj zgłoszenie",
                body: "Aby usprawnić obsługę w ramach roleplayu, przygotuj model urządzenia, jego numer seryjny oraz opis objawów. Z tymi informacjami zgłoś się do przedstawiciela firmy w kanale kontaktowym swojego serwera."
            }
        ]
    },
    "dzwigi": {
        "label": "06",
        "title": "Dźwigi",
        "sections": [
            {
                type: "intro",
                heading: "Precyzja na wysokości.",
                body: "Dział techniki dźwigowej AsperGenerator wspiera budownictwo i przemysł. Projektujemy rozwiązania do podnoszenia i pozycjonowania ładunków z uwzględnieniem warunków terenu, zasięgu pracy i organizacji placu budowy."
            },
            {
                type: "text",
                heading: "Siła potrzebuje precyzji.",
                body: "Stabilna konstrukcja, czytelne sterowanie i dobra widoczność tworzą podstawę pracy operatora. Różne konfiguracje pozwalają dopasować sprzęt do charakteru inwestycji i dostępnego miejsca."
            },
            {
                type: "text",
                heading: "Planowanie przed podnoszeniem",
                body: "Każda realizacja wymaga właściwego przygotowania. Zespół techniczny pomaga określić konfigurację maszyny i zaplecze serwisowe odpowiednie do zadania w świecie gry."
            }
        ]
    },
    "eula": {
        "label": "07",
        "title": "EULA i informacje",
        "sections": [
            {
                type: "intro",
                heading: "O tym projekcie.",
                body: "AsperGenerator to fikcyjna firma stworzona na potrzeby roleplayu. Opisy produktów, systemów i usług są elementem świata gry. Ta strona nie stanowi rzeczywistej oferty handlowej ani dokumentacji technicznej."
            },
            {
                type: "text",
                heading: "Korzystanie ze strony",
                body: "Materiały służą budowaniu historii i prezentacji firmy w grze. Parametry oraz nazwy rozwiązań mają charakter fabularny i nie powinny być wykorzystywane do projektowania lub obsługi rzeczywistych urządzeń."
            },
            {
                type: "text",
                heading: "Prywatność i materiały",
                body: "Strona nie zawiera formularzy, analityki ani własnych plików cookie. Krój pisma jest ładowany z pliku strony, a hosting może prowadzić własne logi techniczne. Ilustracja zakładu została wygenerowana na potrzeby projektu. To przykładowa informacja do dostosowania przez właściciela serwera, nie gotowa umowa licencyjna."
            }
        ]
    }
};

function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
}

function renderParagraphs(body) {
    const paragraphs = Array.isArray(body) ? body : [body];
    return paragraphs.filter(text => text != null && text !== '')
        .map(text => `<p>${escapeHTML(text)}</p>`).join('');
}

function renderSection(section) {
    const heading = section.heading ? `<h2>${escapeHTML(section.heading)}</h2>` : '';
    const body = renderParagraphs(section.body);
    if (section.type === 'intro') {
        return `<section class="article-section article-intro">${heading}<div>${body}</div></section>`;
    }
    if (section.type === 'plain-text') {
        return `<section class="article-section article-plain-text">${body}</section>`;
    }
    if (section.type === 'divider') {
        return '<hr class="article-divider" aria-hidden="true">';
    }
    if (section.type === 'banner') {
        return `<figure class="article-banner"><img src="${escapeHTML(section.image)}" alt="${escapeHTML(section.alt)}" loading="lazy" decoding="async"></figure>`;
    }
    if (section.type === 'image-left' || section.type === 'image-right') {
        const image = `<figure class="article-photo"><img src="${escapeHTML(section.image)}" alt="${escapeHTML(section.alt)}" loading="lazy" decoding="async"></figure>`;
        return `<section class="article-section article-media ${section.type}">${image}<div class="article-copy">${heading}${body}</div></section>`;
    }
    return `<section class="article-section">${heading}${body}</section>`;
}

function renderSections(sections) {
    let html = '';
    let regularSections = '';

    const flushRegularSections = () => {
        if (!regularSections) return;
        html += `<div class="article-content">${regularSections}</div>`;
        regularSections = '';
    };

    for (const section of sections) {
        if (section.type === 'banner') {
            flushRegularSections();
            html += renderSection(section);
        } else {
            regularSections += renderSection(section);
        }
    }

    flushRegularSections();
    return html;
}
const home = document.getElementById('home'), detail = document.getElementById('detail'), railInner = document.querySelector('.rail-inner');
let lastTrigger = null;
function render() {
    const key = decodeURIComponent(location.hash.slice(1)), data = divisions[key];
    if (!data) { document.body.classList.remove('open'); home.inert = false; home.removeAttribute('aria-hidden'); detail.inert = true; detail.setAttribute('aria-hidden', 'true'); railInner.inert = false; document.title = 'AsperGenerator — Inżynieria jutra'; if (lastTrigger) { lastTrigger.focus({ preventScroll: true }); lastTrigger = null; } return; }
    document.getElementById('detail-label').textContent = data.label;
    document.getElementById('detail-title').textContent = data.title;
    document.getElementById('detail-body').innerHTML = renderSections(data.sections ?? []);
    detail.scrollTop = 0; detail.inert = false; detail.setAttribute('aria-hidden', 'false'); home.inert = true; home.setAttribute('aria-hidden', 'true'); railInner.inert = true; document.body.classList.add('open'); document.title = data.title + ' — AsperGenerator'; document.getElementById('detail-title').focus({ preventScroll: true });
}
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => { lastTrigger = button; location.hash = button.dataset.open }));
document.querySelectorAll('nav a,.eula').forEach(link => link.addEventListener('click', () => { lastTrigger = link }));
function closeDetail() { location.hash = ''; }
// Przyciski powrotu są opcjonalne — usunięcie jednego nie zatrzyma nawigacji.
document.querySelectorAll('#back, #bottom-back').forEach(button => {
    button.addEventListener('click', closeDetail);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('open')) closeDetail() });
window.addEventListener('hashchange', render); render();
