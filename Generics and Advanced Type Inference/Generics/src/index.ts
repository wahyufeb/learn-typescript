/**
 * Generics
 * ----------------------------
 * 1. Generic syntax
 * 2. Multiple generic types
 * 3. Constraining the type of T
 * 4. Using the type T
 * 5. Generic constraints
 * 6. Generic interfaces
 * 7. Creating new objects within generics
 * ----------------------------
 */

// (1) Generic syntax
/**
 * Menggunakan <T> untuk menuliskan generic pada fungsi dan parameter.
 * Dapat diisi menggunakan tipe yang diinginkan
 */

function printGeneric<T>(value: T): void {
  console.log(`Typeof value : ${typeof value}`);
  console.log(`Value : ${value}`);
}

printGeneric("Wahyu");
printGeneric(123);
printGeneric([1, 2, 3]);
printGeneric(["Diana", "Puimek", "June"]);
printGeneric({ name: "Napasorn" });
// Result
// Typeof value : string
// Value : Wahyu
// Typeof value : number
// Value : 123
// Typeof value : object
// Value : 1,2,3
// Typeof value : object
// Value : Diana,Puimek,June
// Typeof value : object
// Value : [object Object]

// (2) Multiple generic types
/**
 * Menggunakan generic type lebih dari 1
 * Dapat ditambahkan dengan menambahkan disampingnya dipisah dengan koma
 */

function twoTypeGeneric<X, Y>(value1: X, value2: Y): void {
  console.log(`Value 1 : ${value1}`);
  console.log(`Value 2 : ${value2}`);
}

twoTypeGeneric("Nong Pui", "Phi Tee");
twoTypeGeneric(23, 32);
twoTypeGeneric<string[], number[]>(["Korapat", "Nicha"], [123, 456]);
twoTypeGeneric<{ name: string }, { address: string }>(
  { name: "Pichu" },
  { address: "Phuket" }
);
twoTypeGeneric<boolean, number>(false, 100);

// (3) Constraining the type of T
/**
 * Digunakan untuk membatasi tipe  dari generic type
 * Dapat ditambahkan dengan kata kunci 'extends'
 */

class Joiner<T extends Array<string> | Array<number>> {
  public joinArr(arr: T): number | string {
    return arr.join("");
  }
}

const joiner1 = new Joiner();
console.log("Joiner 1 : ", joiner1.joinArr([1, 2, 3]));
console.log(
  "Joiner 2 : ",
  joiner1.joinArr(["B", "A", "N", "G", "K", "O", "K"])
);

// (4) Using the type T
// (5) Generic constraints
// (6) Generic interfaces
// (7) Creating new objects within generics
