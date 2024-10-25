// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmar-senha");

    form.addEventListener("submit", function (event) {
        // Verifica se as senhas coincidem
        if (senha.value !== confirmarSenha.value) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            event.preventDefault(); // Impede o envio do formulário
        }
    });
});
