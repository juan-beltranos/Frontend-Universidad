//console.log('---------- string template------------');

const user = {
    name: 'juan',
    email: 'juan@juan.com',
    phone: 12345676
};

//console.log(`User Data: ${user.name + user.email + user.phone}`);

console.log('----------Objetos-----------');

const cliente = {
    id: 1,
    nombre: 'juan',
    apellido: 'Beltran',
    numero: 12345678,
    producto: {
        id: 1,
        nombre: 'teclado',
        valor: 11000,
        detalleProducto: {
            id: 1,
            descripcion: 'bonito teclado rojo',
            cantidad: 2
        }
    },
    factura: {
        id: 1,
        fecha: Date(),
        total: 12000,
        subtotal: 11000
    },
    fxNombreCompleto() {
        console.log(` mi nombre es : ${this.nombre}${this.apellido} ${this.numero}`);
    },
    fxTabularAtributos() {
        console.table(this);
    }
}

//console.table(cliente.producto.detalleProducto);

let otroCliente = { ...cliente }
otroCliente.nombre = 'Maria';
otroCliente.producto.nombre = 'Carro';
otroCliente.factura.total = 5000000000;

//console.table(cliente)
//console.table(otroCliente);

const obj = Object.create({otroCliente});

obj.nombre = 'sebas';
obj.otroCliente;