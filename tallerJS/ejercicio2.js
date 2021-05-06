console.log("Escribe los numeros a imprimir");

const entrada = process.openStdin();

entrada.addListener("data", function sumar(valor) {

    var suma = 0;

    for (var i = 0; i < valor.length; i++) {
        suma += parseInt(valor + [i]);
    }

    console.log("La Suma de los valores de " + valor + " es: " + suma);

});







