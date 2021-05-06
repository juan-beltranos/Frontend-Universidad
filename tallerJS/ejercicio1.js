console.log("Escribe los numeros a imprimir");
const entrada = process.openStdin();

entrada.addListener("data", function (n) {
    if (n > 1) {
        console.log("Tus numeros inversos son: " + n.reverse());
    } else {
        console.log('Debe agregar mas de un numero');
    }
});