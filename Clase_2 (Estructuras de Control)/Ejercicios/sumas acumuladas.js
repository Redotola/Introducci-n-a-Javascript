let maximo = 5, acumuladosuma = 0, inicio = 1;

for (let numero = 1; numero <= maximo; numero++) {
    acumuladosuma += numero;
    console.log(acumuladosuma)
}

console.log(`La suma de los numeros desde 0 hasta ${maximo} es: ${acumuladosuma}`);

acumuladosuma = 0

while (inicio <= maximo) {
    acumuladosuma += inicio;
    console.log(acumuladosuma)
    inicio ++;
}

console.log(`La suma de los numeros desde 0 hasta ${maximo} es: ${acumuladosuma}`);
