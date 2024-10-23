// Função para autenticar o login
function autenticarLogin(email, senha) {
    // Busca no localStorage a lista de empresas
    const dbEmpresas = JSON.parse(localStorage.getItem('dbEmpresas')) || [];

    // Verifica se existe uma empresa com o email e a senha fornecidos
    const empresaEncontrada = dbEmpresas.find(empresa => empresa.email === email && empresa.senha === senha);

    if (empresaEncontrada) {
        return true;  // Login válido
    } else {
        return false;  // Login inválido
    }
}

// Função para atualizar o estado de login
function realizarLogin() {
    // Pega os valores de email e senha fornecidos pelo formulário
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    // Verifica se o login é válido
    const loginValido = autenticarLogin(email, senha);

    if (loginValido) {
        // Se o login for válido, salva o estado de login no localStorage
        localStorage.setItem('isLoggedIn', true);
        alert('Login realizado com sucesso!');

        // Redireciona o usuário para a Home-page
        window.location.href = '../home-page/index.html';
    } else {
        // Se o login for inválido, exibe uma mensagem de erro
        alert('Email ou senha incorretos.');
    }
}

// Evento de submit no formulário de login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Evita o recarregamento da página
    realizarLogin();  // Chama a função para realizar o login
});
