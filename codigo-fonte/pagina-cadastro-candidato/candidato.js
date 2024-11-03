document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const vaga = document.getElementById('vaga').value.trim();
        const escolaridade = document.getElementById('escolaridade').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        const confirmeSenha = document.getElementById('confirmeSenha').value;
        const genero = document.getElementById('genero').value; // Captura o gênero

        if (nome.length < 4) {
            alert("O nome deve ter pelo menos 4 caracteres.");
            return;
        }

        if (vaga.length < 4) {
            alert("A vaga procurada deve ter pelo menos 4 caracteres.");
            return;
        }

        if (escolaridade.length < 4) {
            alert("A escolaridade deve ter pelo menos 4 caracteres.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (senha !== confirmeSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        const novoCandidato = {
            nome: nome,
            vaga: vaga,
            escolaridade: escolaridade,
            email: email,
            senha: senha,
            genero: genero // Adiciona o gênero ao objeto do candidato
        };

        let dbCandidatos = JSON.parse(localStorage.getItem('dbCandidatos')) || [];
        dbCandidatos.push(novoCandidato);
        localStorage.setItem('dbCandidatos', JSON.stringify(dbCandidatos));

        alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}\nVaga: ${vaga}\nEscolaridade: ${escolaridade}\nGênero: ${genero}`);
        form.reset();
        window.location.href = '../pagina-login/login.html';
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

