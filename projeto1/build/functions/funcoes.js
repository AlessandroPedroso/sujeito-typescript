"use strict";
function login(username) {
    console.log("Ben vindo", username);
}
login("Alessandro");
function login2(username) {
    console.log("Ben vindo", username);
    return username;
}
const retornoFuncoes = login2("logou");
console.log(retornoFuncoes);
let n1 = 10;
let n2 = 25;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    return soma;
}
console.log(soma(n1, n2));
function soma2(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 40) {
        return "SOMA MAIOR QUE 20";
    }
    else {
        return "MENOR QUE 20";
    }
}
console.log(soma2(n1, n2));
