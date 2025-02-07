let numeros: number[];
numeros = [1, 5, 21, 31];

// let filmes:Array<string>
// let filmes: string[];
// let filmes: Array<string | number>;
let filmes: (string | number)[];
filmes = ["Filme 1", "Filme 2"];
filmes.push(5);

console.log("Meus filmes", filmes);

console.log(numeros);

numeros.push(55);

console.log("Meus numeros: ", numeros);
