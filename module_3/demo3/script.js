//fonction qui va mettre quelques secondes à s'éxécuter
async function takeALotOfTime(index) {
    let i = 0

    while (i < 2_000_000_000) {
        i++
    }
    console.log("Fin du truc qui prend du temps " + index)
}

// function getAnimal(index){
//
// }
//
// const getAnimal = function(index){
//
// }
//fonction fléchée stockée dans une variable js
//le mot-clé async permet de transformer le retour d'une fonction en Promise
const getAnimal = async (index) => {
    const aAnimals = {
        1: "Chat",
        2: "Girafe",
        3: "Baleineau",
        4: 'Capybara',
        5: "Ornithorynque"
    }
    takeALotOfTime(index)
    return aAnimals[index]
}

//ici on utilise await pour attendre la résolution de notre premier appel à getAnimal()
//avant de passer au suivant, intéressant si on a besoin des données du premier pour faire le second appel
//sinon c'est moins performant
const zoo = async () => {
    const cat = await getAnimal(1)
    const giraffe = await getAnimal(2)
    return [cat, giraffe]
}

//ici on lance les 2 appels à getAnimal de manière simultané
//on attend que les 2 appels soient terminés pour continuer -> plus performant
const zoo2 = async () => {
    const cat =  getAnimal(3)
    const giraffe = getAnimal(4)
    //Promise.all() permet d'attendre la résolution des 2 promesses avant de continuer
    return await Promise.all([cat, giraffe])
}

console.log("Début du programme")
zoo().then(data => console.log(data))
zoo2().then(data => console.log(data))
console.log("Fin du programme")


//exemple avec de l'utilisation de fetch avec avec await et async
async function bidule(){
    let response = await fetch('url')

    //response.ok ou response.status == 200 permet de s'assurer du bon fonctionnement de notre appel
    if(response.ok){
        return response.json()
    }
}

 async function useBidule(){
    let data = await  bidule()
}














