const alunosAprovados = (alunos, mediaFinal) => {
    let aprovados = [];

    for (aluno of alunos) {
        const { media, nome } = aluno;
        if (media >= mediaFinal) {
            aprovados.push(nome);
        }
    }
    return console.log(aprovados);
}

const alunos = [
    {
        nome: "Daniel",
        media: 8
    },
    {
        nome: "Joana",
        media: 6
    },
    {
        nome: "Lucas",
        media: 5
    },
    {
        nome: "Ester",
        media: 9
    }
];

alunosAprovados(alunos, 6);