// Redirection automatique des messages vers WhatsApp
const contactForm = document.querySelector('.contact-section form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Votre numéro de téléphone avec l'indicatif du Cameroun
        const phoneNumber = "237683117603";

        // Récupération des données du formulaire
        const nameInput = this.querySelector('input[placeholder*="Nom"]');
        const messageInput = this.querySelector('textarea');

        const name = nameInput ? nameInput.value : "un visiteur";
        const message = messageInput ? messageInput.value : "";

        // Construction du message WhatsApp
        const text = `Bonjour, je suis ${name}.%0A%0AMessage : ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        // Ouverture de WhatsApp
        window.open(whatsappUrl, '_blank');
    });
}

// --- GESTION DU MENU BURGER MOBILE ---
const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});