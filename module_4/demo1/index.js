// | permet de choisir un type ou l'autre
function hello(name, nb) {
    if (nb === void 0) { nb = 10; }
    for (var i = 0; i < nb; i++) {
        console.log("Hello " + name);
    }
}
hello("Sylvain", 10);
