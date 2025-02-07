// interface TecnologiasProps {
//   id: string;
//   nome: string;
//   slug: string[];
// }

// let tecnologias: TecnologiasProps = {
//   id: "1",
//   nome: "PHP",
//   slug: ["php", "php-do-zero"],
// };

interface TecnologiasProps {
  id: string;
  nome: string;
  descricao?: string;
}

//array da tecnologiasProps
interface NomesProps {
  tecnologias: TecnologiasProps[];
}

let frontend: NomesProps = {
  tecnologias: [
    {
      id: "12",
      nome: "React",
      descricao: "Biblioteca para criar interfaces",
    },
    {
      id: "13",
      nome: "Vuejs",
      descricao: "Biblioteca para criar interfaces",
    },
  ],
};

console.log(frontend.tecnologias);
