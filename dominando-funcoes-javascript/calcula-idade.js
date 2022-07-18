function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Thaís",
    idade: 20
};

const pessoa2 = {
    nome: "José",
    idade: 35
}

console.log(calculaIdade.call(pessoa1, 30));

console.log(calculaIdade.call(pessoa2, 15));

console.log(calculaIdade.apply(pessoa1, [30]));

console.log(calculaIdade.apply(pessoa2, [15]));