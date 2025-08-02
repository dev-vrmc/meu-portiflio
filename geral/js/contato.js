/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xtpl9bs', 'template_mf8ym3y', '#contact-form', 'r2ioH7FIPk8j6d_OU')
    .then(() => {
        contactMessage.textContent = '✅ Obrigado por entrar em contato! Responderei o mais rápido possível.';
        contactMessage.classList.remove('hidden', 'error');
        contactMessage.classList.add('success');

        setTimeout(() => {
            contactMessage.classList.add('hidden');
            contactMessage.textContent = '';
        }, 5000);

        contactForm.reset();
    }, () => {
        contactMessage.textContent = '❌ Erro ao enviar. Por favor, tente novamente ou me chame diretamente no email, Instagram, Linkedin ou Github.';
        contactMessage.classList.remove('hidden', 'success');
        contactMessage.classList.add('error');
    });
};

contactForm.addEventListener('submit', sendEmail);