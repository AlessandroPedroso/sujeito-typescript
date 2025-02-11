"use strict";
/**
 ### O que é uma class? ###
>>> Uma classe armazena as caracteristicas e as ações que esse objeto vai possuir.
>>> Ou seja conjunto de atributos e metodos.
 */
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO");
        }
        else {
            console.log("LOJA FECHADA");
        }
    }
}
const redBurguer = new Loja("Red Burguer", "Lanches");
// console.log(redBurguer.nome);
// console.log(redBurguer.categoria);
redBurguer.criarLoja();
const retornoLoja = redBurguer.emitirPedido(48, "Suco Gelado", "Hamburger duplo", "coca dois litros");
redBurguer.mudarStatus("FECHADO");
console.log(retornoLoja);
