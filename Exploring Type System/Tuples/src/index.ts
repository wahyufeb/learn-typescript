/**
 * Tuples
 * ----------------------------
 * 1. Tuple Desctructuring
 * 2. Optional Tuple Element
 * 3. Tuples and Spread Syntax
 * ----------------------------
 */

const tuple1: [number, string] = [1, "Hello Tuples"];
// console.log(tuple1);
// Hasil : [ 1, 'Hello Tuples' ]

// (1) Tuple Desctructuring
// Digunakan untuk mengambil nilai dari tuple

// Cara 1 => Panggil tuple dan juga masukan indexnya
// console.log(tuple1[0]); // Hasil : 1
// console.log(tuple1[1]); // Hasil : Hello Tuples

// Cara 2 => Menggunakan array sintaks ketika membuat sebuah variabel
const [desctruct1, desctruct2] = tuple1;
// console.log(desctruct1); // Hasil : 1
// console.log(desctruct2); // Hasil : Hello Tuples

// (2) Optional Tuple Element
// Membuat tipe opsional dari sebuah tuple
let tupleOptional: [string, boolean?];
tupleOptional = ["Test"];
tupleOptional = ["Hello", false];
// console.log(tupleOptional);
// Hasil : [ 'Hello', false ]

// (3) Tuples and Spread Syntax
// Melakukan Spread Syntax untuk mendefinisikan sebuah tuple yang memiliki sebuah "numbers of element"

let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "First"];
tupleRest = [2, "Second"];
tupleRest = [3, "Third", "Fourth"];
console.log(tupleRest);
// Hasil : [ 3, 'Third', 'Fourth' ]
