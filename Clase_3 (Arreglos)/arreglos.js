// Iniciar arreglos
let arrnum = [];

// Modificar los valores
arrnum[0] = 13;
arrnum[1] = 21;
arrnum[4] = 'hola';

//Leer los valores del arreglo
console.log(`Elemento 1 - [0]: ${arrnum[0]}`);
console.log(`Elemento 3 - [2]: ${arrnum[2]}`);
console.log(`Elemento 5 - [4]: ${arrnum[4]}`);

// Arreglo simplificado
let arrnum2 = [13, 21, 0, 0, 62];

//Leer los valores del arreglo
console.log(`Elemento 1 - [0]: ${arrnum2[0]}`);
console.log(`Elemento 3 - [2]: ${arrnum2[2]}`);
console.log(`Elemento 5 - [4]: ${arrnum2[4]}`);

// Recorrer arreglos
for (let i = 0; i < arrnum2.length; i++){
    console.log(`Elemento ${i} - [${i}]: ${arrnum2[i]}`);
}