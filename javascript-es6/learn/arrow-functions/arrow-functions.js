const arr = [1,3,4,6,7,8];
// arrow function
const newArr = arr.map(item => item + 2);

console.log(newArr);

// function with const
const test = () => ({nome: "Ricardo"});

console.log(test());