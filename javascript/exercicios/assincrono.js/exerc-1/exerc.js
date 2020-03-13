var inputElement = document.querySelector('input[name=nome]');
do {

var checaIdade = function () {
    return new Promise(function (resolve, reject) {
        if (inputElement.value >= 18){
            resolve();
        } else {
            reject();
        }
    });
};

checaIdade(50)
    .then(function () {
        console.log("maior de idade");
    })
    .catch(function () {
        console.warn("Menor de idade");
    });
}while (inputElement.value < 0);
