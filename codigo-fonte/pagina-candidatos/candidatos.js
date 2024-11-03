document.addEventListener("DOMContentLoaded", function () {
    const listaCandidatos = document.getElementById('listaCandidatos');
    const inputPesquisa = document.getElementById('pesquisaCandidato');

    function exibirCandidatosFicticios() {
        const candidatosFicticios = [
            {
                nome: 'João Silva',
                vaga: 'Desenvolvedor Back-End',
                escolaridade: 'Graduação em Ciência da Computação',
                contato: 'joao.silva@email.com',
                imagem: 'https://cdn-icons-png.flaticon.com/512/6998/6998118.png'
            },
            {
                nome: 'Maria Oliveira',
                vaga: 'Designer Gráfico',
                escolaridade: 'Graduação em Design',
                contato: 'maria.oliveira@email.com',
                imagem: 'https://cdn-icons-png.flaticon.com/512/1207/1207984.png'
            },
            {
                nome: 'Pedro Almeida',
                vaga: 'Gerente de Projetos',
                escolaridade: 'MBA em Gestão de Projetos',
                contato: 'pedro.almeida@email.com',
                imagem: 'https://cdn-icons-png.flaticon.com/512/6998/6998118.png'
            },
            {
                nome: 'Ana Costa',
                vaga: 'Desenvolvedora Front-End',
                escolaridade: 'Graduação em Sistemas de Informação',
                contato: 'ana.costa@email.com',
                imagem: 'https://cdn-icons-png.flaticon.com/512/1207/1207984.png'
            },
        ];

        candidatosFicticios.forEach(candidato => {
            const card = criarCardCandidato(candidato);
            listaCandidatos.innerHTML += card;
        });
    }

    function criarCardCandidato(candidato) {
        return `
            <div class="col-md-4 mb-4 candidato-card" 
                 data-nome="${candidato.nome}" 
                 data-vaga="${candidato.vaga}" 
                 data-escolaridade="${candidato.escolaridade}" 
                 data-contato="${candidato.contato}">
                <div class="card h-100">
                    <img src="${candidato.imagem}" class="card-img-top" alt="${candidato.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${candidato.nome}</h5>
                        <p class="card-text"><strong>Vaga Procurada:</strong> ${candidato.vaga}</p>
                        <p class="card-text"><strong>Contato:</strong> ${candidato.contato}</p>
                        <button class="btn btn-success" 
                                data-bs-toggle="modal" 
                                data-bs-target="#modalCandidato" 
                                onclick="abrirModal('${candidato.nome}', '${candidato.vaga}', '${candidato.escolaridade}', '${candidato.contato}')">
                            Ver Detalhes
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    

    // Função para exibir candidatos cadastrados no sistema (localStorage)
    function exibirCandidatosCadastrados() {
        let dbCandidatos = JSON.parse(localStorage.getItem('dbCandidatos')) || [];

        dbCandidatos.forEach(candidato => {
            const imagem = candidato.genero === 'feminino' 
                ? 'https://cdn-icons-png.flaticon.com/512/1207/1207984.png' 
                : 'https://cdn-icons-png.flaticon.com/512/6998/6998118.png';

            const card = criarCardCandidato({
                nome: candidato.nome, 
                vaga: candidato.vaga, 
                escolaridade: candidato.escolaridade, 
                contato: candidato.email, 
                imagem: imagem
            });
            listaCandidatos.innerHTML += card;
        });
    }

    // Função para abrir o modal com as informações do candidato
    window.abrirModal = function(nome, vaga, escolaridade, contato) {
        document.getElementById('modalNome').innerText = nome;
        document.getElementById('modalVaga').innerText = vaga;
        document.getElementById('modalEscolaridade').innerText = escolaridade;
        document.getElementById('modalContato').innerText = contato;
    }

    function filtrarCandidatos() {
        const filtro = inputPesquisa.value.toLowerCase();
        const candidatos = document.querySelectorAll('.candidato-card');

        candidatos.forEach(candidato => {
            const nome = candidato.getAttribute('data-nome').toLowerCase();
            const vaga = candidato.getAttribute('data-vaga').toLowerCase();

            if (nome.includes(filtro) || vaga.includes(filtro)) {
                candidato.style.display = '';
            } else {
                candidato.style.display = 'none';
            }
        });
    }

    inputPesquisa.addEventListener('input', filtrarCandidatos);

    window.onload = function () {
        exibirCandidatosFicticios();
        exibirCandidatosCadastrados();
        atualizarBotoes();
    };

    function atualizarBotoes() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userType = localStorage.getItem('userType');

        const btnCadastro = document.getElementById('cadastro');
        const btnEntrar = document.getElementById('entrar');
        const btnCadastrarVaga = document.getElementById('cadastrarVaga');
        const btnMeuPerfil = document.getElementById('meuPerfil');
        const btnSair = document.getElementById('sair');
        const btnCadastroHome = document.getElementById('cadastrarVagas');

        if (isLoggedIn) {
            btnCadastro.classList.add('d-none');
            btnEntrar.classList.add('d-none');
            btnMeuPerfil.classList.remove('d-none');
            btnSair.classList.remove('d-none');

            if (userType === 'empresa') {
                btnCadastrarVaga.classList.remove('d-none');
                btnCadastroHome.classList.remove('d-none');
            } else {
                btnCadastrarVaga.classList.add('d-none');
                btnCadastroHome.classList.add('d-none');
            }
        } else {
            btnCadastro.classList.remove('d-none');
            btnEntrar.classList.remove('d-none');
            btnCadastrarVaga.classList.add('d-none');
            btnMeuPerfil.classList.add('d-none');
            btnSair.classList.add('d-none');
            btnCadastroHome.classList.add('d-none');
        }
    }

    document.getElementById('sair').addEventListener('click', function () {
        localStorage.setItem('isLoggedIn', false);
        localStorage.removeItem('userType');

        atualizarBotoes();
        alert('Você saiu com sucesso!');
        window.location.href = '../home-page/index.html';
    });
});