/**
 * Cheat sheet: scoped variables
 */

interface CartItem {
    product: string;
    quantity: number;
    price: number;
}

interface ShoppingCart {
    push(item: CartItem): void;
    getTotal(): number;
    getItems(): CartItem[];
}

// Exported symbols can be imported into other modules
export function createCart(): ShoppingCart {
    // A variable that only lives in the scope of a function call
    const items: CartItem[] = [];

    return {
        push(item: CartItem): void {
            // The variable is available inside this closure
            items.push(item);
        },

        getTotal(): number {
            return items.reduce(
                (sum, item) => sum + (item.quantity * item.price),
                0
            );
        },

        getItems(): CartItem[] {
            return [...items];
        }
    };
}

const myCart = createCart();
myCart.push({product: 'Large Shirt', price: 12, quantity: 5});
myCart.push({product: 'Nice Mug', price: 8, quantity: 1});

console.log(myCart.getTotal());
