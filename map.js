// const map1 = new Map();

// map1.set('bar', 'baz');
// map1.set('tamal',12)


// console.log(map1.size);
// expected output: 2

// map1.clear();

// console.log(map1.size);
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.delete('bar'));
console.log(map1.has('bar'));