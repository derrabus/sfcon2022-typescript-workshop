console.log('Hello World!');

let a = 1;
let b: unknown = 2;

b = 'foo';

console.log(a + (b as any));
