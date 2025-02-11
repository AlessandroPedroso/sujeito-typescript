// Herança > quando nós temos uma classe que herda de outra classe
// ClassePAI tem seus atributos e a classe FILHA vai herdar atributos do pai alem dos seus proprios atributos.

/*
>> Protected: Atributo e métodos protegidos pode ser acessados ou alterados por meio da classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

>> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados, ou seja ele não pode ser acessado ou modificado fora da classe em que foi criado.

>> Readonly: (apenas para o atributo) Podemos apenas ler e ver esse atributo porem não podemos alterar.
*/

class Usuario {
  protected id: number; // Podemos chamar na classe usuario ou classes que extends a classe usuario
  public nome: string;
  public email: string;

  constructor(id: number, nome: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario {
  cargo: string; // sem definição é publico
  nivel: number; // sem definição é publico

  constructor(
    id: number,
    nome: string,
    email: string,
    cargo: string,
    nivel: number
  ) {
    //Chamando o construtor da classe pai
    super(id, nome, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }

  protected mudarCargo(cargo: string): void {
    console.log("ALTERANDO CARGO PARA: ", cargo);
    console.log("ID DO USUARIO: ", this.id);
  }

  acessarAdmin() {
    this.mudarCargo("Designer");
  }
}

const usuario1 = new Admin(
  123,
  "Alessandro",
  "alessandro@teste.com",
  "Gerente de Projetos",
  2
);

console.log(usuario1.acessarAdmin());

// console.log(usuario1.nome);
// usuario1.mudarCargo();
