interface CadastrarProps {
  nome?: string;
  email: string;
  status: boolean;
}

const novoUsuario: CadastrarProps = {
  email: "alessandro@teste.com",
  status: true,
};

console.log(novoUsuario);

function novoUser(usuario: CadastrarProps) {
  console.log(usuario.email);
}

novoUser({ email: "ana@teste", status: false });
