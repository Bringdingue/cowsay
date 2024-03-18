const myLife = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Je suis ${myLife.name} de ${myLife.campus}`,
    e : "oO",
    T : "U "
}));
    