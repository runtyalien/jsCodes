const store = new Map([
    ["t-shirt" , 20],
    ["jeans" , 30],
    ["socks" , 40],
    ["underwear" , 50]
]);

let shoppingcart = 0;

/*shoppingcart += store.get("t-shirt");
shoppingcart += store.get("jeans");

console.log(shoppingcart);*/

store.set("hat", 40);
store.delete("hat");

console.log(store.size);

store.forEach((value, key) => console.log(`${key} ${value}`));