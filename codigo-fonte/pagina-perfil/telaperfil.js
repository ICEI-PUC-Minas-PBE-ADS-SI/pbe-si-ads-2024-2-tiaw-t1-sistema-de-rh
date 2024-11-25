document.addEventListener("DOMContentLoaded", function () {
    const dbCandidatos = JSON.parse(localStorage.getItem('dbCandidatos')) || [];
    if (dbCandidatos.length > 0) {
        const ultimoCandidato = dbCandidatos[dbCandidatos.length - 1];
        document.getElementById('nome').value = ultimoCandidato.nome;
        document.getElementById('genero').value = ultimoCandidato.genero;
        document.getElementById('email').value = ultimoCandidato.email;
        document.getElementById('escolaridade').value = ultimoCandidato.escolaridade;
        document.getElementById('vaga').value = ultimoCandidato.vaga;
    } else {
        alert("Nenhuma informação encontrada!");
    }
});
