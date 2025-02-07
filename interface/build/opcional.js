"use strict";
const novoUsuario = {
    email: "alessandro@teste.com",
    status: true,
};
console.log(novoUsuario);
function novoUser(usuario) {
    console.log(usuario.email);
}
novoUser({ email: "ana@teste", status: false });
