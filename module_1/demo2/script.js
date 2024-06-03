const cities = ["Rennes", "Nantes", "Quimper", "Niort"]

//récupérer l'élément html
let select = document.getElementById("cities");

//boucle sur mon tableau
cities.forEach(function(value){

    //création de l'option
    let option = document.createElement("option");
    option.innerText = value
    option.value = value.toLowerCase()
    //ajout dans le dom de l'objet
    select.append(option)
})

//ajout d'évènement sur le select
select.addEventListener("change", () => {
    console.log(this)
    let p = document.createElement('p')
    p.innerText = `La ville choisie est ${select.value}`
    document.body.append(p)
})



















