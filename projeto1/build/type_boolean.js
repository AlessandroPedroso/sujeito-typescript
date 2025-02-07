"use strict";
let estaAutenticado = true;
estaAutenticado = false;
let codeStatus = 1;
// 1 - true
// 0 - false
// Tudo que for diferente de zero, string vazia, undefined, será verdadeiro.
estaAutenticado = Boolean(codeStatus);
console.log(estaAutenticado);
