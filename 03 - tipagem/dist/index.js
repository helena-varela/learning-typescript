"use strict";
console.log("testeeee");
// Array: listas unicamente de um tipo
let numeros = [1, 2, 3];
numeros.push(5);
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
const nums = [100, 300];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
// Any: array que aceita varios tipos de dados
const arr = [1, true, "olá", { nome: "helena" }];
console.log(arr);
// Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// Retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("helena"));
// Função anônima
setTimeout(function () {
    const salario = 1000;
    console.log(salario);
}, 2000);
// Tipos de objeto
function passCoordinates(coord) {
    console.log("x coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}
const objCoord = { x: 330, y: 234.6 };
passCoordinates(objCoord);
// Props opcional - Se passar um props com ? então será opcional
function showNumbers(a, b, c) {
    console.log("A: ", a);
    console.log("B: ", b);
    if (c) {
        console.log("C: ", c);
    }
}
showNumbers(1, 4, 5);
showNumbers(3, 7);
// Validação de props opcionais
function advencedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}`;
    }
    return `Olá ${firstName}`;
}
console.log(advencedGreeting("helena"));
console.log(advencedGreeting("helena", "varela"));
// Union Type - dois tipos para o argumento de uma função
function showBalance(balance) {
    return `o saldo da conta é R$${balance}`;
}
console.log(showBalance(1544.67));
console.log(showBalance("1984.67"));
function showUserRole(role) {
    if (typeof role == "boolean") {
        return "usuário não encontrado";
    }
    return `a função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("admin"));
function showId(id) {
    console.log(`o ID é ${id}`);
}
showId("122");
showId(100);
function showCoord(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 23
};
showCoord(coordObj);
// Literal types
function showDirection(direction) {
    console.log(`direção escolhida é ${direction}`);
}
showDirection("left");
// showDirection("top"); Não será aceito
// Non-null assertion operators
const p = document.getElementById("some-p");
console.log(p?.innerText); // precisa do ?
//# sourceMappingURL=index.js.map