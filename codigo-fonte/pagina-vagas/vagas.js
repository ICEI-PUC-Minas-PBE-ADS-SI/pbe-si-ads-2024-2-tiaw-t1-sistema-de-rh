
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
    window.location.href = '../home-page/index.html';
});

// Atualizar a interface ao carregar a página
window.onload = function () {
    atualizarBotoes();
};

// Função para abrir o modal com os detalhes da vaga
function abrirDetalhesVaga(element) {
    const vaga = element.closest('.vaga'); // Obtenha o elemento da vaga
    const modal = document.getElementById('detalhesVagaModal');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const modalImg = document.getElementById('modalImg');
    const btnInteressar = document.getElementById('btnInteressar');

    // Preenche o modal com as informações da vaga
    modalTitulo.innerText = vaga.querySelector('h2').innerText;
    modalDescricao.innerText = vaga.querySelector('p').innerText;
    modalImg.src = vaga.querySelector('img').src;

    // Carrega as informações adicionais no modal
    const info = vaga.querySelector(`#info-${vaga.id}`);
    const requisitos = vaga.querySelector(`#requisitos-${vaga.id}`);
    const salario = vaga.querySelector(`#salario-${vaga.id}`);
    const contato = vaga.querySelector(`#contato-${vaga.id}`);

    document.getElementById('modalInfo').innerText = info ? info.innerText : '';
    document.getElementById('modalRequisitos').innerText = requisitos ? requisitos.innerText : '';
    document.getElementById('modalSalario').innerText = salario ? salario.innerText : '';
    document.getElementById('modalContato').innerText = contato ? contato.innerText : '';

    // Verifica se o usuário está logado para exibir o botão "Me Interessar"
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    btnInteressar.style.display = isLoggedIn ? 'inline-block' : 'none';

    // Exibe o modal
    modal.style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('detalhesVagaModal').style.display = 'none';
}

// Função para simular o interesse na vaga
function meInteressar() {
    alert("Você demonstrou interesse na vaga!");
}

