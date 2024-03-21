document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        if (email.trim() === '' || password.trim() === '') {
            alert('Por favor completa todos los campos antes de iniciar sesión.');
        } else {
            window.location.href = 'http://127.0.0.1:5500/index.html';
        }
    });
});

