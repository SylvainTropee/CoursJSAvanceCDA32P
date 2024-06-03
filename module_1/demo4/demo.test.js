
const multiply = require('./script.js')

describe("Mon premier scénario de test", () => {
    it("Vrai = Vrai ?", () => {
        expect(true).toBe(true)
    })

    it("La multiplication est bonne ? ", () => {
        expect(multiply(2,5)).toBe(10)
    })
})