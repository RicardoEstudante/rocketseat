// REST

//rest with objects
const user = {
    name: 'ricardo',
    age: '22',
    company: '55pbx'
};

const { name, ...rest } = user;

console.log(name);
console.log(rest);

// rest with arrays

const arr = [1,2,3,4,5,6,7];
const [a,b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

// rest with funtions params

function soma(...params) {
    return params;
}

console.log(soma(1, 3, 4, 6, 9));