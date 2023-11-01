"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./model/Produto");
const CarrinhoDeCompras_1 = require("./model/CarrinhoDeCompras");
const produto1 = new Produto_1.Produto(`alface`, 2.50);
const produto2 = new Produto_1.Produto(`queijo`, 15.00);
const produto3 = new Produto_1.Produto(`pão`, 5.50);
const produto4 = new Produto_1.Produto(`hamburguer`, 15.70);
const produto5 = new Produto_1.Produto(`tomate`, 3.50);
const carrinhoDeCompras = new CarrinhoDeCompras_1.CarrinhoDeCompra();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${carrinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor Total: ${carrinhoDeCompras.valorTotal()}`);
//# sourceMappingURL=main.js.map