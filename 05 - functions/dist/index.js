"use strict";
// 1 - Void
function withoutReturn() {
    console.log("essa função não tem retorno");
}
withoutReturn();
// 2- Callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    // essa função recebe outra função que recebe uma string e retorna outra string (f: (name: string) => string)
    // já o outro parâmetro (userName: string) quer dizer que a função recebe um userName do tipo string
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "helena");
// 3 - Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, true]));
console.log(firstElement(["hello", "world", 22]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Helena" }, { age: 20 });
console.log(newObject);
// 4 - Unknow
function doSomething(x) {
    if (typeof x === "number") {
        console.log("x é um numero");
    }
    else if (Array.isArray(x)) {
        console.log(`o primeiro elemento do array é ${x[0]}`);
    }
}
doSomething(10);
doSomething([9, 8, 7]);
// 5 - Never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum erro")
// 6 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3));
//# sourceMappingURL=index.js.map