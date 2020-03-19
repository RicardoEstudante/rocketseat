//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [ ...arr1, ...arr2];

console.log(arr3);

const user = {
    nome: 'Ricardo',
    age: 22,
    company: '55pbx'
};

const userTwo = { ...user, nome: 'Ricardo Carvalho' };
console.log(userTwo);

