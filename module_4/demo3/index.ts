import {GameGenre} from "./GameGenre";

class Game implements GameInterface{

    //readonly permet de passer en mode constante
    private /*readonly*/ _name: string

    constructor(name, private _genre: GameGenre) {
        this._name = name
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get genre(): GameGenre {
        return this._genre;
    }

    set genre(value: GameGenre) {
        this._genre = value;
    }

    public display(){
        console.log(`${this.name} est un jeu de ${this.genre}`)
    }

    bidule: { name: string; truc: { num: number } };
    score: number;

}


let game : Game = new Game("Mario Kart", GameGenre.SPORT)
game.display()

interface GameInterface {
    score : number
    bidule : {
        name : string
        truc : {
            num : number
        }
    }
}

let gi : GameInterface = {
    score : 12,
    bidule : {
        name : "Son nom",
        truc : {
            num : 48,
        }
    }
}


















