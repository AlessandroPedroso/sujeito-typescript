// Decorator Método, ele só é chamado quando nosso método for chamado em algum local.
import { verificaPessoa } from "./decoratorss/verificaPessoa";



class Fulano {
    nome: string;

    constructor(nome: string) {
        this.nome = nome
    }

    @verificaPessoa(28)
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema.`)
    }
}

const pessoa1 = new Fulano("Alessandro pedroso")
pessoa1.cadastrarPessoa();