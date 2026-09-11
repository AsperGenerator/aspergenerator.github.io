# AsperGenerator

Statyczna strona fikcyjnej firmy do roleplayu. HTML, CSS i JavaScript, bez instalacji i bez procesu budowania.

## GitHub Pages

1. Rozpakuj paczkę `AsperGenerator-GitHub.zip`.
2. Utwórz repozytorium na GitHubie.
3. Wgraj zawartość paczki do głównego katalogu repozytorium. Plik `index.html` musi być bezpośrednio w katalogu głównym, obok `style.css`, `app.js` i folderu `assets`.
4. Otwórz Settings → Pages. W sekcji Build and deployment wybierz Deploy from a branch, gałąź main i folder / (root), a następnie Save.
5. GitHub wyświetli adres opublikowanej strony po zakończeniu wdrożenia.

Nie trzeba ustawiać domeny ani instalować Node.js. Możesz również otworzyć `index.html` bezpośrednio na komputerze. Google Fonts wymaga połączenia z internetem; bez niego strona użyje fontów systemowych.

## Edycja

- `index.html`: nazwa firmy, menu i treść strony głównej.
- `app.js`: obiekt `divisions` zawiera wszystkie opisy działów. To przykładowe treści do zastąpienia własnym lore. Dwa robocze pola ze szkicu zastąpiono działami Rozwiązania przemysłowe oraz Serwis i części.
- `style.css`: wygląd, kolory i animacje. Zmienna `--purple` i wartości kolorów w arkuszu odpowiadają za akcenty fioletowe.
- `assets/industry.png`: ilustracja zakładu, wygenerowana na potrzeby projektu. Zastąp własnym zdjęciem przy zachowaniu nazwy albo zmień ścieżki w CSS.

## Działanie

Kliknięcie działu przesuwa stronę i przenosi ukośny pas na prawą krawędź. Nagłówek otwartego działu pozostaje przy górnej krawędzi; treść i ilustracja przewijają się pod nim. Powrót: przycisk strzałki, przycisk pod artykułem lub Escape. Działy mają własne adresy z fragmentem, np. `#transformator`; działa też przycisk Wstecz przeglądarki.

Na małych ekranach nawigacja jest poziomym przewijanym paskiem u dołu. Ustawienie systemowe ograniczonego ruchu wyłącza animacje.

Informacja EULA jest przykładową notą do roleplayu, nie gotową umową prawną. Projekt nie zawiera analityki, formularzy ani kont. Teksty nie są rzeczywistą ofertą handlową ani dokumentacją techniczną.
