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

// Função para alternar o interesse na vaga
function alternarInteresse() {
    const modal = document.getElementById('detalhesVagaModal');
    const vagaId = modal.getAttribute('data-vaga-id'); // Obtém o ID da vaga
    const vaga = document.querySelector(`#${vagaId}`);
    const btnInteressar = document.getElementById('btnInteressar');

    if (vaga.classList.contains('interested')) {
        // Se já está interessado, remove o interesse
        vaga.classList.remove('interested');
        btnInteressar.innerText = "Me Interessar";
        alert("Você retirou seu interesse na vaga!");
    } else {
        // Se não está interessado, adiciona o interesse
        vaga.classList.add('interested');
        btnInteressar.innerText = "Retirar Interesse";
        alert("Você demonstrou interesse na vaga!");
    }

    fecharModal();
    aplicarFiltro(); // Atualiza o filtro se estiver marcado "Me Interessei"
}

// Função para aplicar o filtro de busca e interesse
function aplicarFiltro() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const interestedCheckbox = document.getElementById('interestedCheckbox').checked;
    const vagas = document.querySelectorAll('.vaga');

    vagas.forEach(vaga => {
        const titulo = vaga.querySelector('h2').innerText.toLowerCase();
        const descricao = vaga.querySelector('p').innerText.toLowerCase();
        const isInterested = vaga.classList.contains('interested');

        // Exibe ou oculta a vaga conforme os critérios de busca e filtro
        if ((titulo.includes(searchInput) || descricao.includes(searchInput)) &&
            (!interestedCheckbox || isInterested)) {
            vaga.style.display = 'block';
        } else {
            vaga.style.display = 'none';
        }
    });
}
// Função para abrir o modal com os detalhes da vaga
function abrirDetalhesVaga(element) {
    const vaga = element.closest('.vaga');
    const modal = document.getElementById('detalhesVagaModal');
    modal.setAttribute('data-vaga-id', vaga.id); // Define o ID da vaga no modal

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

    // Altera o texto do botão "Me Interessar" conforme o estado atual
    btnInteressar.innerText = vaga.classList.contains('interested') ? "Retirar Interesse" : "Me Interessar";

    // Exibe o modal
    modal.style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('detalhesVagaModal').style.display = 'none';
}



// Adiciona eventos ao input de busca e ao checkbox de interesse
document.getElementById('searchInput').addEventListener('input', aplicarFiltro);
document.getElementById('interestedCheckbox').addEventListener('change', aplicarFiltro);


// Função para carregar vagas do localStorage e exibir na página
function carregarVagas() {
    const vagasContainer = document.getElementById('vagasContainer');
    vagasContainer.innerHTML = ''; // Limpa as vagas existentes

    // Recupera as vagas salvas do localStorage
    const vagas = JSON.parse(localStorage.getItem('vagas')) || []; 

    // Cria elementos para cada vaga
    vagas.forEach((vaga, index) => {
        const vagaElement = document.createElement('div');
        vagaElement.classList.add('vaga');
        vagaElement.setAttribute('id', `vaga${index + 1}`);

        vagaElement.innerHTML = `
            <img src="${vaga.imagemUrl || '../imagens/vagas_fotos/default.jpg'}" alt="Imagem Vaga ${vaga.nome}" class="img-vaga">
            <h2>${vaga.nome}</h2>
            <p>${vaga.descricao}</p>
            <p>Empresa: ${vaga.empresa}</p> <!-- Exibe o CNPJ como parte da informação da vaga -->
            <p>Requisitos: ${vaga.requisitos}</p> <!-- Exibe a cidade -->
            <p>Salario: ${vaga.salario}</p> <!-- Exibe o estado -->
            <a href="#" class="saiba-mais" onclick='abrirDetalhesVagaCadastrada(${JSON.stringify(vaga)})'>Saiba Mais</a>
        `;
        
        vagasContainer.appendChild(vagaElement);
    });
}


// Função para abrir o modal com os detalhes da vaga
function abrirDetalhesVaga(element) {
    const vaga = element.closest('.vaga');
    const modal = document.getElementById('detalhesVagaModal');
    modal.setAttribute('data-vaga-id', vaga.id);

    document.getElementById('modalImg').src = vaga.querySelector("img").src;
    document.getElementById('modalTitulo').innerText = vaga.querySelector("h2").innerText;
    document.getElementById('modalDescricao').innerText = vaga.querySelector("p").innerText;
    document.getElementById('modalInfo').innerText = vaga.querySelector(`#info-${vaga.id}`).innerText;
    document.getElementById('modalRequisitos').innerText = vaga.querySelector(`#requisitos-${vaga.id}`).innerText;
    document.getElementById('modalSalario').innerText = vaga.querySelector(`#salario-${vaga.id}`).innerText;
    document.getElementById('modalContato').innerText = vaga.querySelector(`#contato-${vaga.id}`).innerText;

    modal.style.display = "flex"; // Exibe o modal
}
function abrirDetalhesVagaCadastrada(vaga) {
    // Recupera as informações da vaga cadastrada
    const titulo = vaga.nome;
    const descricao = vaga.descricao;
    const info = vaga.empresa; // Presumindo que "empresa" está sendo usada como info
    const requisitos = vaga.requisitos;
    const salario = vaga.salario;
    const contato = vaga.contato;
    const imgSrc = vaga.imagem || '../imagens/vagas_fotos/'; // Ajuste a imagem padrão

    // Atualiza o conteúdo do modal
    document.getElementById('modalTituloCadastrada').textContent = titulo;
    document.getElementById('modalDescricaoCadastrada').textContent = descricao;
    document.getElementById('modalInfoCadastrada').textContent = info;
    document.getElementById('modalRequisitosCadastrada').textContent = requisitos;
    document.getElementById('modalSalarioCadastrada').textContent = salario;
    document.getElementById('modalContatoCadastrada').textContent = contato;
    document.getElementById('modalImgCadastrada').src = imgSrc; // Atualiza a imagem no modal

    // Exibe o modal
    document.getElementById('detalhesVagaCadastradaModal').style.display = 'block';
}
function fecharModalCadastrada() {
    document.getElementById('detalhesVagaCadastradaModal').style.display = 'none';
}


// Função para fechar o modal
function fecharModal() {
    document.getElementById('detalhesVagaModal').style.display = 'none';
}

// Carrega as vagas ao iniciar a página
window.onload = function () {
    carregarVagas(); // Carrega e exibe as vagas do localStorage
    atualizarBotoes(); // Chama a função para atualizar os botões
};


function limparVagas() {
    localStorage.removeItem('vagas'); // Remove as vagas do localStorage
    carregarVagas(); // Atualiza a visualização das vagas
    alert('Todas as vagas foram limpas.'); // Mensagem de confirmação
}
