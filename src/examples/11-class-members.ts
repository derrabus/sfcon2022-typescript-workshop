/**
 * Cheat sheet: class member visibility and CPP
 */

class CartItem {
    // Classes allow us to define a constructor function for objects
    constructor(
        public readonly product: string,
        private readonly price: number,
        private readonly quantity: number = 1,
    ) {
    }

    public get total(): number {
        return this.price * this.quantity;
    }

    public toString(): string {
        return `${this.quantity}x ${this.product} (${this.price} each): ${this.total}`;
    }
}

const item = new CartItem('Pack of Stickers', 5);

// Virtual properties are not dumped by console.log()
console.log(item);
console.log('Product:', item.product);
console.log('Total:', item.total);

// Access modifiers don't exist in the compiled JS code.
// Runtime access IS possible.
console.log('Quantity:', (item as any).quantity);
(item as any).quantity = 2;
console.log('Quantity:', (item as any).quantity);
console.log(item.toString());

export {};
