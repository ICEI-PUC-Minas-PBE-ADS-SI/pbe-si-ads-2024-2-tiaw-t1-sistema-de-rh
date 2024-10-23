// Validação básica do formulário
document.getElementById("form").addEventListener("submit", function (event) {
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value; 
    let cnpj = document.getElementById("cnpj").value;
    let senha = document.getElementById("senha").value;

    let isValid = true; 

    // Verifica se o título da vaga tem pelo menos 4 caracteres
    if (nome.length < 4) {
        alert("O título da vaga deve ter pelo menos 4 caracteres.");
        isValid = false; // Sinaliza que houve erro
    }

    // Verifica se a descrição da vaga foi preenchida
    if (descricao.length === 0) {
        alert("Por favor, preencha a descrição da vaga.");
        isValid = false; // Sinaliza que houve erro
    }

    // Verifica se as informações da empresa (CNPJ) foram preenchidas
    if (cnpj.length === 0) {
        alert("Digite as informações da empresa.");
        isValid = false; 
    }

    // Verifica se o contato tem pelo menos 6 caracteres
    if (senha.length < 6) {
        alert("O contato deve ter pelo menos 6 caracteres.");
        isValid = false; 
    }

    // Se não houver nenhum erro, exibe a mensagem de sucesso
    if (!isValid) {
        event.preventDefault(); 
    } else {
        alert("Vaga cadastrada com sucesso!"); 
    }
});

// Interação para alterar a cor do botão ao passar o mouse
let btn = document.getElementById("btn");

btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "#145c32";
});

btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "#198754";
});
