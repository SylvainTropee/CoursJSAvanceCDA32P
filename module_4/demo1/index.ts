                                    // | permet de choisir un type ou l'autre
function hello(name : string, nb : number | undefined = 10) : void {
    for(let i : number = 0; i < nb; i++){
        console.log("Hello " + name)
    }
}

hello("Sylvain", 10)