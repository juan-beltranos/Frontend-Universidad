console.log("Escribe los numeros a imprimir");

const entrada = process.openStdin();

entrada.addListener("data", function (numeros) {

    let i = 0;
    let primo = true;

    for (let i = 2; i < numeros; i++) {
        if (numeros % i == 0) {
            primo = false
        }
    }

    if (primo == true) {
        console.log('El numero ' + numeros + " es primo");
    } else {
        console.log('El numero ' + numeros + "no es primo");
    }

});
