/**
 * Cheat sheet: classes
 */

class CartItem {
    product: string;
    quantity: number;
    price: number;

    // Classes allow us to define a constructor function for objects
    constructor(
        product: string,
        quantity: number,
        price: number,
    ) {
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }

    getTotal(): number {
        return this.price * this.quantity;
    }

    toString(): string {
        return `${this.quantity}x ${this.product} (${this.price} each): ${this.getTotal()}`;
    }
}

interface ShoppingCart {
    push(item: CartItem): void;
    getTotal(): number;
    getItems(): CartItem[];
}

class InMemoryCart implements ShoppingCart {
    items: CartItem[] = [];

    push(item: CartItem): void {
        this.items.push(item);
    }

    getTotal(): number {
        return this.items.reduce(
            (subtotal, item) => subtotal + item.getTotal(),
            0,
        );
    }

    getItems(): CartItem[] {
        return [...this.items];
    }
}

const myCart: ShoppingCart = new InMemoryCart();
myCart.push(new CartItem('SymfonyCon T-Shirt', 8, 15.99))
myCart.push(new CartItem('Pack of Stickers', 8, 2));

console.log(myCart.getTotal());

// The type of a class instance is still "object"
console.log(typeof myCart);

// However, we can get the name of the constructor function at runtime!
console.log(myCart.constructor.name);

export {};
