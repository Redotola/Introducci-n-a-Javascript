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

persona.tel = '55443322';
persona.tel = '44332211';

console.log(persona);

delete persona.tel;

console.log(persona) 

// Concatenar cada valor de cada propiedad
console.log(persona.name + ', ' + persona.last_name);

// for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Values of the object
let personaArray = Object.values(persona);
console.log(personaArray);

// JSON string
let personaString = JSON.stringify(persona);
console.log(personaString);