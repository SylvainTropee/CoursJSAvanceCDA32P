let randomWord = getRandomWord()
console.log(randomWord)

//tirer un mot aléatoire
function getRandomWord(){
    let num = Math.floor(Math.random() * dico.length)
    return dico[num]
}

//ajout des boutons pour les lettres
function generateLetters(){

    let letters = document.getElementById('letters')

    for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++){
        //je récupère la lettre
        const letter = String.fromCharCode(i)
        //je créé un bouton et j'y inclus ma lettre
        const button = document.createElement('button')
        button.innerText = letter
        button.addEventListener('click', function(){
            checkLetter(letter)
        })
        letters.append(button)
    }
}

function checkLetter(letter/*e si passé en callback*/){
    //console.log(e.target.innerText)

    let randomDomWord = document.getElementById('wordToFind')

    for(let i= 0; i < randomWord.length; i++){
        if(letter == randomWord[i]){
            console.log("Bonne lettre !")
            let text = randomDomWord.innerText
            text[i] = letter
            console.log(text)
        }
    }

}

function displayRandomWord(){
    let domWord = document.getElementById('wordToFind')
    domWord.innerText = randomWord.replace(/\w/g, "_")
}

function init(){
    generateLetters()
    displayRandomWord()
}

window.onload = init

