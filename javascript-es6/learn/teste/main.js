const user = {
    nome: 'Ricardo',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

function showName({nome , idade}) {
    console.log(nome, idade);
}

showName(user);

const { nome, idade, endereco: { cidade} } = user;

console.log(nome);
console.log(idade);
console.log(cidade);