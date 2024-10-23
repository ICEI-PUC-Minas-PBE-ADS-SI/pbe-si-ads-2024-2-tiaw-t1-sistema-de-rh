// Validação básica do formulário
document.getElementById("form").addEventListener("submit", function (event) {
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value; 
    let cnpj = document.getElementById("cnpj").value;
    let senha = document.getElementById("senha").value;

    let isValid = true; 

    // Verifica se o título da vaga tem pelo menos 4 caracteres
    if (nome.length < 4) {
        alert("O título da vaga deve ter pelo menos 4 caracteres.");
        isValid = false; // Sinaliza que houve erro
    }

    // Verifica se a descrição da vaga foi preenchida
    if (descricao.length === 0) {
        alert("Por favor, preencha a descrição da vaga.");
        isValid = false; // Sinaliza que houve erro
    }

    // Verifica se as informações da empresa (CNPJ) foram preenchidas
    if (cnpj.length === 0) {
        alert("Digite as informações da empresa.");
        isValid = false; 
    }

    // Verifica se o contato tem pelo menos 6 caracteres
    if (senha.length < 6) {
        alert("O contato deve ter pelo menos 6 caracteres.");
        isValid = false; 
    }

    // Se não houver nenhum erro, exibe a mensagem de sucesso
    if (!isValid) {
        event.preventDefault(); 
    } else {
        alert("Vaga cadastrada com sucesso!"); 
    }
});

// Interação para alterar a cor do botão ao passar o mouse
let btn = document.getElementById("btn");

btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "#145c32";
});

btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "#198754";
});

function atualizarBotoes() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Elementos dos botões
    const btnCadastro = document.getElementById('cadastro');
    const btnEntrar = document.getElementById('entrar');
    const btnCadastrarVaga = document.getElementById('cadastrarVaga');
    const btnMeuPerfil = document.getElementById('meuPerfil');
    const btnSair = document.getElementById('sair');

    if (isLoggedIn) {
        // Usuário logado: esconder "Cadastro" e "Entrar", mostrar "Meu Perfil", "Cadastrar Vaga" e "Sair"
        btnCadastro.classList.add('d-none');
        btnEntrar.classList.add('d-none');
        btnCadastrarVaga.classList.remove('d-none');
        btnMeuPerfil.classList.remove('d-none');
        btnSair.classList.remove('d-none');
    } else {
        // Usuário não logado: mostrar "Cadastro" e "Entrar", esconder "Meu Perfil", "Cadastrar Vaga" e "Sair"
        btnCadastro.classList.remove('d-none');
        btnEntrar.classList.remove('d-none');
        btnCadastrarVaga.classList.add('d-none');
        btnMeuPerfil.classList.add('d-none');
        btnSair.classList.add('d-none');
    }
}

// Ação para o botão "Sair"
document.getElementById('sair').addEventListener('click', function () {
    // Removendo o estado de login do localStorage
    localStorage.setItem('isLoggedIn', false);

    // Atualiza a interface
    atualizarBotoes();

    alert('Você saiu com sucesso!');
    
    // Redireciona para a página inicial após logout
    window.location.href = 'index.html';
});

// Atualizar a interface ao carregar a página
window.onload = function () {
    atualizarBotoes();
};
