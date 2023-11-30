import { catalogo } from "./dados.js";
import { carregarProdutos, handleClick } from "./funcoes.js";


const listaProdutos = catalogo.filter( item => item.mostrarNaHome == false)
const categoriaProduto = document.querySelector("#produtoss")


carregarProdutos(listaProdutos,categoriaProduto)

handleClick()

