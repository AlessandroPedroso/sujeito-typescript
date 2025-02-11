"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123"; // só funciona em atributos
        this.nome = nome;
        this.idade = idade;
    }
    mostraId() {
        console.log(`ID DO USUARIO: `, this.id);
    }
}
const ale = new Pessoa("Alessandro", 30);
console.log(ale.mostraId());
