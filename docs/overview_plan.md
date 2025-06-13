# Übersicht-Seite für Projekte

Dieses Dokument enthält die Planung für eine moderne Übersicht-Seite im Dark-Mode.

## Ziele
* Darstellung mehrerer Projekte mit Live-Vorschau
* Verwendung von Bootstrap (CDN) im Dark-Mode
* Beim Hover vergrößert sich die Vorschau und blendet Details ein

## Technisches Konzept
1. **Struktur:** Verwendung eines Grid-Layouts mit Bootstrap (`row` und `col`).
2. **Vorschau:** Jede Vorschau besteht aus einem `iframe` in einer Wrapper-Div.
3. **Hover-Effekt:** Mittels CSS-Transformation (`scale`) und einer Overlay-Div werden bei Hover Details angezeigt.
4. **Responsive:** Bootstrap sorgt für Anpassung an verschiedene Bildschirmgrößen.
5. **Assets:** Erweiterung der vorhandenen `style.css` sowie `app.js` für eventuelle JS-Effekte.

Die Umsetzung erfolgt in der Datei `website/overview.html`. Neben einfachen Beispielseiten wird dort auch ein JavaScript-Taschenrechner eingebunden.
