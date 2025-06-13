# Designübersicht aller Projekte

Dieses Dokument fasst die wichtigsten Designentscheidungen für die unterschiedlichen Beispielanwendungen im Repository zusammen.

## Statische HTML-Seite
* Minimaler Aufbau mit `index.html` unter `website/`
* Verweist auf `assets/css/style.css` und `assets/js/app.js`
* Dient als simpelstes Beispiel und wird in der Projektübersicht angezeigt

## PHP-Beispiel
* Liegt unter `website/php`
* Nutzung von `header.php` und `footer.php` via `include`
* Demonstriert einfache Seitentrennung in wiederverwendbare Bestandteile

## Kleine MVC-Struktur
* Zu finden in `website/app` und `website/public`
* Enthält einen rudimentären Router (`Router.php`) und einen `HomeController`
* Zeigt, wie Controllers, Models und Repositories voneinander getrennt werden können

## Projektübersicht
* Implementiert in `website/overview.html`
* Nutzt Bootstrap im Dark-Mode und zeigt Projekte in einem Grid
* Beim Überfahren mit der Maus vergrößert sich die Vorschau (`scale`) und blendet eine Overlay mit Details ein

## Styles und Skripte
* Zentrale Styles liegen in `assets/css/style.css`
* JavaScript-Funktionen befinden sich in `assets/js/app.js`
* Aktuell lediglich eine Konsolen-Ausgabe, kann als Basis für weitere Effekte dienen

