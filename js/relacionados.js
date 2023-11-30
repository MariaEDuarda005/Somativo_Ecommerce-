
// Função para sortear índices aleatórios dentro de um intervalo

function sorteioIndices(qtdIndices, min, max) {

  const indicesSorteados = [];
 
  while (indicesSorteados.length < qtdIndices) {

    const indiceAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
 
    // Verificar se o índice já foi sorteado

    if (!indicesSorteados.includes(indiceAleatorio)) {

      indicesSorteados.push(indiceAleatorio);

    }

  }
 
  return indicesSorteados;

}
 
// ... Restante do código ...
 
// Sortear 3 índices aleatórios no intervalo do array de produtos

const indicesSorteados = sorteioIndices(3, 0, 8);
 
// ... Restante do código ...

   
  // FUNÇÃO PARA OS PRODUTOS RELACIONADOS
   
  import { catalogo } from "../js/dados.js";
   
  // variavel constante + nome = objeto que está sendo acessado
  const relacionados = document.querySelector(".destaque-categorias"); // guarda a informação do html
   
  // CARREGAMENTO DE PRODUTOS (HOME E PRODUTOS)
  // função que exporta para o projeto e possui dois parametros (lista de produtos e local para armazenar o html)
  export function carregar_relacionados(lista_produtos) {
    // Sortear 3 índices aleatórios no intervalo do array de produtos
    const indicesSorteados = sorteioIndices(3, 0, 8);
   
    // Limpar o conteúdo existente na grid_de_produtos
    relacionados.innerHTML = "";
   
    // laço de repetição que adiciona na página os produtos contidos nos índices sorteados
    for (const indice of indicesSorteados) {
      // criar uma variável para armazenar o html e em seguida utilizar a interpolação
      // em outras palavras, apresenta o produto na página
      let produtos_relacionados = `
      <div class="categorias" id="${lista_produtos[indice].codProduto}">
      <div class="card" id="${lista_produtos[indice].codProduto}">
          <div class="img-container">
          <a href='./produto01.html'>
            <img src="${lista_produtos[indice].imagemProduto}" id="${lista_produtos[indice].codProduto}">
            </a>
              <div class="descricao">
             <p>${lista_produtos[indice].nomeProduto}</p>
          </div>
          </div>
      </div>`;
      // trocou o html do grid_produto pela informação do produto
      relacionados.innerHTML += produtos_relacionados;
    }
  }
   
  // Chamando a função ao carregar a página
  carregar_relacionados(catalogo);

//   export function handleClick(){
//     let produtos = document.querySelectorAll("div.image-destaque div.card")
//     console.log(produtos)

//     produtos.forEach(produto => produto.addEventListener('click', (evento) => {
//         let idProduto = evento.target.id
//         localStorage.setItem('prodID',idProduto)
     
    
//     }      
// ))}

// Handle click
let prod_rel = document.querySelectorAll('div.categorias')
console.log(prod_rel)
prod_rel.forEach(item => item.addEventListener('click',(e)=> {
  let idProduto = e.target.id
        console.log(idProduto)
        // guarda a informação de qual elemento foi seleciuonado (clicado)
        localStorage.setItem('prodID', idProduto)
 
}))