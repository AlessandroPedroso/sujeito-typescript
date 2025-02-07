"use strict";
//Tipo desconhecido > quando você não sabe o TIPO que vai receber.
let total;
total = 100;
total = "350";
total = {
    total: 100,
};
let idPedido = 123;
let totalPedido = 15;
let entregador = idPedido;
// valor do tipo unknown só podemn ser atribuida ao tipoe unknown ou any
let totalEntregador = totalPedido;
// let totalEntregador: any = totalPedido;
console.log(totalEntregador);
