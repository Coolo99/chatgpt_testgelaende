# ChatGPT Testgelände

Dieses Projekt enthält Beispielcode. Um Templates in PHP zu nutzen, wird jetzt [Twig](https://twig.symfony.com/) verwendet.

## Installation

1. Wechseln Sie in das Verzeichnis `website/php`.
2. Installieren Sie die PHP-Abhängigkeiten mit Composer:
   ```bash
   composer install
   ```
3. Rufen Sie anschließend `index.php` über Ihren Webserver oder die PHP Built-in Webserver-Funktion auf:
   ```bash
   php -S localhost:8000
   ```

Die Seite rendert ihr Layout über Twig-Templates aus dem Ordner `website/php/templates`.
# Testgelände

Dies ist ein kleines Test-Repository. Neben der bestehenden Beispiel-Webseite befindet sich nun auch ein einfacher Taschenrechner unter `calculator/`.

## Taschenrechner

Im Ordner `calculator` liegt eine kleine HTML/CSS/JavaScript-Anwendung, die einen simplen, aber dynamischen Taschenrechner bereitstellt. Die `index.html` kann direkt im Browser geöffnet werden.

Der Taschenrechner ist zusätzlich über die Beispiel-Webseite erreichbar. Dort befindet sich nun ein Link, der auf die Anwendung verweist.

## Minesweeper

Im Ordner `minesweeper` liegt ein einfaches Grundgerüst für das bekannte
Minesweeper-Spiel. Das Layout nutzt Bootstrap und kleine Emoji-Symbole für Mine
und Fahne. Die Logik ist nur angedeutet, kann aber leicht erweitert werden.
Auch auf der Beispiel-Webseite gibt es einen Link zu dieser Anwendung.
