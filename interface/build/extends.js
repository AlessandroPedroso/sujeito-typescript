"use strict";
/*
    Vamos supor que temos um jogo e esse jogo pode ter uma dlc.
*/
const left4dead = {
    id: "1",
    nome: "Lef 4 Dead 2",
    descricao: "Jogo de ação e tiro",
    plataforma: ["PS5", "PC"],
};
const left4DeadDLC = {
    id: "90",
    nome: "Left 4 Dead - Novos Mapas",
    descricao: "4 novos mapas para jogar online",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["Modo Coop", "Mais 5 horas de jogo", "Medalhas"],
    jogoOrignal: left4dead,
};
console.log(left4DeadDLC);
