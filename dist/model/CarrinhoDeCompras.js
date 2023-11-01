"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoDeCompra = void 0;
class CarrinhoDeCompra {
    constructor() {
        this.produtos = [];
    }
    inserirProdutos(...produtos) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }
    quantidadeProdutos() {
        return this.produtos.length;
    }
    valorTotal() {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}
exports.CarrinhoDeCompra = CarrinhoDeCompra;
//# sourceMappingURL=CarrinhoDeCompras.js.map