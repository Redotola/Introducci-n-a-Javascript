// Tipos de datos primitivos no tienen propiedades por defecto
let x = 10;
console.log(x.length);

// Opcion 1 para declarar objetos con metodos
let persona = {
    name: "Juan",
    last_name: "Perez",
    email: 'jperez@gmail.com',
    age: 28,
    full_name: function(){
        return (this.name + ' ' + this.last_name);
    },
    is_adult: function(){
        return this.age >= 18;
    }
}

console.log(persona.name);
console.log(persona.age);
console.log(persona.last_name);
console.log(persona.full_name());
console.log(persona.is_adult());

console.log(persona)

// Opcion 2 para declarar objetos y metodos
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log(persona2.tel);

// Recorrer propiedades en un objeto
for (propiedad in persona2){
    console.log(propiedad)
    console.log(persona2[propiedad])
}


// Opcion 3

class persona1{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }


    get name() {
        return this.name;
    }

    set name(new_name){
        this.name = new_name;
    }
}