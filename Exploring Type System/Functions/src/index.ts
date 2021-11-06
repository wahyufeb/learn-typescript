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
concatVal("June", "Wanwimol"); // Result :  a + b = JuneWanwimol
concatVal("Puimek"); // Result : a + b = Puimekundefined

// (2) Default parameters
function concatWithDefault(a: string, b: string = "Jane") {
  console.log(`a + b = ${a + b}`);
}

concatWithDefault("Marry"); // Result : a + b = MarryJane
concatWithDefault("Marina", "Jenita"); // Result : a + b = MarinaJenita
concatWithDefault("Jessica"); // Result : a + b = JessicaJane

// (3) Rest parameters
function sayName(...names: string[]) {
  for (const name of names) {
    console.log(name);
  }
}
sayName("Wahyu", "Jane", "Jessica", "June", "Puimek");
// Result :
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
// Result :
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
// Result :
// sayCallback called, message "Hello Dude!"
// myCallback called with "Hello Dude!" from sayCallback

// (7) Literals
type AllowedStrings = "One" | "Two" | "Three";
type AllowedNumbers = 5 | 10 | 15 | 20 | 25 | 30;

function sayWithLiteral(text: AllowedStrings | AllowedNumbers): void {
  console.log(`Called with : ${text}`);
}
sayWithLiteral("One"); // Result : Called with : One
sayWithLiteral("Two"); // Result : Called with : Two
// sayWithLiteral("Four"); // Result : Error karena "Four" tidak ada pada type AllowedStrings
sayWithLiteral(10); // Result : Called with : 10
sayWithLiteral(25); // Result : Called with : 25
// sayWithLiteral(100); // Result : Error karena "100" tidak ada pada type AllowedNumbers
