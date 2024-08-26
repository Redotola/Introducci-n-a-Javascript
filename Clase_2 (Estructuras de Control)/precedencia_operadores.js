// Precedencia operadores

// 1. Parentesis
// 2. Operadores unarios, como -, ++, --, !
// 3. Aritmeticos *, / y %
// 4. Aritmeticos + y -
// 5. Comparativos >, <, >=, <=
// 6. Igualdad == y !=
// 7. Logicos && y ||
// 8. Asignacion =, =+, -=, *=, etc

// Ej. Se revisa de izq a der
let a = 12 / 3 + 2 * 3 - 1;
console.log(a);

// Sentencia if

let miNumero = 0;

// Revisar si el numero es positivo
if (miNumero > 0) {
    console.log(`El numero es positivo ${miNumero}`);
}else{
    console.log(`El numero es negativo ${miNumero}`);
}

if (miNumero > 0){
    console.log(`El numero es positivo ${miNumero}`)
}else if(miNumero < 0){
    console.log(`El numero es negativo ${miNumero}`)
}else{
    console.log(`El numero es cero: ${miNumero}`)
}