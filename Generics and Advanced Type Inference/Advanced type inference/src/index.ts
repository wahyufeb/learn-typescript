/**
 * Advanced type inference
 * ----------------------------
 * 1. Mapped types
 * 2. Partial, Readonly, Record, and Pick
 * 3. Conditional types
 * 4. Conditional types chaining
 * 5. Distributed conditional types
 * 6. Conditional type inference
 * 7. Type inference from function signatures
 * 8. Type inference from arrays
 * 9. Standards conditional types
 * ----------------------------
 */

// (1) Mapped types
// Membuat sebuah tipe baru berdasarkan berdasarkan dari tipe yang lain atau properti dari tipe yang lain
interface IAbRequired {
  a: number;
  b: string;
}

interface IXyRequired {
  x: number;
  y: number;
}

let ab: IAbRequired = { a: 1, b: "hello" };
let xy: IXyRequired = { x: 1, y: 2 };

type WeakInterface<T> = {
  [K in keyof T]: T[K];
};

let result: WeakInterface<IAbRequired> = ab;
let result2: WeakInterface<IXyRequired> = xy;
console.log(result);
console.log(result2);
// Result
// { a: 1, b: 'hello' }
// { x: 1, y: 2 }

// (2) Partial, Readonly, Record, and Pick
/**
 * Partial seperti Mapped types
 * Membuat semua properti pada T opsional
 */
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

/**
 * Readonly
 * Membuat semua properti pada T readonly
 */
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// }

/**
 * Pick
 * Digunakan untuk 'construct' tipe pada subset properti dari tipe lain
 */
interface IAbc {
  a: number;
  b: string;
  c: boolean;
}
type PickAb = Pick<IAbc, "a" | "b">;

let pickAbObject: PickAb = {
  a: 1,
  b: "hello",
};
console.log(pickAbObject);
// Result
// { a: 1, b: 'hello' }

/**
 * Record
 * Merupakan kebalikan dari Pick
 */
type RecordedCd = Record<"c" | "d", number>;

let recordedCdVar: RecordedCd = {
  c: 123,
  d: 456,
};
console.log(recordedCdVar);
// Result
// { c: 123, d: 456 }

// (3) Conditional types
/**
 * Digunakan untuk melakukan penkondisian pada type
 */
type NumberOrString<T> = T extends number ? number : string;

function logNumberOrString<T>(input: NumberOrString<T>) {
  console.log(`logNumberOrString : ${input}`);
}

logNumberOrString<number>(123);
logNumberOrString<boolean>("Hello");
// Result
// logNumberOrString : 123
// logNumberOrString : Hello

// (4) Conditional types chaining
// Sama seperti melakukan pengkondisian pada type, akan tetapi dapat dilakukan berantai(chained)
interface IA {
  a: number;
}

interface IAb {
  a: number;
  b: string;
}

interface IAbc {
  a: number;
  b: string;
  c: boolean;
}

interface IXy {
  x: number;
  y: number;
}

type abc_a_b<T> = T extends IAbc
  ? [number, string, boolean]
  : T extends IAb
  ? [number, string]
  : T extends IA
  ? [number]
  : T extends IXy
  ? [number, number]
  : never;

function getTupleString<T>(tupleValue: abc_a_b<T>): string {
  let [...tupleDestructured] = tupleValue;
  let returnString = "|";
  for (let value of tupleDestructured) {
    returnString += `${value}|`;
  }
  return returnString;
}

let keyA = getTupleString<IA>([1]);
console.log(`keyA : ${keyA}`);

let keyAb = getTupleString<IAb>([1, "hello"]);
console.log(`keyAb : ${keyAb}`);

let keyAbc = getTupleString<IAbc>([1, "hello", true]);
console.log(`keyAbc : ${keyAbc}`);

let keyXy = getTupleString<IXy>([23, 32]);
console.log(`keyXy : ${keyXy}`);
// Result
// keyA : |1|
// keyAb : |1|hello|
// keyAbc : |1|hello|true|
// keyXy : |23|32|

// (5) Distributed conditional types
type dateOrNumberOrString<T> = T extends Date
  ? Date
  : T extends number
  ? Date | number
  : T extends string
  ? Date | number | string
  : never;

function compareValues<T extends string | number | Date | boolean>(
  input: T,
  compareTo: dateOrNumberOrString<T>
) {
  if (typeof input === typeof compareTo) {
    console.log("\n===========(same type)============");
    console.log(`input : ${typeof input}`);
    console.log(`compare to : ${typeof compareTo}`);
    console.log("=======================================");
  } else {
    console.log("\n===========(different type)============");
    console.log(`input : ${typeof input}`);
    console.log(`compare to : ${typeof compareTo}`);
    console.log("=======================================");
  }
}

compareValues(1, new Date());
compareValues("test", new Date());
// Result
// ===========(different type)============
// input : number
// compare to : object
// =======================================

// ===========(different type)============
// input : string
// compare to : object
// =======================================

// (6) Conditional type inference
type inferFromPropertyType<T> = T extends { id: infer U } ? U : never;

function testInferFromPropertyType<T>(arg: inferFromPropertyType<T>) {
  console.log(arg);
}

testInferFromPropertyType<{ id: string }>("test");
testInferFromPropertyType<{ id: number }>(2);
// Result
// test
// 2

// (7) Type inference from function signatures
type inferredFromFnParam<T> = T extends (a: infer U) => void ? U : never;

function testInferredFromFnParam<T>(arg: inferredFromFnParam<T>) {
  console.log(arg);
}

testInferredFromFnParam<(a: number) => void>(1);
testInferredFromFnParam<(a: string) => void>("hello");
// Result
// 1
// hello

// (8) Type inference from arrays
type inferredTypeFromArray<T> = T extends (infer U)[] ? U : never;

function testInferredFromArray<T>(args: inferredTypeFromArray<T>) {
  console.log(args);
}

testInferredFromArray<number[]>(23);
testInferredFromArray<string[]>("Welcome");
// Result
// 23
// Welcome

// (9) Standards conditional types
// Exclude = tipe yang tidak ada pada parameter kedua
type ExcludeStringAndNumber = Exclude<
  string | number | boolean,
  string | number
>;
let boolValue: ExcludeStringAndNumber = false;

// Extract = tipe yang ada pada parameter kesatu dan parameter kedua
type StringOrNumber = Extract<string | boolean | never, string | number>;
let stringValue: StringOrNumber = "Test";

// NonNullable = tipe yang tidak null dan undefined
type NotNullOrUndef = NonNullable<number | undefined | null>;
let numValue: NotNullOrUndef = 23;

console.log(`boolValue : ${boolValue}`);
console.log(`stringValue : ${stringValue}`);
console.log(`numValue : ${numValue}`);
// Result
// boolValue : false
// stringValue : Test
// numValue : 23
