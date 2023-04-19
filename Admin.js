import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomedoCurso, vagas) {
        return `Curso de ${nomedoCurso} criado com ${vagas} vagas`
    }
}

