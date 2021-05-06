console.log("Escribe los numeros a imprimir");

const entrada = process.openStdin();

entrada.addListener("data", function sumar(valor) {

    let centena, decena, unidad;

    centena = Math.floor(valor / 100);
    decena = Math.floor((valor % 100) / 10);
    unidad = Math.floor((valor % 100) % 10);

    if (centena == unidad) {
        console.log('El numero es capicua');
    }else{
        console.log('El numero no es capicua');
    }

});



