let titulo = document.querySelector(".titulo")
let botao = document.querySelector("button")

function alterarTituloPrincipal() {
    titulo.innerText = "Fui alterado pelo botão"
}
botao.addEventListener("click", alterarTituloPrincipal)

