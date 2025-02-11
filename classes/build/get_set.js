"use strict";
// Caso de uso de um jogo
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    //MÉTODO GET = Para pegar o valor ao inves de acessar diretamente a propriedade
    get getServidorIP() {
        console.log("== MÉTODO GET ==");
        return this.servidor;
    }
    //MÉTODO SET = Para alterar algum atributo
    set setServidorIP(novoIp) {
        if (this.servidor === novoIp) {
            throw new Error("O novo ip deve ser diferente do IP antigo");
        }
        this.servidor = novoIp;
    }
}
const GTA5 = new Jogo("192.168.5.10");
try {
    GTA5.setServidorIP = "192.168.5.12"; //SET
}
catch (err) {
    console.log("ERROR: ", err.message);
}
console.log(GTA5.getServidorIP); //GET
