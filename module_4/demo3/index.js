"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameGenre_1 = require("./GameGenre");
var Game = /** @class */ (function () {
    function Game(name, _genre) {
        this._genre = _genre;
        this._name = name;
    }
    Object.defineProperty(Game.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        set: function (value) {
            this._genre = value;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.display = function () {
        console.log("".concat(this.name, " est un jeu de ").concat(this.genre));
    };
    return Game;
}());
var game = new Game("Mario Kart", GameGenre_1.GameGenre.SPORT);
game.display();
var gi = {
    score: 12,
    bidule: {
        name: "Son nom",
        truc: {
            num: 48,
        }
    }
};
