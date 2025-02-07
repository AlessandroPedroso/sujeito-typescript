"use strict";
// let loja: object;
const BurguerK = {
    nome: "Buguer bk",
    endereco: "Rua logo ali",
    status: true,
};
// console.log(BurguerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja ${endereco}`);
    console.log(`Status da loja: ${status} `);
}
novaLoja({ nome: "Red Burguer", endereco: "Rua na esquina", status: true });
