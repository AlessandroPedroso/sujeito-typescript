"use strict";
class Conta {
    constructor() {
        //Private: Ele não pode ser acessado ou modificado fora da classe
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log("LIMITE REPROVADO");
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteContaAfiliado() {
        return this.solicitarLimite(950);
    }
}
const fulano = new Conta();
fulano.solicitarLimiteApp(true, 700);
// console.log(fulano);
const alessandro = new BancoAfiliado();
alessandro.limiteContaAfiliado();
console.log(alessandro);
