// let loja: object;

// loja = {
//   nome: "bk",
//   endereco: "Rua x",
//   status: true,
// };

interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerK: LojaProps = {
  nome: "Buguer bk",
  endereco: "Rua logo ali",
  status: true,
};

// console.log(BurguerK);

function novaLoja({ nome, endereco, status }: LojaProps): void {
  console.log(`Loja ${nome} criada com sucesso!`);
  console.log(`Endereço da loja ${endereco}`);
  console.log(`Status da loja: ${status} `);
}

novaLoja({ nome: "Red Burguer", endereco: "Rua na esquina", status: true });
