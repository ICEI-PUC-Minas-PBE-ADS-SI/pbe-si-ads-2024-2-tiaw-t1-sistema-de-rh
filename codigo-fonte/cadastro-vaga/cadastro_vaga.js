document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();



    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    let empresa = document.getElementById("cnpj").value;
    let requisitos = document.getElementById("cidade").value;
    let salario = document.getElementById("estado").value;
    let contato = document.getElementById("senha").value;
    let imagemUrl = document.getElementById("imagemUrl").value; // Obter URL da imagem

    let isValid = true;

    if (nome.length < 4) {
        alert("O título da vaga deve ter pelo menos 4 caracteres.");
        isValid = false;
    }

    if (descricao.length === 0) {
        alert("Por favor, preencha a descrição da vaga.");
        isValid = false;
    }

    if (empresa.length === 0) {
        alert("Digite as informações da empresa.");
        isValid = false;
    }

    if (requisitos.length < 6) {
        alert("O contato deve ter pelo menos 6 caracteres.");
        isValid = false;
    }

    if (!isValid) return;

    const vaga = {
        nome,
        descricao,
        empresa,
        requisitos,
        salario,
        contato,
        imagemUrl, // Adicionar URL da imagem ao objeto
    };

    let vagas = JSON.parse(localStorage.getItem("vagas")) || [];
    vagas.push(vaga);
    localStorage.setItem("vagas", JSON.stringify(vagas));

    alert("Vaga cadastrada com sucesso!");
    document.getElementById("form").reset();
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
    const userType = localStorage.getItem('userType'); // Recupera o tipo de usuário

    // Elementos dos botões
    const btnCadastro = document.getElementById('cadastro');
    const btnEntrar = document.getElementById('entrar');
    const btnCadastrarVaga = document.getElementById('cadastrarVaga');
    const btnMeuPerfil = document.getElementById('meuPerfil');
    const btnSair = document.getElementById('sair');
    const btnCadastroHome = document.getElementById('cadastrarVagas');

    if (isLoggedIn) {
        // Usuário logado: esconder "Cadastro" e "Entrar", mostrar "Meu Perfil" e "Sair"
        btnCadastro.classList.add('d-none');
        btnEntrar.classList.add('d-none');
        btnMeuPerfil.classList.remove('d-none');
        btnSair.classList.remove('d-none');

        // Mostrar "Cadastrar Vaga" apenas para empresas
        if (userType === 'empresa') {
            btnCadastrarVaga.classList.remove('d-none');
            btnCadastroHome.classList.remove('d-none');
        } else {
            btnCadastrarVaga.classList.add('d-none');
            btnCadastroHome.classList.add('d-none');
        }
    } else {
        // Usuário não logado: mostrar "Cadastro" e "Entrar", esconder "Meu Perfil", "Cadastrar Vaga" e "Sair"
        btnCadastro.classList.remove('d-none');
        btnEntrar.classList.remove('d-none');
        btnCadastrarVaga.classList.add('d-none');
        btnMeuPerfil.classList.add('d-none');
        btnSair.classList.add('d-none');
        btnCadastroHome.classList.add('d-none');
    }
}


// Ação para o botão "Sair"
document.getElementById('sair').addEventListener('click', function () {
    localStorage.setItem('isLoggedIn', false);
    localStorage.removeItem('userType'); // Remove o tipo de usuário ao sair

    atualizarBotoes();
    alert('Você saiu com sucesso!');
    
    // Redireciona para a página inicial após logout
    window.location.href = 'index.html';
});


// Atualizar a interface ao carregar a página
window.onload = function () {
    atualizarBotoes();
}