const form = document.querySelector(".form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");
const btnLimpar = document.getElementById("btnLimpar");
const btnEnviar = document.getElementById("btnEnviar");

function incluirDados() {
  lista = JSON.parse(localStorage.getItem("lista")) || [];
  lista.push({
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    assunto: assunto.value,
    mensagem: mensagem.value,
  });
  localStorage.setItem("lista", JSON.stringify(lista));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  incluirDados();
  limparCampos();
});

function limparCampos() {
    nome.value = "";
    email.value = "";
    telefone.value = "";
    assunto.value = "";
    mensagem.value = "";

}

btnLimpar.addEventListener("click", limparCampos);
