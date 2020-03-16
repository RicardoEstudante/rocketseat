"use strict";

var user = {
  nome: 'Ricardo',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};

function showName(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

showName(user);
var nome = user.nome,
    idade = user.idade,
    cidade = user.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);
