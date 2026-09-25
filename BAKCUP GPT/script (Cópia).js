//const = cria variavel
//documento.querySelector ( ou All) = pega a variavel no documento (html)
//addEventLister(adiciona evento, "input(campo pesquisa")
//forEach = o que vai acontecer?


/*campoPesquisa.addEventListener("input", function () {
    const textoDigitado = campoPesquisa.value.toLowerCase();
       
  produtos.forEach(function (produto) {
    const textoProduto = produto.textContent.toLowerCase();
    const encontrou = textoProduto.includes(textoDigitado);
    if (encontrou) {
      produto.style.display ="";
    } else {
      produto.style.display ="none";
    }
     
});
});*/
const campoPesquisa = document.querySelector("#campo-pesquisa");

const produtos = document.querySelectorAll(".produto");

const mensagemProdutos = document.querySelector("#mensagem-sem-produtos");

const botoesCategoria = document.querySelectorAll(".botao-categoria")

const botaoPromocoes = document.querySelector("#botao-promocoes")

const botaoTodos = document.querySelector("#botao-todos")


campoPesquisa.addEventListener("input", function () {

  const busca = campoPesquisa.value.toLowerCase();

  let encontrouProduto = false;

  produtos.forEach(function (produto) {

    const encontrou = produto.textContent.toLowerCase().includes(busca);

    produto.style.display = encontrou ? "" : "none";

    if (encontrou) {
      encontrouProduto = true;
    }

  });

  mensagemProdutos.hidden = encontrouProduto;

});

botoesCategoria.forEach(function (botao) {
  botao.addEventListener("click", function () {
    botoesCategoria.forEach(function (outroBotao){
      outroBotao.classList.remove("botao-ativo");
      botao.classList.add("botao-ativo");
      botaoPromocoes.classList.remove("botao-verde");
      botaoTodos.classList.remove("botao-verde");

  });
        
    const categoriaEscolhida = botao.dataset.categoria;
    console.log(categoriaEscolhida);


produtos.forEach(function (produto) {

  const categoriaProduto = produto.dataset.categoria;

  const pertenceCategoria =
    categoriaProduto === categoriaEscolhida;

  produto.style.display = pertenceCategoria ? "" : "none";
    })
  });
});

botaoPromocoes.addEventListener("click", function (){
   
  produtos.forEach(function (produto){
    const estaEmPromocao = produto.dataset.promocao === "sim";

    produto.style.display = estaEmPromocao ? "" : "none";
  })
})

botaoTodos.addEventListener("click", function(){
  produtos.forEach(function (produto){
    produto.style.display = "";
  });
});

botaoPromocoes.addEventListener("click", function (){

  botoesCategoria.forEach(function (botao){
    botao.classList.remove("botao-ativo")
  })

  botaoTodos.classList.remove("botao-verde");
  botaoPromocoes.classList.add("botao-verde");

})

botaoTodos.addEventListener("click", function (){

    botoesCategoria.forEach(function (botao){
    botao.classList.remove("botao-ativo")
  })
  
  botaoPromocoes.classList.remove("botao-verde");
  botaoTodos.classList.add("botao-verde");
    
})

