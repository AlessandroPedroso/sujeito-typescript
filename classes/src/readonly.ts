class Pessoa {
    readonly id: string = "123"; // só funciona em atributos
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    mostraId() {
        console.log(`ID DO USUARIO: `, this.id)
    }
}

const ale = new Pessoa("Alessandro", 30);

console.log(ale.mostraId())