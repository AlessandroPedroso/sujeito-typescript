"use strict";
// function totalVendas(
//   venda1: number,
//   venda2: number,
//   venda3: number,
//   venda4: number
// ) {
//   const total = venda1 + venda2 + venda3 + venda4;
//   console.log(total);
//   return total;
// }
// totalVendas(10, 30, 50, 10);
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje`);
}
totalVendas(10, 30, 25);
function mostraNomes(...nomes) {
    let totalNomes = nomes.length;
    console.log(` Total nomes: ${totalNomes} `);
    nomes.map((nome) => {
        console.log(nome);
    });
}
mostraNomes("Alessandro", "Eduardo", "Taís");
