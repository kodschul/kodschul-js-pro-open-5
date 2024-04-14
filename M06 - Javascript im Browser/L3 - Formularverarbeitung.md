## JavaScript: Formularverarbeitung in JavaScript

Die Verarbeitung von Formularen in JavaScript ist ein grundlegendes Konzept für die Interaktivität von Webseiten. Es ermöglicht das Erfassen von Benutzereingaben und das Ausführen von Aktionen basierend auf diesen Eingaben. Im Folgenden sind einige grundlegende Konzepte und Codebeispiele zur Formularverarbeitung in JavaScript:

### Beispiel 1: Zugriff auf Formularelemente

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularverarbeitung</title>
</head>
<body>
    <form id="myForm">
        <input type="text" id="username" name="username" placeholder="Benutzername">
        <input type="password" id="password" name="password" placeholder="Passwort">
        <button type="submit">Anmelden</button>
    </form>

    <script>
        const form = document.getElementById('myForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seitenneuladen)
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log('Benutzername:', username);
            console.log('Passwort:', password);
            // Hier können weitere Aktionen wie Datenvalidierung und -übermittlung durchgeführt werden
        });
    </script>
</body>
</html>
```

In diesem Beispiel wird der Zugriff auf Formularelemente demonstriert. Ein JavaScript-Eventlistener wird verwendet, um das Formularsubmit-Ereignis abzufangen. Die preventDefault()-Methode wird verwendet, um das Standardverhalten des Formulars zu verhindern, und die Werte der Benutzereingaben werden aus den entsprechenden Formularelementen abgerufen.

## Beispiel 2: Datenvalidierung

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datenvalidierung</title>
</head>
<body>
    <form id="myForm">
        <input type="text" id="email" name="email" placeholder="E-Mail-Adresse">
        <button type="submit">Registrieren</button>
    </form>

    <script>
        const form = document.getElementById('myForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            if (!isValidEmail(email)) {
                alert('Ungültige E-Mail-Adresse!');
                return;
            }
            // Führe hier die Registrierungslogik aus
            console.log('E-Mail-Adresse:', email);
        });

        function isValidEmail(email) {
            // Einfache E-Mail-Validierung
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    </script>
</body>
</html>
```

Dieses Beispiel zeigt die Datenvalidierung in einem Formular. Bevor das Formular gesendet wird, wird überprüft, ob die eingegebene E-Mail-Adresse gültig ist. Wenn nicht, wird eine Warnmeldung angezeigt, und das Senden des Formulars wird verhindert.

Diese Beispiele bieten eine Einführung in die Formularverarbeitung