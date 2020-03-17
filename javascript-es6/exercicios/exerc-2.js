const users = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const takeAge = users.map(users => users.idade);
console.log(takeAge);

const filtro = users.filter(
    users => users.idade > 18 && users.empresa === 'Rocketseat');
console.log(filtro);

const finding = users.find(users => users.empresa === 'Google');
console.log(finding);

const age = users.map(users => ({ ...users, idade: users.idade * 2}))
    .filter(users => users.idade <= 50);

console.log(age);