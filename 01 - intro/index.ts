const firstName = "helena";
const anotherName = 2;
const x = true;

function greeting(name: string){
    console.log("olá", name)
}

greeting(firstName);
// greeting(anotherName); Nao vai ser executado já que na função greeting tem que ser string
// greeting(x);