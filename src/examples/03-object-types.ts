/**
 * Cheat sheet: objects, arrays, functions
 */

// Objects
const user: {name: string, email?: string} = {name: 'John Doe'};
user.email = 'john.doe@example.com'; // We can modify the object although it's const!

console.log(typeof user, user);

// Arrays
const luckyNumbers: number[] = [4, 13, 31];
luckyNumbers.push(42); // We can modify the array although it's const!

console.log(typeof luckyNumbers, luckyNumbers, Array.isArray(luckyNumbers));

// Tuples
const nameAndAge: [string, number] = ['John', 42];

console.log(typeof nameAndAge, nameAndAge, Array.isArray(nameAndAge));

// Generic Arrays
const users: Array<{name: string, email: string}> = [];
users.push({name: 'John Doe', email: 'john.doe@example.com'});
users.push({name: 'Jane Doe', email: 'jane.doe@example.com'});

console.log(typeof users, users, Array.isArray(users));

// Functions
// Classic declaration
function add1(a: number, b: number): number {
    return a + b;
}

// Closure declaration
const add2 = function (a: number, b: number): number {
    return a + b;
};

// Arrow function
const add3: (a: number, b: number) => number = (a, b) => a + b;

console.log(typeof add3, add3, add3(1, 3));

// null
const nothing: null = null;
console.log(typeof nothing, nothing, nothing === null);

export {};
