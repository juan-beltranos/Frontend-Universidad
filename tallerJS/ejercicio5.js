console.log("Escribe los numeros a imprimir");

const entrada = process.openStdin();

entrada.addListener("data", function (numeros) {

    maximo = 0;

    for (var i = 0, len = numeros.length; i < len; i++) {
        if (maximo < numeros[i]) {
            maximo = numeros[i];
        }
    }
    console.log('El numero mayor es : ' + maximo);

});
