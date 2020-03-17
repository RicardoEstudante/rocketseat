var inputElement = document.querySelector('input[name=nome]');
if (inputElement.value < 0){
    alert(" Idade invalida ");
}

function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return idade >= 18 ? resolve() : reject();
        }, 1000)
    });
}

checaIdade(inputElement.value)
    .then(function () {
        console.log("maior de idade");
    })
    .catch(function () {
        console.warn("Menor de idade");
    });