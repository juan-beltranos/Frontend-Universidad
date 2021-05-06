const vehiculo = {

    color: 'Negro',
    encendido: false,
    radioLlanta: 235,
    capacidadTanque: 100,
    cantCombustible: 0,
    kilometroXlitro: 0,
    kilometrajeVehiculo: 0,
    pi: 3.14,

    tanquearVehiculo() {
        if (this.cantCombustible < this.capacidadTanque) {
            this.cantCombustible += (Math.round(Math.random() * 10) * 2);
            if (this.cantCombustible > this.capacidadTanque) {
                this.cantCombustible = this.capacidadTanque;
            }
        }
        console.log(`El vehiculo esta tanqueado, puede recorrer : ${this.cantCombustible} km`);
    },

    GiroLlantaVehiculo() {
        console.log(`Un Giro con la llanta es de:  ${this.radioLlanta} y avanza : ${((this.pi * this.radioLlanta))} Mts`);
    },

    encenderVehiculo() {
        if (this.cantCombustible >= 2) {
            this.encendido = true;
            console.log(`Vehiculo Encendido`);
        } else {
            console.log(`El vehiculo no tiene gasolina suficiente`);
        }
    },

    acelerarVehiculo() {
        if (this.cantCombustible >= 2) {

            let acelerar = Math.round(Math.random() * 10 * 3);

            if (acelerar > this.cantCombustible) {
                console.log(`El vehiculo esta acelerando : ${this.cantCombustible} Km`);
                this.kilometrajeVehiculo += this.cantCombustible;
                this.cantCombustible = 0;
            } else {
                this.cantCombustible -= acelerar;
                console.log(`El vehiculo esta acelerando  : ${acelerar} Km`);
                this.kilometrajeVehiculo += acelerar;
            }

        } else {
            console.log(`El vehiculo no tiene sufuciente gasolina`);
            this.apagarVehiculo();
        }
    },

    apagarVehiculo() {
        this.encendido = false;
        console.log(`Vehiculo Apagado`);
    }
};
console.log('--------------Descripcion del vehiculo----------------');
console.log(vehiculo);

console.log('------------------Algortimo del vehiculo---------------');
vehiculo.tanquearVehiculo();
vehiculo.GiroLlantaVehiculo();
vehiculo.encenderVehiculo();

do {
    vehiculo.acelerarVehiculo();
    console.log(`El vehiculo se esta quedando sin gasolina, estado actual : ${vehiculo.cantCombustible}`)

} while (vehiculo.cantCombustible > 2);

vehiculo.apagarVehiculo();

console.log('------------------kilometros Recorridos---------------');
console.log(`El vehiculo recorrio un total de :  ${vehiculo.kilometrajeVehiculo} KM`)