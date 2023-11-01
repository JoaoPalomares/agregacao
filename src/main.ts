import { Produto } from "./model/Produto";
import { CarrinhoDeCompra } from "./model/CarrinhoDeCompras";

const produto1 = new Produto(`alface`, 2.50);
const produto2 = new Produto(`queijo`, 15.00);
const produto3 = new Produto(`pão`, 5.50);
const produto4 = new Produto(`hamburguer`, 15.70);
const produto5 = new Produto(`tomate`, 3.50);

const carrinhoDeCompras = new CarrinhoDeCompra();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${carrinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor Total: ${carrinhoDeCompras.valorTotal()}`);