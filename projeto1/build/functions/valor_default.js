"use strict";
// como deixar um valor por default ou deixar ele opcional
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome };
    console.log(data);
}
cadastro("teste@teste.com", "123456", "Alessandro");
function cadastroLoja(nome, email, status = false) {
    console.log("Status atual da loja: ", status);
    return status;
}
cadastroLoja("Burguer K", "burguer@teste");
cadastroLoja("Burguer K", "burguer@teste", true);
