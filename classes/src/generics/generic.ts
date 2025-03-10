// GENERICS

/*
 >>> Permite criar estruturas que serão adaptaveis a varios tipos de dados.
 (Ajudando a reaproveitar melhor nosso código a deixa-lo mais flexível)

  Podemos usar os generics:
  Funções | interfaces / type | classes
*/

/*
  Alguns padrões que vamos encontrar:
  S => State;
  T => Type;
  K => Key;
  V => Value;
  E => Element;
*/

function repositorio<T extends number | string>() {
  let dados: T;

  function getDados() {
    return dados;
  }

  function setDados(novoDado: T) {
    dados = novoDado;
  }

  return { getDados, setDados };
}

const repo1 = repositorio<string | number>();
repo1.setDados(15);

console.log(repo1.getDados());
