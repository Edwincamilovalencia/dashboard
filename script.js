
// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Navbar shrink on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
});

// Configuración de EmailJS
(function() {
    emailjs.init('eiaRBfy6I2Dacouy4'); // Inicializa EmailJS con tu User ID
})();

// Enviar el formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Enviar el correo con EmailJS
    emailjs.send('service_3mxh4gf', 'template_dvrtmwe', {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        alert('Mensaje enviado con éxito!');
        form.reset(); // Limpia el formulario después de enviar
    }, function(error) {
        alert('Error al enviar el mensaje: ' + JSON.stringify(error));
    });
});

    src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js"

