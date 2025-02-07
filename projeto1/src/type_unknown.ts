//Tipo desconhecido > quando você não sabe o TIPO que vai receber.

let total: unknown;
total = 100;
total = "350";

total = {
  total: 100,
};

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;

// valor do tipo unknown só podemn ser atribuida ao tipoe unknown ou any
let totalEntregador: unknown = totalPedido;
// let totalEntregador: any = totalPedido;

console.log(totalEntregador);
