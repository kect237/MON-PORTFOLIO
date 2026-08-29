// Redirection automatique des messages vers WhatsApp
const contactForm = document.querySelector('.contact-section form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const phoneNumber = "237683117603";
        const nameInput = this.querySelector('input[placeholder*="Nom"]');
        const messageInput = this.querySelector('textarea');

        const name = nameInput ? nameInput.value : "un visiteur";
        const message = messageInput ? messageInput.value : "";

        const text = `Bonjour, je suis ${name}.%0A%0AMessage : ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(whatsappUrl, '_blank');
    });
}

// --- GESTION DU MENU BURGER MOBILE ---
const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

if (burgerBtn && navMenu) {
    // 1. Ouvre / Ferme le menu quand on clique sur le bouton burger ☰
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 2. FERME le menu dès qu'on clique sur UN ÉLÉMENT (À propos, Compétences, etc.)
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}