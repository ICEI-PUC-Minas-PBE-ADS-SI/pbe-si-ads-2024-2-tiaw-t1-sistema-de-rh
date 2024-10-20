document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "usuario@exemplo.com" && password === "senha123") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar o usuário ou fazer outras ações
        window.location.href = "dashboard.html"; // Exemplo de redirecionamento
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
});