async function addItemCart(userCart, item) {
   userCart.push(item);
};

async function deleteItem(userCart, name) {
   const index = userCart.findIndex((item) => item.name === name);
   if(index != -1){
      userCart.splice(index, 1);
   }
};

// Remove quantidades de itens, se quantidade < 1 deleta do item do carrinho
async function removeItem(userCart, item) {
   const indexFound = userCart.findIndex((p) => p.name === item.name);
   
   if (indexFound == -1){
      console.log("item não encontrado");
      return;
   }

   if (userCart[indexFound].quantity > 1) {
      userCart[indexFound].quantity--;
      userCart[indexFound].subtotal = () => userCart[indexFound].price * userCart[indexFound].quantity;
      return;
      
   }
   
   if (userCart[indexFound].quantity == 1) {
      userCart.splice(indexFound, 1);
      return;
   }

}

async function displayCart(userCart) {
   console.log("SHOPEE CART LIST:");
   userCart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
   })
};

async function calculateTotal(userCart) {
   const result = userCart.reduce((total, item) => total  + item.subtotal(), 0);
   console.log(`\n 🎁 TOTAL CART ${result}`);
};

export {
   addItemCart,
   calculateTotal,
   deleteItem,
   removeItem,
   displayCart
};
