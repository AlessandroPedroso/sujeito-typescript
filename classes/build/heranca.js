"use strict";
// Herança > quando nós temos uma classe que herda de outra classe
// ClassePAI tem seus atributos e a classe FILHA vai herdar atributos do pai alem dos seus proprios atributos.
/*
>> Protected: Atributo e métodos protegidos pode ser acessados ou alterados por meio da classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

>> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados, ou seja ele não pode ser acessado ou modificado fora da classe em que foi criado.

>> Readonly: (apenas para o atributo) Podemos apenas ler e ver esse atributo porem não podemos alterar.
*/
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        //Chamando o construtor da classe pai
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log("ALTERANDO CARGO PARA: ", cargo);
        console.log("ID DO USUARIO: ", this.id);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const usuario1 = new Admin(123, "Alessandro", "alessandro@teste.com", "Gerente de Projetos", 2);
console.log(usuario1.acessarAdmin());
// console.log(usuario1.nome);
// usuario1.mudarCargo();
