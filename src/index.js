import * as cartService from './services/cart.js'
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log('🛒 Welcome to Cart Shopee 🛒')

const item1 = await createItem('Mouse', 100, 3);
const item2 = await createItem('Mousepad', 50, 2);


await cartService.addItemCart(myCart, item1);
await cartService.addItemCart(myCart, item2);
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);

await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);