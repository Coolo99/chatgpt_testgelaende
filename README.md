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
