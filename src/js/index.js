/*
    o que precisamos fazer? - quando clicarmos no botão de troa de tema temos que alterar a cor do tema da página para que as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicaidos e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeio de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema para lua

    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar pro modo classo e mudar a imagem pro sol
        - passo 6 - verificar se o body já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema para sol 
*/

// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicaidos e mudar a imagem pra lua

// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body")

const imagembotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeio de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    // passo 6 - verificar se o body já tem a classe modo-escuro
    const modoescuroEstaAtivo = body.classList.contains("modo-escuro")
    
    if(modoescuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");
        
        // passo 8 - trocar a imagem do botão de alterar tema para sol 
        imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")

    } else {

        // passo 4 - adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro");

    // passo 5 - trocar a imagem do botão de alterar tema para lua
    imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});