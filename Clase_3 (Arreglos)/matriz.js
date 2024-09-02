// Declaracion de matriz
let matriz = [[], []];

// Declaracion simplificada de matriz
let matriz1 = [[100, 200, 300, 400], [500, 600, 700, 800, 900]]

// Modificar valores de la matriz

// Renglon 0
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;
matriz[0][3] = 400;

// Renglon 1
matriz[1][0] = 500;
matriz[1][1] = 600;
matriz[1][2] = 700;
matriz[1][3] = 800;

// Leer valores de la matriz
console.log(matriz1)

// Obtener la longitud de cada renglon
console.log(`Longitud del primer renglon: ${matriz1[0].length}`);
console.log(`Longitud del segundo renglon: ${matriz1[1].length}`);

// Imprimir los valores dentro de la matriz
for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
        console.log(`Elemento (${i}, ${j}): ${matriz1[i][j]}`);
    }
}
