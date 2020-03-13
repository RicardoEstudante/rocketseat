
var listElement = document.querySelector('#div ul');
var inputElement = document.querySelector('#div input');
var buttonElement = document.querySelector('#div button');

var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.gIthub.com/users/diego3g/repos');
        xhr.send(null);


        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    });
};

minhaPromise()
    .then(function (response) {
        var teste = response;
        console.log(teste)
    })
    .catch(function (error) {
        console.warn(error);
    });

