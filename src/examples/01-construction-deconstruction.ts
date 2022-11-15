/**
 * Cheat sheet: construction/deconstruction of objects and arrays
 */

// Object construction
const shirt = {name: 'SymfonyCon T-Shirt', size: 'M'};
const mug = {name: 'SymfonyCon Mug', color: 'black'};
const sticker = {name: 'Symfony Sticker'};

// Array construction
const items = [shirt, mug, sticker];

// Spread operator
const shirtOffer = {...shirt, price: 15.99};
const mugOffer = {...mug, price: 8}
const stickerOffer = {...sticker, price: .5}

const firstTwoOffers = [shirtOffer, mugOffer];
const offer = [...firstTwoOffers, stickerOffer];

console.log('items:', items);

// Array deconstruction
const [firstOffer, secondOffer, ...remainingOffers] = offer;
console.log('First offer:', firstOffer);
console.log('Second offer:', secondOffer);
console.log('Rest:', remainingOffers);

// Object deconstruction
const {price: shirtPrice, ...shirtWithoutPrice} = shirtOffer;

console.log('The shirt costs', shirtPrice);
console.log('This is the shirt:', shirtWithoutPrice);

// Object deconstruction in function signature
const itemNames = items
    .map(({name}) => name);

console.log(itemNames);

export {};
