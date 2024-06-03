//déclarations
let sportJo = "Break Dance"
let sportJo2 = "Athlétisme"

let yearJo = 2024

let cities = ['Paris', 'Lille', "Bayonne", "Nantes"]

console.log(typeof sportJo)
console.log(yearJo)
console.log(cities)

//structure de code
for (let city of cities) {
    console.log(city)
}

let date = new Date()

// === test valeur et type
if (date.getFullYear() === yearJo) {
    console.log("C'est cette année les JO !")
}


//fonctions
(function getSport(index) {
    const sports = [
        "Break Dance",
        "Escalade de vitesse",
        "Flag Football",
        "Skateboard"
    ]
    console.log(sports[index])
})(1)
///////////////////////////////
//fonction anonyme stockée dans une variable
const getSport2 = function (index) {
    const sports = [
        "Break Dance",
        "Escalade de vitesse",
        "Flag Football",
        "Skateboard"
    ]
    console.log(sports[index])
}

//////////////////////////////
//fonction fléchée
const getSport3 =  (index) => {
    const sports = [
        "Break Dance",
        "Escalade de vitesse",
        "Flag Football",
        "Skateboard"
    ]
    console.log(sports[index])
}






















