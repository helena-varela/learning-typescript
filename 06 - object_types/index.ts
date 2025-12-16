// 1 - Tipo de objeto para função com interface
interface Product{
    name: string,
    price: number,
    isAvailable: boolean,
    quantidade?: number,
}

function showProducts(product: Product){
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível")
    }
    if (product.quantidade) {
        console.log(`tem exatos ${product.quantidade} em estoque`)
    }
}

const shirt:Product = {
    name: "camisa",
    price: 19.99,
    isAvailable: true
}

const dress:Product = {
    name:"vestido",
    price: 56.77,
    isAvailable: true,
    quantidade: 25
}

showProducts(shirt);
showProducts({name: "shorts", price: 38.90, isAvailable: false});
showProducts(dress);

// 2 - EXtending types
interface Human{
    name: string,
    age: number
}

interface SuperHuman extends Human{
    superpowers: string[]
}

const matheus: Human = {
    name: "Matheus",
    age: 25
}

const goku: SuperHuman = {
    name: "Goku",
    age: 30,
    superpowers: ["kamehameha", "genki dama"]
}

console.log(goku);
console.log(goku.superpowers);