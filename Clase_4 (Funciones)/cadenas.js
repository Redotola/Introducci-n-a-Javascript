// Cadenas y funciones en JS
// Cadenas inmutables en JS

function cambiarValor(parametro){
    parametro = "Adios";
}

// Llamamos
let argumento = 'Hola'
console.log(`Antes funcion ${argumento}`);
cambiarValor(argumento);
console.log(`Despues funcion ${argumento}`);
