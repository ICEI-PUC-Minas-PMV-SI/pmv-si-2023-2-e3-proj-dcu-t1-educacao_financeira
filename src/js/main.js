// Função para armazenar dados do usuário
function store(event) {
  event.preventDefault();
  let nome = document.getElementById('nomeId').value;
  let email = document.getElementById('emailId').value;
  let senha = document.getElementById('pswId').value;

  localStorage.setItem('nome', nome);
  localStorage.setItem('email', email);
  localStorage.setItem('senha', senha);

  // Redirecionar para a página de login após o cadastro
  window.location.href = 'login.html';
}

// Função para verificar se o usuário está logado
function check(event) {
  event.preventDefault();
  let emailInput = document.getElementById('unameId').value;
  let senhaInput = document.getElementById('pswId').value;

  // Obter dados do usuário do localStorage
  let email = localStorage.getItem('email');
  let senha = localStorage.getItem('senha');

  if(emailInput === email && senhaInput === senha) {
      // Redirecionar para a página inicial após o login bem-sucedido
      window.location.href = 'home.html';
      
      // Substituir o texto "Login" pela imagem do usuário
      document.getElementById('loginLink').style.display = 'none';
      document.getElementById('userImage').style.display = 'block';
  } else {
      alert('Email ou senha incorretos!');
  }
}
