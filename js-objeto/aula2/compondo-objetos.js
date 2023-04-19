const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345687998",
    email: "andre@email.com",
    fones: ["11978459874","11978458745"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)