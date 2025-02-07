interface CursoProps {
  id: string;
  nome: string;
  preco: number;

  //Definir apenas a funcao e o que ela deve separar e retornar

  promocao: (preco: number) => void;
}

// function mostraPromocao(preco: number) {
//   console.log(`Promocao no curso por apenas: R$ ${preco}`);
// }

const novoCurso: CursoProps = {
  id: "1",
  nome: "Curso typeCript",
  preco: 750,
  promocao: (preco: number) => {
    console.log("PREÇO TOTAL: ", preco);
  },
};

console.log(novoCurso);

console.log(novoCurso.promocao(350));

////////////////////////////////////////////////////

interface SomaProps {
  (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
  console.log("Resultado: ", valor1 + valor2);

  return valor1 + valor2;
};

const resultado = somaNumeros(15, 10);

console.log("Resultado da variavel: ", resultado);
