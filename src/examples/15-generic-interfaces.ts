/**
 * Cheat sheet: Generic interfaces
 */

interface Shirt {
    name: string;
    size: 'XL' | 'L' | 'M' | 'S' | 'XS';
}

interface Mug {
    name: string;
    color: 'black' | 'white' | 'red' | 'blue' | 'green';
}

function printShirt({name, size}: Shirt) {
    console.log(`That's a ${name}, size ${size}.`);
}

interface KeyValuePair<TKey, TValue> {
    key: TKey,
    value: TValue,
}

const shirtProduct: KeyValuePair<string, Shirt> = {
    key: '4711',
    value: {name: 'SymfonyCon T-Shirt', size: 'XL'}
}

const mugProduct: KeyValuePair<string, Mug> = {
    key: '0815',
    value: {name: 'SymfonyCon Mug', color: 'black'}
}

// This passes the type check
printShirt(shirtProduct.value);

// This does not compile!
// printShirt(mugProduct.value);
