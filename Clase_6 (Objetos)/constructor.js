
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
console.log(padre.nombreCompleto());
padre.nombre = 'Carlos'
console.log(padre.nombreCompleto());

let madre = new Persona('Laura', 'Quintero','lquintero@gmail.com');
console.log(madre.nombreCompleto());

var miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1

let miBooleano = new Boolean(true);
let miBooleano2 = true;
