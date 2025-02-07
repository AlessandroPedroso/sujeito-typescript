// Type Alias conseguimos criar tipos mais poderosos, com mais informações do que tipos primitivos

type Info = {
  id: number;
  nome: string;
  descricao?: string;
};

const produtoInfo: Info = {
  id: 123,
  nome: "Placa de video",
};

type Categoria = {
  slug: string;
  quantidadeProduto: number;
};

const categoria1: Categoria = {
  slug: "Hardware",
  quantidadeProduto: 2,
};

console.log(categoria1);

type ProdutoInfo = Info & Categoria; //ProdutoInfo é a intercessao (UNIAO) entre info e categoria

const novoProduto: ProdutoInfo = {
  id: 4554,
  nome: "Teclado",
  slug: "Teclado mecanico",
  quantidadeProduto: 10,
};

console.log(novoProduto);
