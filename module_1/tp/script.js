let randomWord = getRandomWord()
let attempt = 5
console.log(randomWord)

//tirer un mot aléatoire
function getRandomWord() {
    let num = Math.floor(Math.random() * dico.length)
    return dico[num]
}

//ajout des boutons pour les lettres
function generateLetters() {

    let letters = document.getElementById('letters')

    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
        //je récupère la lettre
        const letter = String.fromCharCode(i)
        //je créé un bouton et j'y inclus ma lettre
        const button = document.createElement('button')
        button.innerText = letter
        button.addEventListener('click', function () {
            checkLetter(letter)
        })
        //button.addEventListener('click', checkLetter)
        letters.append(button)
    }
}

function checkLetter(letter/*e si passé en callback*/) {
    //console.log(e.target.innerText)
    let randomDomWord = document.getElementById('wordToFind')
    let isLetterCorrect = false

    for (let i = 0; i < randomWord.length; i++) {
        if (letter == randomWord[i]) {
            randomDomWord.innerText = randomDomWord.innerText.substring(0, i)
                + letter + randomDomWord.innerText.substring(i + 1)
            isLetterCorrect = true
        }
    }

    if(!isLetterCorrect){
        document.getElementById('attempts').innerText = --attempt
    }

    checkWinOrLoose()
}

function checkWinOrLoose(){

    let domWord = document.getElementById('wordToFind').innerText
    //condition de victoire
    if(attempt > 0 && domWord == randomWord){
        alert("Bravo t'es un champion, champion !")
    }

    //condition de perte
    if(attempt == 0 && domWord != randomWord){
        alert("C'est perdu !")
    }

}

function displayRandomWord() {
    let domWord = document.getElementById('wordToFind')
    domWord.innerText = randomWord.replace(/\w/g, "_")
}

function reset(){
    window.location.reload()
}

function init() {
    generateLetters()
    displayRandomWord()
    document.getElementById('reset').addEventListener("click", reset)
}

window.onload = init

