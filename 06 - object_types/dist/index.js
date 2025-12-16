"use strict";
function showProducts(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
    if (product.quantidade) {
        console.log(`tem exatos ${product.quantidade} em estoque`);
    }
}
const shirt = {
    name: "camisa",
    price: 19.99,
    isAvailable: true
};
const dress = {
    name: "vestido",
    price: 56.77,
    isAvailable: true,
    quantidade: 25
};
showProducts(shirt);
showProducts({ name: "shorts", price: 38.90, isAvailable: false });
showProducts(dress);
const matheus = {
    name: "Matheus",
    age: 25
};
const goku = {
    name: "Goku",
    age: 30,
    superpowers: ["kamehameha", "genki dama"]
};
console.log(goku);
console.log(goku.superpowers);
//# sourceMappingURL=index.js.map