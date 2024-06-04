export class Quiz {

    #questions
    #score
    #index

    constructor() {
        this.#questions = [];
        this.#score = 0;
        this.#index = 0;
    }

    displayQuestion(question) {
        document.getElementById('quiz').innerHTML = ""
        document.getElementById('quiz').append(question.getQuestionHTML())
    }

    collectAnswer() {

        const answerId = document.querySelector('input[name=answer]:checked').value

        if (answerId && answerId == this.questions[this.index].correctAnswerId) {
            this.score++
        }
        this.index++
        this.displayNextQuestion()
    }

    displayNextQuestion() {
        if(this.index == this.questions.length){
            this.displayScore()
        }else{
            this.displayQuestion(this.questions[this.index])
        }
    }

    displayScore() {
        document.getElementById('quiz').innerText = `Vous avez collecté ${this.score} point(s) / ${this.questions.length} !`
    }

    addQuestion(question) {
        this.questions.push(question)
    }


    get questions() {
        return this.#questions;
    }

    set questions(value) {
        this.#questions = value;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }

    get index() {
        return this.#index;
    }

    set index(value) {
        this.#index = value;
    }
}