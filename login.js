document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (!storedUser) {
        errorMessage.textContent = 'Nenhuma conta foi encontrada.';
        return;
      }

      if (storedUser.email !== email || storedUser.password !== password) {
        errorMessage.textContent = 'Email ou senha incorretos.';
        return;
      }

      // Se as informações de login estiverem corretas, exiba um alerta e redirecione para index.html
      alert('Login bem-sucedido!');
      window.location.href = 'index.html';
      
      // Limpar os campos de email e senha
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    });
  }
});
