import{calcTotalQuant} from "./funcoes.js"
let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

let pedidos = []

console.log(carrinhoCompras)
if(carrinhoCompras == null){
    carrinhoCompras = []
}

let cartList = document.querySelector("ul.cart_list")
console.log(cartList)
carrinhoCompras.forEach(item => {
    let html = `<li class="cart_item" id="${item.codProduto}">
    <div class="cart_img_desc">
        <div class="cart_img-container">
            <img src="${item.imagemProduto}" alt="">
        </div>
        
        <p>${item.nomeProduto}</p>
    </div>
    <div class="cart_item_container">
        <input type="number" value="${item.quantidade}">
        <span>R$ ${(item.precoProduto)*(item.quantidade)}</span>
        <div class="lixo"><i class="bi bi-trash3 del-btn"></i></div>
 
    </div>
</li>`
cartList.innerHTML += html
});


// selecionou todas as lixeiras da página
let delBtn = document.querySelectorAll('i.del-btn')
// para cada botão eu preciso add o meu escutador de evento
// passa função que retorna oq click
delBtn.forEach(botao => botao.addEventListener("click", (event) => {
    console.log(carrinhoCompras)
    let item = event.target.parentElement.parentElement.parentElement
    cartList.removeChild(item)
    console.log(item)
    let index = carrinhoCompras.findIndex(produto => produto.codProduto == item.id)
    console.log(index)
    carrinhoCompras.splice(index,1)
    localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
    console.log(carrinhoCompras)
}))

// a partir dai é a aula 23/11 - sá errado, pois o formulario está em outra pag
let finalizar = document.querySelector(".checkout-button")
finalizar.addEventListener('click', ()=> {
    
    let endereco = {
        nome: document.querySelector("input#nome").value,
        logradouro: document.querySelector("input#logradouro").value,
        bairro: document.querySelector("input#bairro").value,
        cidade: document.querySelector('input#cidade').value,
        estado: document.querySelector('input#Estados_brasileiros').value
    }

   let codPedido = (pedidos.length)+1
    if(pedidos == null || pedidos == 0){
        codPedido = 1
    }

    let pedido = {
        itens: carrinhoCompras, 
        endereco: endereco, 
        id: codPedido
    }// crio um objeto que guarda uma lista de produtos e o endereco do comprador
    pedidos.push(pedido) // coloco o pedido na lista de pedidos
    localStorage.setItem('pedidos',JSON.stringify(pedidos))
})

calcTotalQuant(carrinhoCompras)