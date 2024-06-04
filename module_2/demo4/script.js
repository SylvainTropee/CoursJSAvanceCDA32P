class Movie{

    #title
    #year
    _director

    constructor(title, year,director = "Steven Michel") {
        this.#title = title
        this.#year = year
        this._director = director;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        this.#year = value;
    }

    get director() {
        return this._director;
    }

    set director(value) {
        this._director = value;
    }
}
const movie = new Movie("Titanic", 1995, "James Cameron")
const movie2 = new Movie("Avatar", 2009)

movie.title = "Titanic 2 le retour de l'iceberg"
console.log(movie.title)

//Fonctionnalités ES6

const billion = 1_000_000_000
console.log(billion)


let user = {
    name : "Michel",
    address : null
}


console.log(user.address?.city ?? "Rennes")

//spread
let tab1 = [1,2,3,4]
let tab2 = [5,6,7]

tab1.push(...tab2)
console.log(tab1)








