// Redondo y  truncado en JS

let numero = 8.5, redondeo, truncado;

// Redondeo
// Math.round() redondea al valor entero mas cercano
// .5 o superior, redondea al valor entero superior mas cercano

redondeo = Math.round(numero);
console.log(`Redondeo: ${redondeo}`);

// Truncado
// Math.trunc() elimina la parte flotante (decimal)
truncado = Math.trunc(numero);
console.log(`Truncado: ${truncado}`)