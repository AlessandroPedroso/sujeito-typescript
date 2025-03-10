"use strict";
/* >> DECORATORS <<

    Class
    Propriedade
    Métodos

    Parametros ( BEM POUCOS USADO )
    GETTERS / SETTERS (BEM POUCO USADO)

    //como criamos um decorator
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target = receber o construtor da nossa classe.
// function logoInfo(target: any) {
//     console.log("Sistema está online!")
// }
// Padrão factory (Fabrica) | Função que vai retornar a criação do decorator.
function logoInfo(mensagem) {
    return (target) => {
        console.log(`${mensagem}, ${target}`);
    };
}
let Sistema = class Sistema {
};
Sistema = __decorate([
    logoInfo("Servidor está rodando")
], Sistema);
// ================= PRATICANDO =================
function setIpServidor(novoIp) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = novoIp;
            }
        };
    };
}
let Servidor = class Servidor {
};
Servidor = __decorate([
    setIpServidor("192.168.50.30")
], Servidor);
const servidor1 = new Servidor();
console.log(servidor1);
