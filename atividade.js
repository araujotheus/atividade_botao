let titulo = document.querySelector(".titulo")
let botao = document.querySelector("button")

let tituloInicial = "HTML + JS"
let tituloModificado = "Fui alterado pelo botão"

function alterarTituloPrincipal() {

if (titulo.innerText === tituloInicial) {
    titulo.innerText = tituloModificado;
  } else {
    titulo.innerText = tituloInicial;
  };
}
botao.addEventListener("click", alterarTituloPrincipal)
