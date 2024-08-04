// Operadores Aritmeticos

let a,b,c,d,e,f;

// Suma
a = 3 + 4;
console.log(a);

//Resta
b = 6 - 2;
console.log(b);

// Multiplicacion
c = a * 2;
console.log(c);

// Division
d = b / 2.5;
console.log(d);
console.log(typeof d);

// Modulo
f = 9 % 2
console.log(f);

// Potencia (ES2016 - ECMAScript 2016)
e = 2 ** 3;
console.log(e);

e = Math.pow(2,3);
console.log(e);

// Incremento y decremento
a = 0;

//Pre-incremento
++a;
console.log(a);

// Post-incremento
a++;
console.log(a);

//Pre-decremento
--a;
console.log(a);

// Post-decremento
--a;
console.log(a);

// Ejemplo
a = 5;
b = 2;
c = ++a * b--;
console.log(c); // Se usa primero su valor, despues se realiza el decremento o incremento
console.log(a);
console.log(b);

// Operadores de asignacion
let miNumero = 10;
console.log(miNumero);

miNumero = 20;
console.log(miNumero);

// Operador +=
miNumero += 5;
console.log(miNumero);

//Operador -=
miNumero -= 3;
console.log(miNumero);

// Operador *=
miNumero *= 2;
console.log(miNumero);

// Operador /=
miNumero /= 4;
console.log(miNumero);

// Operador %=
miNumero %= 2;
console.log(miNumero);

// Exponente **

miNumero = 8;
miNumero **= 2;
console.log(miNumero);

// Operadores de comparacion

a = 5;
b = "5";
console.log(a);
console.log(b);

// Operadores igualdad ==
// solo compara valores y hace una conversion si es necesario

console.log('a == b -> ', a == b)

// Operadores estrictamente igualidad ===
// se compara el valor y el tipo de dato

console.log('a === b -> ', a === b)

// String Interpolation
console.log(`${a} === ${b} -> ${a === b}`);
console.log(`${a} == ${b} -> ${a == b}`)

// Operador distintos
// compara valor y convierte el tipo de dato si es necesario
console.log(`${a} != ${b} -> `, a != b);

// Operador distinto exacto
// compara el valor y el tipo de dato
console.log(`${a} !== ${b} -> , ${a !== b}`);


// Operador menor que
console.log(`${a} < ${b} -> ${a < b}`);

// Operador menor o igual que
console.log(`${a} <= ${b} -> ${a <= b}`);

// Operador mayor que
console.log(`${a} > ${b} -> ${a > b}`);

// Operador mayor o igual que
console.log(`${a} >= ${b} -> ${a >= b}`);