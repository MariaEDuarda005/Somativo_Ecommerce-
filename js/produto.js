import { catalogo } from "./dados.js";
import { findProduct, carregarProduto, addItemCarrinho } from "./funcoes.js";
let id = localStorage.getItem("prodID")
let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))
if(carrinhoCompras == null){
    carrinhoCompras = []
}

let item = findProduct(catalogo, id)
console.log(item)
carregarProduto(item)
addItemCarrinho(item, carrinhoCompras)

