type Connection = {
  ip: string;
  name: string;
};

export function connection(info: Connection): Boolean {
  console.log("CONEXÃO REALIZADA COM SUCESSO: ", info.ip);

  return true;
}

export function statusConnection(): void {
  console.log("SERVIDOR FUNCIONANDO 100%");
}
