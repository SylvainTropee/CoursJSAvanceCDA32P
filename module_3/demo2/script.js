let pikachu;
//utilisation de fetch pour récupérer des ressources (d'un api ou autre)
fetch("https://pokeapi.co/api/v2/pokemon/pikachu"/*,
    {method: "POST", body: JSON.stringify({})}*/)
    //.then() permet d'éxécuter du code une fois que la reponse est revenue
    .then(response => response.json())
    //l'utilisation de response.json() renvoie une Promise, le résultat étant passé automatique en paramètre
    //du .then() qui suit
    .then(data => {
        pikachu = data
        let image = document.createElement('img')
        image.src = pikachu.sprites['other']['home'].front_default
        document.body.append(image)
    })

//a ce moment là pikachu est vide car le script a continué son éxécution
console.log(pikachu)