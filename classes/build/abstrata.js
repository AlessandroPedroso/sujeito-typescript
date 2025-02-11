"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("============");
        console.log(`Nova conta P.Física criada com sucesso ${dados.nome}`);
        console.log("============");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("============");
        console.log(`Nova conta P.Física criada com sucesso ${dados.nome}`);
        console.log("============");
        return true;
    }
}
const pessoa = new PessoaFisica();
pessoa.abrirConta({
    nome: "Alessandro",
    numero: "11131c",
    endereco: "rua 15"
});
const pessoa2 = new PessoaFisica();
pessoa.abrirConta({
    nome: "Eduardo",
    numero: "11131c",
    endereco: "rua 15"
});
