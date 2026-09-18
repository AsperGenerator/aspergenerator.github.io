# AsperGenerator — edycja strony

Strona jest statyczna: nie wymaga instalacji ani kompilowania. Treści strony głównej i menu edytujesz w `index.html`, treści działów w `app.js`, a wygląd wszystkich elementów w `style.css`.

## Fragmenty działów w app.js

Każdy dział zawiera `label`, `title` i tablicę `sections`. Kolejność obiektów w `sections` odpowiada kolejności fragmentów na stronie. Możesz dodawać ich dowolnie dużo i używać tego samego typu wiele razy.

```js
sections: [
    {
        type: 'intro',
        heading: 'Szerszy nagłówek po lewej',
        body: 'Tekst wprowadzający po prawej.'
    },
    {
        type: 'text',
        heading: 'Nagłówek nad tekstem',
        body: ['Pierwszy akapit.', 'Drugi akapit.']
    },
    {
        type: 'plain-text',
        body: 'Sam tekst bez nagłówka.'
    },
    {
        type: 'divider'
    },
    {
        type: 'banner',
        image: 'assets/articleart/osobowy.title.png',
        alt: ''
    },
    {
        type: 'image-left',
        image: 'assets/articleart/zdjecie.png',
        alt: 'Opis zdjęcia',
        heading: 'Zdjęcie po lewej',
        body: 'Tekst po prawej.'
    },
    {
        type: 'image-right',
        image: 'assets/articleart/zdjecie-2.png',
        alt: 'Opis drugiego zdjęcia',
        heading: 'Zdjęcie po prawej',
        body: 'Czarny tekst wyrównany do prawej.'
    }
]
```

Dostępne typy:

- `intro` — szerszy nagłówek po lewej i tekst po prawej;
- `text` — nagłówek nad tekstem;
- `plain-text` — sam tekst bez nagłówka;
- `divider` — pozioma czarna linia między fragmentami;
- `banner` — samo zdjęcie na całą szerokość działu, bez nagłówka i akapitów;
- `image-left` — zdjęcie po lewej, tekst po prawej;
- `image-right` — tekst wyrównany do prawej po lewej stronie, zdjęcie po prawej.

`body` może być jednym tekstem albo tablicą tekstów — każdy element tablicy staje się osobnym akapitem. `heading` jest opcjonalny. Zdjęcia mają ramkę `1px solid #000000`, taką jak kafelki `division-grid`.

## Gdzie zmieniać wygląd

Polecenia stylu nie znajdują się w `app.js`. Funkcja `renderSection()` w `app.js` jedynie tworzy elementy i przypisuje im klasy. Właściwe style są pod koniec `style.css`, poniżej komentarza `Fragmenty treści — typ wybierasz w app.js`:

- `.article-intro` — proporcje nagłówka i tekstu intro;
- `.article-media` — dwie kolumny zdjęcia i tekstu;
- `.article-media.image-right .article-copy` — wyrównanie oraz kolor tekstu w `image-right`;
- `.article-photo` — ramka i rozmiar zdjęcia;
- `.article-plain-text` — szerokość samego tekstu;
- `.article-divider` — wygląd i odstępy separatora;
- `.article-banner` oraz `.article-banner img` — wysokość, szerokość i kadrowanie bannera;
- końcowe `@media(max-width:760px)` — zachowanie tych fragmentów na telefonie.

## Publikacja na GitHub Pages

Wgraj `index.html`, `style.css`, `app.js`, `.nojekyll` oraz cały folder `assets` do głównego katalogu repozytorium. W ustawieniach repozytorium wybierz Pages, publikację z gałęzi `main` i katalog `/ (root)`. Odnośniki do arkusza i skryptu mają numer `?v=7`, aby przeglądarka pobrała aktualne pliki.
