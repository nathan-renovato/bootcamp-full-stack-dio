function validarPalindromo(string) {
    if (!string) return console.log("string inválida.");

    let stringConvertidaArray = string.toLowerCase().trim().split("").filter(item => item !== " ");
    let stringInvertida = string.toLowerCase().trim().split("").filter(item => item !== " ").reverse();

    for (let i = 0; i < stringConvertidaArray.length; i++) {
        if (stringConvertidaArray[i] != stringInvertida[i]) {
            return console.log(`${string} não é um palíndromo.`);
        }
    }
    return console.log(`${string} é um palíndromo.`);
}

validarPalindromo("arara");