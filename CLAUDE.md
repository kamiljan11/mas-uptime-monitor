# Reguly pracy w tym repo (obowiazuja kazdego agenta AI i czlowieka)

## Zanim napiszesz JAKIKOLWIEK nowy kod
1. **Grep first.** Przeszukaj repo czy istniejaca funkcja/util/komponent robi to samo. Jesli tak — uzyj albo rozszerz. Duplikacja logiki = odrzucona zmiana.
2. Przeczytaj sasiednie pliki modulu, ktory zmieniasz. Trzymaj sie ich konwencji, nie swoich preferencji.
3. Zmiana architektoniczna (nowy modul, zaleznosc, wzorzec, schemat danych) -> najpierw ADR w `docs/adr/`, potem implementacja.

## Podczas pisania
4. **Male atomowe zmiany + Simplicity First.** Jedna logiczna zmiana naraz. Nie mieszaj refaktoru z feature. Nie przepisuj plikow spoza zadania. Najprostsze rozwiazanie, ktore przechodzi testy — zero abstrakcji i zaleznosci "na zapas" (YAGNI).
5. **Testy sa czescia zadania.** Nowa logika = testy w tej samej zmianie (happy path + najgrozniejsze edge case'y).
6. Bezpieczenstwo zawsze: parametryzowane zapytania, walidacja kazdego inputu, authz na poziomie rekordu, zadnych sekretow w kodzie — tylko env.
7. Nie wylaczaj lintera i nie uzywaj `any` / `@ts-ignore` / `eslint-disable` zeby "przeszlo". Napraw przyczyne.

## Zanim powiesz "gotowe" (Definition of Done)
8. Uruchom lint + typecheck + testy. Czerwone = nie jest gotowe.
9. Self-review diffa oczami wrogiego recenzenta: co tu sie wysypie o 3 w nocy?
10. Nie commituj z `--no-verify`. Czerwone CI to nie sugestia, to sciana.
11. **Dokumentacja rowna sie kod:** kazda zmiana funkcjonalna -> wpis w `CHANGELOG.md` [Unreleased]; zmiana setup/komend/env -> aktualizacja `README.md`; zmiana deploy/ops -> `docs/RUNBOOK.md`.
12. **Flow galezi:** feature branch -> PR -> zielone CI + review -> merge. Nie pushuj prosto na main (wyjatek: stare projekty Lovable, gdzie push do main = deploy).
13. **Release:** wersje SemVer; przy wydaniu przenies [Unreleased] pod numer, tagnij `vX.Y.Z`, push tag (Release robi sie sam).

## Kontekst projektu
<!-- UZUPELNIJ per repo: stack, komendy, pliki wzorcowe -->
- Stack:
- Komendy: `npm run dev` / `npm run build` / `npm run lint` / `npm test`
- Plik wzorcowy komponentu:
- Plik wzorcowy API/serwisu:
