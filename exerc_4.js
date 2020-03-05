const assert = require('assert');

function experiencia(anos, teste) {

    if (anos < 2)  {
        teste = "iniciante";
    }else if (anos < 4){
        teste = "intermediario";
    }else if (anos < 7){
        teste = "Avançado";
    }else
        teste = "Guru";
}

var teste;
var anosEstudo = 7;
var testado = experiencia(anosEstudo);

try{
     assert.equal(teste, testado)
}catch (e) {
    console.log(e);
}