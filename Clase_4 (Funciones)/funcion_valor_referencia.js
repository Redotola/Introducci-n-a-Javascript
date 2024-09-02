// Paso valor en JS
// Pasando informacion de tipo primitivo (number, bool, string)

function cambiarValor(parametro){
    parametro = 20;
};

let argumento = 10;
cambiarValor(argumento);
console.log(argumento);

// Paso por referencia JS
// Pasando informacion de tipo objeto (array, objeto, funcion)

function cambiarObjeto(parametro){
    parametro[0] = 20;
};

// Llamamos a la funcion
let arreglo = [10];
console.log(`Antes funcion: ${arreglo[0]}`);
cambiarValor(arreglo);