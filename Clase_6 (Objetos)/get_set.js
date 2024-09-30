// Opcion 1 para declarar objetos con metodos

let persona = {
    name: "Juan",
    last_name: "Perez",
    email: 'jperez@gmail.com',
    age: 28,
    idioma: 'es',
    full_name: function(){
        return (this.name + ' ' + this.last_name);
    },
    is_adult: function(){
        return this.age >= 18;
    },
    get fullname(){
        return this.name + " " + this.last_name;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

console.log(persona.fullname)
console.log(persona.lang)
persona.lang = 'en';
console.log(persona.lang)
console.log(persona.idioma)