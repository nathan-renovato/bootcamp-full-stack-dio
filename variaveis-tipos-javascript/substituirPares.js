function substituirPares(arr) {
    if (!arr) {
        return console.log("Insira um array válido.");
    }
    if (arr.length === 0) {
        return console.log(-1);
    }

    arr.forEach(item => {
        if (item % 2 === 0) {
            arr[arr.indexOf(item)] = 0;
        }
    });
    console.log(arr);
};


substituirPares([1, 3, 4, 6, 80, 33, 23, 90]);