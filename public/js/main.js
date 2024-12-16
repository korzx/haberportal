document.addEventListener('DOMContentLoaded', function () {
    // Giriş ve kayıt formu için işlevsellik
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    // Kayıt formunun gönderilmesi
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Kayıt işlemi
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;
            // POST isteği ile backend'e gönder
        });
    }

    // Giriş formunun gönderilmesi
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Giriş işlemi
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            // POST isteği ile backend'e gönder
        });
    }
});
