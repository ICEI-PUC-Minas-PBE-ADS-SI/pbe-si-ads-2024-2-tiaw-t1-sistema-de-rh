document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o usuário já está logado
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (usuarioLogado) {
        // Exibe os links de "Cadastrar Vaga" e "Meu Perfil" se o usuário estiver logado
        document.getElementById("cadastrarVaga").classList.remove("d-none");
        document.getElementById("meuPerfil").classList.remove("d-none");
        document.getElementById("cadastro").classList.add("d-none"); // Esconde o link de "Cadastro"
        document.getElementById("entrar").classList.add("d-none"); // Esconde o link de "Entrar"
        document.getElementById("sair").classList.remove("d-none"); // Exibe o link de "Sair"
    }

    // Função para o formulário de login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Obtém o email e senha armazenados no localStorage durante o cadastro
        const emailCadastrado = localStorage.getItem('emailCadastrado');
        const senhaCadastrada = localStorage.getItem('senhaCadastrada');

        // Verifica se o email e senha coincidem com os dados armazenados
        if (email === emailCadastrado && password === senhaCadastrada) {
            alert("Login bem-sucedido!");

            // Armazena o estado de login no localStorage
            localStorage.setItem("usuarioLogado", true);

            // Modifica o header para exibir os links corretos
            document.getElementById("cadastrarVaga").classList.remove("d-none");
            document.getElementById("meuPerfil").classList.remove("d-none");
            document.getElementById("cadastro").classList.add("d-none"); // Esconde o link de "Cadastro"
            document.getElementById("entrar").classList.add("d-none"); // Esconde o link de "Entrar"
            document.getElementById("sair").classList.remove("d-none"); // Exibe o link de "Sair"

            // Aqui você pode redirecionar o usuário ou fazer outras ações
            //window.location.href = "dashboard.html"; // Exemplo de redirecionamento
        } else {
            alert("Email ou senha incorretos. Tente novamente.");
        }
    });

    // Função para o botão de "Sair"
    document.getElementById("sair").addEventListener("click", function() {
        // Remove as informações de login do localStorage
        localStorage.removeItem("usuarioLogado");

        // Recarrega a página para aplicar as mudanças
        window.location.href = "login.html"; // Exemplo de redirecionamento para a página de login
    });
});