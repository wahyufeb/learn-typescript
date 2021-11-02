/**
 * Functions
 * ----------------------------
 * 1. Optional parameters
 * 2. Default parameters
 * 3. Rest parameters
 * 4. Function callbacks
 * 5. Function signature as parameters
 * 6. Literals
 * ----------------------------
 */

// (1) Optional parameters
function concatVal(a: string, b?: string) {
  console.log(`a + b = ${a + b}`);
}
concatVal("June", "Wanwimol"); // Hasil :  a + b = JuneWanwimol
concatVal("Puimek"); // Hasil : a + b = Puimekundefined

// (2) Default parameters
function concatWithDefault(a: string, b: string = "Jane") {
  console.log(`a + b = ${a + b}`);
}

concatWithDefault("Marry"); // Hasil : a + b = MarryJane
concatWithDefault("Marina", "Jenita"); // Hasil : a + b = MarinaJenita
concatWithDefault("Jessica"); // Hasil : a + b = JessicaJane

// (3) Rest parameters
function sayName(...names: string[]) {
  for (const name of names) {
    console.log(name);
  }
}
sayName("Wahyu", "Jane", "Jessica", "June", "Puimek");
// Hasil :
// Wahyu
// Jane
// Jessica
// June
// Puimek

// (4) Function callbacks
const myCallback = (text: string) => {
  console.log(`myCallback called with ${text}`);
};

function sayCallback(msg: string, callbackFn: any) {
  console.log(`sayCallback called, message "${msg}" `);
  callbackFn(`"${msg}" from sayCallback`);
}

sayCallback("Hello mate", myCallback);
// Hasil :
// sayCallback called, message "Hello mate"
// myCallback called with "Hello mate" from sayCallback

// (5) Function signature as parameters
const myCallback2 = (text: string): void => {
  console.log(`myCallback called with ${text}`);
};

function sayCallback2(msg: string, callbackFn: (text: string) => void) {
  console.log(`sayCallback called, message "${msg}" `);
  callbackFn(`"${msg}" from sayCallback`);
}

sayCallback2("Hello Dude!", myCallback2);
// Hasil :
// sayCallback called, message "Hello Dude!"
// myCallback called with "Hello Dude!" from sayCallback

// (7) Literals
type AllowedStrings = "One" | "Two" | "Three";
type AllowedNumbers = 5 | 10 | 15 | 20 | 25 | 30;

function sayWithLiteral(text: AllowedStrings | AllowedNumbers): void {
  console.log(`Called with : ${text}`);
}
sayWithLiteral("One"); // Hasil : Called with : One
sayWithLiteral("Two"); // Hasil : Called with : Two
// sayWithLiteral("Four"); // Hasil : Error karena "Four" tidak ada pada type AllowedStrings
sayWithLiteral(10); // Hasil : Called with : 10
sayWithLiteral(25); // Hasil : Called with : 25
// sayWithLiteral(100); // Hasil : Error karena "100" tidak ada pada type AllowedNumbers
