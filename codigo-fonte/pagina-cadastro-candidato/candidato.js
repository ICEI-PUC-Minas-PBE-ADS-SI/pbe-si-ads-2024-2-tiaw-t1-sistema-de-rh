// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');

    // Adiciona um evento de submit ao formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        const confirmeSenha = document.getElementById('confirmeSenha').value;

        // Validação dos campos
        if (nome.length < 4) {
            alert("O nome deve ter pelo menos 4 caracteres.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (senha !== confirmeSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        // Aqui você pode adicionar lógica para enviar os dados ao servidor

        // Mensagem de sucesso
        alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}`);

        // Limpa o formulário após o envio
        form.reset();
        window.location.href = '../pagina-login/login.html';
    });

    // Função para validar o formato do email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
