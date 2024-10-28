// Função para autenticar o login de empresas
function autenticarLogin(email, senha) {
    const dbEmpresas = JSON.parse(localStorage.getItem("dbEmpresas")) || [];
  
    const empresaEncontrada = dbEmpresas.find(
      (empresa) => empresa.email === email && empresa.senha === senha
    );
  
    return !!empresaEncontrada; // Retorna verdadeiro se a empresa foi encontrada
  }
  
  // Função para autenticar o login de candidatos
  function autenticarLoginCandi(email, senha) {
    const dbCandidatos = JSON.parse(localStorage.getItem("dbCandidatos")) || [];
  
    const candidatoEncontrado = dbCandidatos.find(
      (candidato) => candidato.email === email && candidato.senha === senha
    );
  
    return !!candidatoEncontrado; // Retorna verdadeiro se o candidato foi encontrado
  }
  
  // Função para realizar o login
  function realizarLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
  
    // Verifica se o login é válido para empresas ou candidatos
    const loginValidoEmpresa = autenticarLogin(email, senha);
    const loginValidoCandi = autenticarLoginCandi(email, senha);
  
    if (loginValidoEmpresa) {
      // Se o login for válido para empresa, salva o tipo de usuário e estado de login
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userType", "empresa"); // Define o tipo de usuário como "empresa"
      alert("Login realizado com sucesso!");
      window.location.href = "../home-page/index.html";
    } else if (loginValidoCandi) {
      // Se o login for válido para candidato, salva o tipo de usuário e estado de login
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userType", "candidato"); // Define o tipo de usuário como "candidato"
      alert("Login realizado com sucesso!");
      window.location.href = "../home-page/index.html";
    } else {
      alert("Email ou senha incorretos.");
    }
  }
  
  
  // Evento de submit no formulário de login
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evita o recarregamento da página
      realizarLogin(); // Chama a função para realizar o login
    });
