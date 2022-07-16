function operadores(x, y) {
    x === y ? console.log(`Os números ${x} e ${y} são iguais.`) : console.log(`Os números ${x} e ${y} não são iguais.`);
    x + y >= 10 ? console.log(` Sua some é ${x + y}, que é maior que 10`) : console.log(` Sua some é ${x + y}, que é menor que 10`);
    x + y >= 20 ? console.log(` e maior que 20`) : console.log(` e menor que 20`);
}

operadores(1, 2);