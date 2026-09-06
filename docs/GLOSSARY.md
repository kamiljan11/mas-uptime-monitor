# Słownik

Pojęcia używane w tym repo i w Issue, które ono zakłada.

| Pojęcie | Znaczenie tutaj |
|---|---|
| **strona monitorowana** | Wpis w `sites.json`: `name` (nazwa klienta/projektu, trafia do Issue) + `url`. Nic więcej o kliencie tu nie trzymamy. |
| **expect_status** | Kod HTTP, który dla danej strony oznacza „działa". Domyślnie 200; ustawia się np. 301, gdy adres świadomie przekierowuje. |
| **pad / DOWN** | Strona nie odpowiedziała w 15 s albo zwróciła inny kod niż oczekiwany — po jednej ponownej próbie. Pojedyncza nieudana próba to jeszcze nie pad. |
| **retry** | Druga próba po 5 s. Odsiewa chwilowe timeouty sieci runnera, które inaczej generowałyby fałszywe alarmy co 10 minut. |
| **Issue `downtime`** | Jedno otwarte zgłoszenie na całą awarię. Kolejne pady dopisują komentarz, powrót wszystkich stron zamyka Issue. Etykieta `downtime` jest kluczem, po którym workflow to Issue odnajduje. |
| **`down.md`** | Plik generowany przez `check.mjs` w trakcie przebiegu — treść komentarza/Issue. Nie jest commitowany. |
| **UP** | Wszystkie strony z `sites.json` odpowiedziały oczekiwanym kodem w tym przebiegu. |
