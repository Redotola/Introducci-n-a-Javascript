// Funciones recursivas
// Imprimir 3,2,1

function imprimirNumeros(n) {
    if (n >= 1) {
        console.log(n);
        imprimirNumeros(n - 1);
    }
}

imprimirNumeros(3); // Imprime 3, 2, 1