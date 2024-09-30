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
