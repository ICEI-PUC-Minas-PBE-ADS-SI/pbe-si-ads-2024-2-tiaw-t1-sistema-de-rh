function atualizarBotoes() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userType = localStorage.getItem("userType"); // Recupera o tipo de usuário

  // Elementos dos botões
  const btnCadastro = document.getElementById("cadastro");
  const btnEntrar = document.getElementById("entrar");
  const btnCadastrarVaga = document.getElementById("cadastrarVaga");
  const btnMeuPerfil = document.getElementById("meuPerfil");
  const btnSair = document.getElementById("sair");
  const btnCadastroHome = document.getElementById("cadastrarVagas");

  if (isLoggedIn) {
    // Usuário logado: esconder "Cadastro" e "Entrar", mostrar "Meu Perfil" e "Sair"
    btnCadastro.classList.add("d-none");
    btnEntrar.classList.add("d-none");
    btnMeuPerfil.classList.remove("d-none");
    btnSair.classList.remove("d-none");

    // Mostrar "Cadastrar Vaga" apenas para empresas
    if (userType === "empresa") {
      btnCadastrarVaga.classList.remove("d-none");
      btnCadastroHome.classList.remove("d-none");
    } else {
      btnCadastrarVaga.classList.add("d-none");
      btnCadastroHome.classList.add("d-none");
    }
  } else {
    // Usuário não logado: mostrar "Cadastro" e "Entrar", esconder "Meu Perfil", "Cadastrar Vaga" e "Sair"
    btnCadastro.classList.remove("d-none");
    btnEntrar.classList.remove("d-none");
    btnCadastrarVaga.classList.add("d-none");
    btnMeuPerfil.classList.add("d-none");
    btnSair.classList.add("d-ne oone");
    btnCadastroHome.classList.add("d-none");
  }
}

// Ação para o botão "Sair"
document.getElementById("sair").addEventListener("click", function () {
  localStorage.setItem("isLoggedIn", false);
  localStorage.removeItem("userType"); // Remove o tipo de usuário ao sair
  localStorage.removeItem("loggedUser");

  atualizarBotoes();
  alert("Você saiu com sucesso!");

  // Redireciona para a página inicial após logout
  window.location.href = "../home-page-index.html";
});

// Função para carregar os dados do perfil
function carregarPerfil() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser")); // Recupera o usuário logado
    const userType = localStorage.getItem("userType"); // Tipo de usuário
  
    if (!loggedUser) {
      alert("Nenhum usuário logado. Redirecionando para a página de login.");
      window.location.href = "../pagina-login/login.html"; // Redireciona se não houver usuário logado
      return;
    }
  
    // Preenche os dados no HTML
    document.getElementById("user-name").textContent =
      loggedUser.nome || "Não informado";
    document.getElementById("user-email").textContent =
      loggedUser.email || "Não informado";
  
    const avatar = document.getElementById("avatar"); // Alvo da imagem do avatar
    const extraInfo = document.getElementById("extra-info");
  
    if (userType === "empresa") {
      // Informações e avatar para empresas
      extraInfo.innerHTML = `
        <p><strong>CNPJ:</strong> ${loggedUser.cnpj || "Não informado"}</p>
        <p><strong>Cidade:</strong> ${loggedUser.cidade || "Não informado"}</p>
        <p><strong>Estado:</strong> ${loggedUser.estado || "Não informado"}</p>
      `;
      avatar.src = "../imagens/logos/pessoa.png"; // Avatar específico para empresas
    } else if (userType === "candidato") {
      // Informações e avatar para candidatos
      extraInfo.innerHTML = `
        <p><strong>Gênero:</strong> ${loggedUser.genero || "Não informado"}</p>
        <p><strong>Escolaridade:</strong> ${loggedUser.escolaridade || "Não informado"}</p>
        <p><strong>Vaga de Interesse:</strong> ${loggedUser.vaga || "Não informado"}</p>
      `;
  
      avatar.src = "../imagens/logos/pessoa.png";
    }
  }
  

// Função para realizar logout
function realizarLogout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userType");
  localStorage.removeItem("loggedUser");
  window.location.href = "../pagina-login/login.html";
}

// Adiciona eventos para carregar o perfil e gerenciar logout
document.addEventListener("DOMContentLoaded", carregarPerfil);
document.getElementById("sair").addEventListener("click", realizarLogout);

// Atualizar a interface ao carregar a página
window.onload = function () {
  atualizarBotoes();
};
