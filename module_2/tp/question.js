export class Question {

    #label
    #answers
    #correctAnswerId

    constructor(label, answers, correctAnswerId) {
        this.#label = label
        this.#answers = answers
        this.#correctAnswerId = correctAnswerId
    }

    getQuestionHTML() {
        const divLabel = document.createElement('div')
        const divContainer = document.createElement('div')
        const divButton = document.createElement('div')

        divLabel.innerText = this.label
        divContainer.append(divLabel)

        //création des boutons pour répondre à la question
        this.answers.forEach(function (val, idx) {

            const input = document.createElement('input')
            input.type = 'radio'
            input.name = "answer"
            input.value = idx
            input.id = 'answer-' + idx

            const label = document.createElement('label')
            label.innerText = val
            label.setAttribute('for',  'answer-' + idx)
            divButton.append(input)
            divButton.append(label)
        })

        divContainer.append(divButton)

        return divContainer
    }


    get label() {
        return this.#label;
    }

    set label(value) {
        this.#label = value;
    }

    get answers() {
        return this.#answers;
    }

    set answers(value) {
        this.#answers = value;
    }

    get correctAnswerId() {
        return this.#correctAnswerId;
    }

    set correctAnswerId(value) {
        this.#correctAnswerId = value;
    }
}

















