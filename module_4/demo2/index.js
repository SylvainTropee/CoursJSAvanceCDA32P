//variables
var isBoolean = true;
var age = 22;
var test = 10;
//test = "coucou" ne fonctionne pas
var test2 = 10;
test2 = "coucou";
var Animal;
(function (Animal) {
    Animal["LICORNE"] = "P\u00E9gase";
    Animal[Animal["TARASQUE"] = 3] = "TARASQUE";
    Animal["PAPILLON"] = "Sim\u00E9on";
})(Animal || (Animal = {}));
console.log(Animal.LICORNE);
