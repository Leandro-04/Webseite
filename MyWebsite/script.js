document.addEventListener("DOMContentLoaded", function () {
    const text = "Leandro Schmidt"; // Dein Text hier
    const typingTextElement = document.getElementById("typing-text");

    function type() {
        typingTextElement.textContent = "";
        let charIndex = 0;

        function addChar() {
            if (charIndex < text.length) {
                typingTextElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(addChar, 100); // Geschwindigkeit des Schreibeffekts in Millisekunden
            } else {
                setTimeout(deleteChars, 1000); // Wartezeit, bevor das Löschen beginnt (1 Sekunde)
            }
        }

        function deleteChars() {
            if (charIndex > 0) {
                typingTextElement.textContent = text.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteChars, 100); // Geschwindigkeit des Löschens in Millisekunden
            } else {
                setTimeout(type, 1000); // Wartezeit, bevor der Text wieder erscheint (1 Sekunde)
            }
        }

        addChar();
    }

    type();



    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Eventlistener für die Buttons
    document.querySelector("#buttons-container button:nth-child(1)").addEventListener("click", function () {
        scrollToSection("about");
    });

    document.querySelector("#buttons-container button:nth-child(2)").addEventListener("click", function () {
        scrollToSection("contact");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Hier könntest du die Formulardaten validieren
        const name = contactForm.querySelector("#name").value;
        const email = contactForm.querySelector("#email").value;
        const message = contactForm.querySelector("#message").value;

        // Hier könntest du die Daten anzeigen oder verarbeiten
        const resultMessage = `
            Vielen Dank, ${name}!
            <br>
            Deine Nachricht wurde gesendet:
            <br>
            E-Mail: ${email}
            <br>
            Nachricht: ${message}
        `;

        confirmation.innerHTML = resultMessage;
        contactForm.reset();
    });
});
