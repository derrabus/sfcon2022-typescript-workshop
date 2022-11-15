/**
 * Cheat sheet: type assertions
 */

type CartItem = { name: string, quantity: number, price: number };
type ShoppingCart = CartItem[];
type CartValue = (cartJson: string) => number;

const serializedShoppingCart: string = `[
    {"name": "Small T-Shirt", "quantity": 5, "price": 18.5},
    {"name": "Nice Mug", "quantity": 2, "price": 12},
    {"name": "Package of Stickers", "quantity": 1, "price": 8.5}
]`;

// A version of JSON.parse() that forces me to type-cast the result
function myJsonParse(json: string): unknown {
    return JSON.parse(json);
}

const calculateSerializedCartValue: CartValue = (cartJson) => {
    // TSC can't possibly know how we expect the JSON to be structured.
    // We tell TSC to expect our ShoppingCart structure.
    // Caution: TSC will not check our assertion!
    const cart = myJsonParse(cartJson) as ShoppingCart;

    return cart
        .reduce(
            (sum, item) => sum + (item.quantity * item.price),
            0
        );
};

console.log(calculateSerializedCartValue(serializedShoppingCart));

export {};
