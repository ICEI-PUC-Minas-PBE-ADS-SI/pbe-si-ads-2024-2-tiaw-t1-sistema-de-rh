document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cnpj = document.getElementById('cnpj').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const senha = document.getElementById('senha').value;
    const confirmeSenha = document.getElementById('confirmeSenha').value;

    // Verifica se as senhas coincidem
    if (senha !== confirmeSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    // Cria o objeto da empresa
    const novaEmpresa = {
        nome: nome,
        email: email,
        cnpj: cnpj,
        cidade: cidade,
        estado: estado,
        senha: senha
    };

    // Recupera o banco de dados de empresas ou cria um novo array
    let dbEmpresas = JSON.parse(localStorage.getItem('dbEmpresas')) || [];

    // Adiciona a nova empresa ao banco de dados
    dbEmpresas.push(novaEmpresa);

    // Salva o banco de dados atualizado no localStorage
    localStorage.setItem('dbEmpresas', JSON.stringify(dbEmpresas));

    // Exibe uma mensagem de sucesso e redireciona para a página inicial
    alert('Cadastro realizado com sucesso!');
    window.location.href = '../pagina-login/login.html';


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
});
