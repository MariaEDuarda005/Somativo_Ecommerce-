export function carregarProdutos(listaProdutos, localHTML){
    listaProdutos.forEach(produto =>{
            let html = `<div class="card" id = "${produto.codProduto}"> 
                            <div class="img-container"> 
                            <img src="${produto.imagemProduto}" alt="" id=${produto.codProduto}>
                            </div> 
                            <p>"${produto.nomeProduto}" </p>
                            <div class="card-button"> 
                            <a href="./produto01.html"><button id=${produto.codProduto}> Comprar </button></a> 
                            </div> 
                        </div>`;
        localHTML.innerHTML += html;
    })
}

export function handleClick(){
    let produtos = document.querySelectorAll("div.image-destaque div.card")
    console.log(produtos)

    produtos.forEach(produto => produto.addEventListener('click', (evento) => {
        let idProduto = evento.target.id
        localStorage.setItem('prodID',idProduto)
     
    
    }      
))}

export function carregarProduto(item){
    const grid_produto = document.querySelector("#product_container")
    let html = `<div class="left-side">
    <div class="itens">
        <div class="select-image">
            <img src= ${item.imagemProduto} alt="">
        </div>
    </div>
    </div>
    <div class="right-side">
    <div class="content">
        <h6>Brilho Sutil</h6>
        <h1>${item.nomeProduto}</h1>
        <p>${item.descricaoProduto}</p>
        <div class="prices">
            <span class="price">R$ ${item.precoProduto}/cada</span>
            <span class="off">R$ 190,99</span>
        </div>
        <div class="options">
        <button> Comprar </button>
        </div>
    </div>
    </div>`
    
    grid_produto.innerHTML = html
}

//parte do carrinho
export function addItemCarrinho (item, carrinhoCompras){
    let botaoComprar = document.querySelector('button')
    console.log(item)
    botaoComprar.addEventListener('click', () => {
        let temNoCarrinho = carrinhoCompras.find( produto => produto.codProduto == item.codProduto)
        console.log(temNoCarrinho)
        if (carrinhoCompras.find( produto => produto.codProduto == item.codProduto)) {
            let index = carrinhoCompras.findIndex(produto => produto.codProduto == item.codProduto)
            alert("item já adicionado ao carrinho")
            carrinhoCompras[index].quantidade += 1
            localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
            console.log(carrinhoCompras)
        }
        else {
            // console.log (typeof(quantidade.value)) - retorn se é int, string, etc...
            // console.log (quantidade)
            item.quantidade = 1
            // item.quantidade = quantidade
            carrinhoCompras.push(item)
            console.log(carrinhoCompras)
            localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
        }  
    })
}

export function findProduct(produtos, prodID){
    let produto = produtos.find(prod => prod.codProduto == prodID)
    console.log(produto)
    return produto
}


export function calcTotalQuant(carrinhoCompras){
    let total = 0;
    let totalQ = 0;
 
    const totalCarrinho = document.querySelector('.qtd_price_area')

    totalCarrinho.innerHTML = '';
    
 
 
    carrinhoCompras.forEach(item =>{
        total += (item.precoProduto * item.quantidade);
        totalQ += item.quantidade;
    })
 
    let totCarrinho = `<span> ${totalQ} </span>
            <span>R$ ${total.toFixed(2)} </span>`;
 
    totalCarrinho.innerHTML += totCarrinho;
 
}