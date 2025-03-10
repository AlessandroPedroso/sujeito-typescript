// Propriedade Decorator.

function validaNome(tamanho: number) {
    // target = construtor da nossa classe
    // key = nossa propriedade
    return (target: any, key: string) => {
        let valor = target[key];

        const getter = () => valor;

        const setter = (value: string) => {

            if (value === "") {
                console.log("Você não pode deixar em branco!");
            } else if (value.length < tamanho) {
                //se for menor
                console.log("Você não pode criar com esse tamanho")
            } else {
                valor = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
        // console.log(key);
    }
}

class Game {

    @validaNome(5)
    nome: string;

    @validaNome(15)
    titulo: string;

    constructor(nome: string, titulo: string) {
        this.nome = nome
        this.titulo = titulo
    }
}

const jogo1 = new Game("GTA V", "Titulo do jogo")
console.log(jogo1.nome)
console.log(jogo1.titulo)
