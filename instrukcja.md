## css

Polecenia stylu nie znajdują się w `app.js`. Funkcja `renderSection()` w `app.js` jedynie tworzy elementy i przypisuje im klasy. Właściwe style są pod koniec `style.css`, poniżej komentarza `Fragmenty treści — typ wybierasz w app.js`:

- `.article-intro` — proporcje nagłówka i tekstu intro;
- `.article-media` — dwie kolumny zdjęcia i tekstu;
- `.article-media.image-right .article-copy` — wyrównanie oraz kolor tekstu w `image-right`;
- `.article-photo` — ramka i rozmiar zdjęcia;
- `.article-plain-text` — szerokość samego tekstu;
- `.article-divider` — wygląd i odstępy separatora;
- `.article-banner` oraz `.article-banner img` — wysokość, szerokość i kadrowanie bannera;
- końcowe `@media(max-width:760px)` — zachowanie tych fragmentów na telefonie.
