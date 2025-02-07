"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`);
}
acessar(123, "Alessandro");
acessar("55", "Eduardo");
logUsuario("123");
function comprarItem(moeda) {
    console.log("Comprando com a moeda: ", moeda);
}
comprarItem("BRL");
