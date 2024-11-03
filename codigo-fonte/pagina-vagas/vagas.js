function atualizarBotoes() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userType = localStorage.getItem("userType"); // Recupera o tipo de usuário
  
    // Elementos dos botões
    const btnCadastro = document.getElementById("cadastro");
    const btnEntrar = document.getElementById("entrar");
    const btnCadastrarVaga = document.getElementById("cadastrarVaga");
    const btnMeuPerfil = document.getElementById("meuPerfil");
    const btnSair = document.getElementById("sair");
    const btnLimparVagas = document.getElementById("limparVagas"); // Seleciona o botão "Limpar Vagas"
  
    if (isLoggedIn) {
      // Usuário logado: esconder "Cadastro" e "Entrar", mostrar "Meu Perfil" e "Sair"
      btnCadastro.classList.add("d-none");
      btnEntrar.classList.add("d-none");
      btnMeuPerfil.classList.remove("d-none");
      btnSair.classList.remove("d-none");
  
      // Mostrar "Cadastrar Vaga" apenas para empresas
      if (userType === "empresa") {
        btnCadastrarVaga.classList.remove("d-none");
        btnLimparVagas.classList.remove("d-none"); // Mostra o botão "Limpar Vagas" para empresas
      } else {
        btnCadastrarVaga.classList.add("d-none");
        btnLimparVagas.classList.add("d-none"); // Esconde o botão "Limpar Vagas" para outros tipos de usuário
      }
    } else {
      // Usuário não logado: mostrar "Cadastro" e "Entrar", esconder "Meu Perfil", "Cadastrar Vaga" e "Sair"
      btnCadastro.classList.remove("d-none");
      btnEntrar.classList.remove("d-none");
      btnCadastrarVaga.classList.add("d-none");
      btnMeuPerfil.classList.add("d-none");
      btnSair.classList.add("d-none");
      btnLimparVagas.classList.add("d-none"); // Esconde o botão "Limpar Vagas" quando não logado
    }
  }
  

// Ação para o botão "Sair"
document.getElementById("sair").addEventListener("click", function () {
  localStorage.setItem("isLoggedIn", false);
  localStorage.removeItem("userType"); // Remove o tipo de usuário ao sair

  atualizarBotoes();
  alert("Você saiu com sucesso!");

  // Redireciona para a página inicial após logout
  window.location.href = "../home-page/index.html";
});

// Função para alternar o interesse na vaga
function alternarInteresse() {
  const modal = document.getElementById("detalhesVagaModal");
  const vagaId = modal.getAttribute("data-vaga-id"); // Obtém o ID da vaga
  const vaga = document.querySelector(`#${vagaId}`);
  const btnInteressar = document.getElementById("btnInteressar");

  if (vaga.classList.contains("interested")) {
    // Se já está interessado, remove o interesse
    vaga.classList.remove("interested");
    alert("Você retirou seu interesse na vaga!");
  } else {
    // Se não está interessado, adiciona o interesse
    vaga.classList.add("interested");
    alert("Você demonstrou interesse na vaga!");
  }

  fecharModal();
  aplicarFiltro(); // Atualiza o filtro se estiver marcado "Me Interessei"
}

// Função para aplicar o filtro de busca e interesse
function aplicarFiltro() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const interestedCheckbox =
    document.getElementById("interestedCheckbox").checked;
  const vagas = document.querySelectorAll(".vaga");

  vagas.forEach((vaga) => {
    const titulo = vaga.querySelector("h2").innerText.toLowerCase();
    const descricao = vaga.querySelector("p").innerText.toLowerCase();
    const isInterested = vaga.classList.contains("interested");

    // Exibe ou oculta a vaga conforme os critérios de busca e filtro
    if (
      (titulo.includes(searchInput) || descricao.includes(searchInput)) &&
      (!interestedCheckbox || isInterested)
    ) {
      vaga.style.display = "block";
    } else {
      vaga.style.display = "none";
    }
  });
}

// Adiciona eventos ao input de busca e ao checkbox de interesse
document.getElementById("searchInput").addEventListener("input", aplicarFiltro);
document
  .getElementById("interestedCheckbox")
  .addEventListener("change", aplicarFiltro);

function carregarVagas() {
  const vagasContainer = document.getElementById("vagasContainer");
  vagasContainer.innerHTML = ""; // Limpa as vagas existentes

  // Recupera as vagas salvas do localStorage
  const vagas = JSON.parse(localStorage.getItem("vagas")) || [];

  // Cria elementos para cada vaga
  vagas.forEach((vaga) => {
    const vagaElement = document.createElement("div");
    vagaElement.classList.add("vaga");
    vagaElement.setAttribute("id", `vaga${vaga.id}`); // Use o ID único

    vagaElement.innerHTML = `
          <img src="${
            vaga.imagemUrl || "../imagens/vagas_fotos/default.jpg"
          }" alt="Imagem Vaga ${vaga.nome}" class="img-vaga">
          <h2>${vaga.nome}</h2>
          <p>${vaga.descricao}</p>
           <p id="salario-${vaga.id}">Salário: ${vaga.salario}</p>
           <p id="contato-${vaga.id}">Contato: ${vaga.contato}</p>
           <a href="#" class="saiba-mais" onclick='abrirDetalhesVaga(this)'>Saiba Mais</a>
           <div class="detalhes" style="display:none;">
          </div>
      `;

    vagasContainer.appendChild(vagaElement);
  });
}

function abrirDetalhesVaga(element) {
  const vaga = element.closest(".vaga"); // Encontra a vaga correta
  const modal = document.getElementById("detalhesVagaModal");
  modal.setAttribute("data-vaga-id", vaga.id);

  // Define a imagem e os textos do modal
  document.getElementById("modalImg").src = vaga.querySelector("img").src;
  document.getElementById("modalTitulo").innerText =
    vaga.querySelector("h2").innerText;
  document.getElementById("modalDescricao").innerText =
    vaga.querySelector("p").innerText;

  // Captura as informações adicionais corretamente
  const requisitos = vaga.querySelector(`#requisitos-${vaga.id}`);
  const salario = vaga.querySelector(`#salario-${vaga.id}`);
  const contato = vaga.querySelector(`#contato-${vaga.id}`);

  // Atribui os valores aos elementos do modal, deixando vazio se não disponível
  document.getElementById("modalRequisitos").innerText = requisitos
    ? requisitos.innerText
    : ``;
  document.getElementById("modalSalario").innerText = salario
    ? salario.innerText
    : "";
  document.getElementById("modalContato").innerText = contato
    ? contato.innerText
    : "";

  modal.style.display = "flex"; // Exibe o modal
}

// Função para fechar o modal
function fecharModal() {
  document.getElementById("detalhesVagaModal").style.display = "none";
}

// Carrega as vagas ao iniciar a página
window.onload = function () {
  carregarVagas(); // Carrega e exibe as vagas do localStorage
  atualizarBotoes(); // Chama a função para atualizar os botões
};

function limparVagas() {
  localStorage.removeItem("vagas"); // Remove as vagas do localStorage
  carregarVagas(); // Atualiza a visualização das vagas
  alert("Todas as vagas foram limpas."); // Mensagem de confirmação
}
