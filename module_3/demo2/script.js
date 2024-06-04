let pikachu;

fetch("https://pokeapi.co/api/v2/pokemon/pikachu"/*,
    {method: "POST", body: JSON.stringify({})}*/)
    .then(response => response.json())
    .then(data => {
        pikachu = data
        let image = document.createElement('img')
        image.src = pikachu.sprites['other']['home'].front_default
        document.body.append(image)
    })

console.log(pikachu)