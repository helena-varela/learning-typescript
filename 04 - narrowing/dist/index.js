// Narrowing é um recurso para identificar tipos de dados assim executando o programa baseado no tipo identificado
// Tipos de Narrowing:
// 1 - Type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("impossível realizar a soma!");
    }
}
sum("4", "6");
sum(7, 8);
sum("4", 5);
sum(4, "5");
// 2 - Checar se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "mult") {
            const multi = arr.reduce((i, total) => i * total);
            console.log(multi);
        }
    }
    else {
        console.log("digite uma operação");
    }
}
operations([1, 5, 3]);
operations([1, 2, 3], "sum");
operations([3, 2, 4], "mult");
// 3 - Instanceof
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function greetingUser(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}! deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}!`);
    }
}
greetingUser(jhon);
greetingUser(paul);
// 4 - Operador in
class Dog {
    name;
    breed;
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const lulu = new Dog("Lulu");
const spot = new Dog("Spot", "Pastor Alemão");
function showDogDetails(dog) {
    if (dog.breed) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro não tem raça`);
    }
}
showDogDetails(lulu);
showDogDetails(spot);
export {};
//# sourceMappingURL=index.js.map