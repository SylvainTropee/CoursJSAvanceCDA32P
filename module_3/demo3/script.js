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
const zoo = async () => {
    const cat = await getAnimal(1)
    const giraffe = await getAnimal(2)
    return [cat, giraffe]
}

const zoo2 = async () => {
    const cat =  getAnimal(3)
    const giraffe = getAnimal(4)
    return await Promise.all([cat, giraffe])
}

console.log("Début du programme")
zoo().then(data => console.log(data))
zoo2().then(data => console.log(data))
console.log("Fin du programme")


async function bidule(){
    let response = await fetch('url')

    if(response.ok){
        return response.json()
    }
}

 async function useBidule(){
    let data = await  bidule()
    data.then()
}














