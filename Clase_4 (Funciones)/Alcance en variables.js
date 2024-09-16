// Alcance de Variables en JS
let variableGlobal = 5;

// Modificar el valor
variableGlobal = 10;


// Definicion en funcion
function miFuncion(variableLocal){
    console.log(variableLocal); // Acceso a variable local
    console.log(variableGlobal); // Acceso a variable global
    // Modificar el valor de la variable global
    variableGlobal = 20;
}

// Llamada a la funcion
miFuncion(variableGlobal);

console.log(variableGlobal); // Muestra el nuevo valor de la variable global


