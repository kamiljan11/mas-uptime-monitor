# MAS Uptime Monitor

Monitoring dostepnosci stron klienckich MAS Group. Zero zewnetrznego SaaS — dziala na GitHub Actions.

## Jak dziala
- Co 10 min workflow `uptime.yml` pinguje wszystkie strony z `sites.json`.
- Strona padla (timeout / zly status, po 1 retry) -> otwiera Issue z etykieta `downtime` i komentuje przy kolejnych padach.
- Wszystko wroci do UP -> Issue automatycznie zamykane.

## Dodanie strony
Edytuj `sites.json`:
```json
{ "name": "Nazwa klienta", "url": "https://strona.is" }
```
Opcjonalnie `"expect_status": 301` jesli strona ma inny oczekiwany kod.

## Alert na maila/Slacka (opcjonalne)
Issue-based alert dziala od razu (powiadomienia GitHub). Dla maila/SMS: podepnij UptimeRobot (darmowy, 50 monitorow) jako druga warstwe — niezalezna od GitHuba.

## Recznie
Zakladka Actions -> Uptime Monitor -> Run workflow.
