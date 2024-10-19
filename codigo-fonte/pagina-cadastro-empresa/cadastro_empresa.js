document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o usuário já realizou o cadastro
    const cadastroFeito = localStorage.getItem("usuarioCadastrado");

    if (cadastroFeito) {
        // Exibe os links de "Cadastrar Vaga" e "Meu Perfil" se o usuário estiver cadastrado
        document.getElementById("cadastrarVaga").classList.remove("d-none");
        document.getElementById("meuPerfil").classList.remove("d-none");
        document.getElementById("cadastro").classList.add("d-none"); // Esconde o link de "Cadastro"
        document.getElementById("entrar").classList.add("d-none"); // Esconde o link de "Entrar"
        document.getElementById("sair").classList.remove("d-none"); // Exibe o link de "Sair"
    }

    // Função para capturar os dados do formulário e validar o cadastro
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores dos campos do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const cnpj = document.getElementById("cnpj").value;
        const cidade = document.getElementById("cidade").value;
        const estado = document.getElementById("estado").value;
        const senha = document.getElementById("senha").value;
        const confirmeSenha = document.getElementById("confirmeSenha").value;

        // Verifica se as senhas coincidem
        if (senha !== confirmeSenha) {
            alert("As senhas não coincidem. Tente novamente.");
            return;
        }

        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!nome || !email || !cnpj || !cidade || !estado || !senha || !confirmeSenha) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Armazena os dados do cadastro no localStorage
        localStorage.setItem("usuarioCadastrado", true);

        // Exibe mensagem de sucesso
        alert("Cadastro realizado com sucesso!");

        // Exibe os links de "Cadastrar Vaga", "Meu Perfil" e "Sair", e esconde "Cadastro" e "Entrar"
        document.getElementById("cadastrarVaga").classList.remove("d-none");
        document.getElementById("meuPerfil").classList.remove("d-none");
        document.getElementById("cadastro").classList.add("d-none");
        document.getElementById("entrar").classList.add("d-none");
        document.getElementById("sair").classList.remove("d-none"); // Exibe o botão "Sair"

        // redirecionar o usuário após o cadastro
        //window.location.href = "../pagina-perfil/perfil.html"; 
    });

    // Função para o botão de "Sair"
    document.getElementById("sair").addEventListener("click", function() {
        // Remove as informações de cadastro do localStorage
        localStorage.removeItem("usuarioCadastrado");

        // Recarrega a página para aplicar as mudanças
        window.location.href = "../pagina-tipo-cadastro/tipo.html";
    });
});