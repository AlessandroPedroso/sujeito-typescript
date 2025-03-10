
/* >> DECORATORS <<

    Class
    Propriedade
    Métodos

    Parametros ( BEM POUCOS USADO )
    GETTERS / SETTERS (BEM POUCO USADO)

    //como criamos um decorator
*/

// target = receber o construtor da nossa classe.
// function logoInfo(target: any) {
//     console.log("Sistema está online!")
// }
// Padrão factory (Fabrica) | Função que vai retornar a criação do decorator.
function logoInfo(mensagem: string) {
    return (target: any) => {
        console.log(`${mensagem}, ${target}`)
    }
}

@logoInfo("Servidor está rodando")
class Sistema {

}


// ================= PRATICANDO =================

function setIpServidor(novoIp: string) {

    return (target: any) => { // target é o construtor da nossa classe.
        return class extends target {
            ip = novoIp;
        }

    }

}

@setIpServidor("192.168.50.30")
class Servidor {

}

const servidor1 = new Servidor();
console.log(servidor1)