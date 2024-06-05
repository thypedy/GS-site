document.addEventListener('DOMContentLoaded', () => {
  const createAccountForm = document.getElementById('createAccountForm');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  if (createAccountForm) {
    createAccountForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não coincidem.';
        return;
      }

      const user = {
        username,
        email,
        password,
      };

      localStorage.setItem('user', JSON.stringify(user));
      successMessage.textContent = 'Conta criada com sucesso!';
      successMessage.style.display = 'block';

      // Exibir alerta
      alert('Conta criada com sucesso!');

      // Redirecionar para a página de login após o alerta ser fechado
      window.location.href = 'login.html';

      // Limpar os campos de username, email, senha e confirmação de senha
      document.getElementById('username').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('confirmPassword').value = '';
    });
  }

  const alertLink = document.getElementById('alert-link');
  if (alertLink) {
    alertLink.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }
});
