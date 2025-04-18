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
};