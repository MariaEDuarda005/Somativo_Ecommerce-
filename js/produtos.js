import { catalogo } from "./dados.js";
import { carregarProdutos, handleClick } from "./funcoes.js";

const catalogoProdutos = document.querySelector("#catalogo")

carregarProdutos(catalogo,catalogoProdutos)
handleClick()
