/**
 * Inheritance
 * ----------------------------
 * 1. Interface inheritance
 * 2. Class inheritance
 * 3. The super function
 * 4. Function overriding
 * 5. Protected
 * 6. Abstract classes
 * 7. Abstract class methods
 * 8. Instanceof
 * 9. Interfaces extending classes
 * ----------------------------
 */

// (1) Interface inheritance
interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name: string;
}

class IdNameClass implements IDerivedFromBase {
  id: number = 23;
  name: string = "Wahyu";
}
// Note : Harus ada properti 'id' dan 'name' pada IdNameClass
// Karna class IdNameClass menggunakan interface IDerivedFromBase

// (2) Class inheritance
class BaseClass implements IBase {
  id: number = 123;
}

class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
  name: string = "June Wanwimol Jaenasavamethee";
  print(): void {
    console.log(`DerivedFromBaseClass.id : ${this.id}`);
    console.log(`DerivedFromBaseClass.name : ${this.name}`);
  }
}

const myDerivedClass = new DerivedFromBaseClass();
myDerivedClass.print();
// Result :
// DerivedFromBaseClass.id : 123
// DerivedFromBaseClass.name : June Wanwimol Jaenasavamethee

// (3) The super function
class BaseClassWithConstructor {
  private id: number;
  private desc: string;
  constructor(id: number, desc: string) {
    this.id = id;
    this.desc = desc;
  }
}

class DerivedClassWithConstructor extends BaseClassWithConstructor {
  private name: string;
  constructor(id: number, name: string, desc: string) {
    super(id, desc);
    this.name = name;
  }
}

const myDerivedClassWithConstructor = new DerivedClassWithConstructor(
  12,
  "Puimek",
  "This is Description"
);
console.log(myDerivedClassWithConstructor);
// Result :
// DerivedClassWithConstructor {
//   id: 12,
//   desc: 'This is Description',
//   name: 'Puimek'
// }

// (4) Function overriding
class BaseClassWithFn {
  print(text: string) {
    console.log(`BaseClassWithFn.print() : ${text}`);
  }
}

class DerivedClassFnOverride extends BaseClassWithFn {
  print(text: string) {
    super.print(`from DerivedClassFnOverride : ${text}`);
  }
}

let derivedCall = new DerivedClassFnOverride();
derivedCall.print("Ello....");
// Result :
// from DerivedClassFnOverride : Ello....

// (5) Protected
class BaseClassProtected {
  protected id: number;
  private name: string = "";
  constructor(id: number) {
    this.id = id;
  }
}

class AccessProtected extends BaseClassProtected {
  constructor(id: number) {
    super(id);
    console.log(`base.id = ${this.id}`); // Bisa akses properti id karna id (protected)
    // console.log(`base.name = ${this.name}`) // Error  : tidak bisa akses ke properti name karena properti name (private)
  }
}

// (6) Abstract classes & (7) Abstract class methods
abstract class EmployeeBase {
  public id: number;
  public name: string;
  abstract doWork(): void;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class OfficeWorker extends EmployeeBase {
  doWork(): void {
    console.log(`${this.name} : doing work`);
  }
}
class OfficeManager extends OfficeWorker {
  public employess: OfficeWorker[] = [];
  manageEmployees() {
    super.doWork();
    for (let employee of this.employess) {
      employee.doWork();
    }
  }
}

const worker1 = new OfficeWorker(1, "Dharni");
const worker2 = new OfficeWorker(2, "Diana");
const manager = new OfficeManager(3, "June");

manager.employess.push(worker1);
manager.employess.push(worker2);

manager.manageEmployees();

// (8) Instanceof
class A {}
class BfromA extends A {}
class CfromA extends A {}
class DfromC extends CfromA {}

console.log(`A instance of A : ${new A() instanceof A}`);
console.log(`BfromA instance of A : ${new BfromA() instanceof A}`);
console.log(`BfromA instance of BfromA : ${new BfromA() instanceof BfromA}`);
console.log(`CfromA instance of BfromA : ${new CfromA() instanceof BfromA}`);
console.log(`DfromC instance of BfromA : ${new DfromC() instanceof BfromA}`);
// Result
// A instance of A : true
// BfromA instance of A : true
// BfromA instance of BfromA : true
// CfromA instance of BfromA : false
// DfromC instance of BfromA : false

// (9) Interfaces extending classes
class BaseInterfaceClass {
  id: number = 0;
  print(): void {
    console.log(`this.id = ${this.id}`);
  }
}

interface IBaseInterfaceExt extends BaseInterfaceClass {
  setId(id: number): void;
}

class ImplementExt extends BaseInterfaceClass implements IBaseInterfaceExt {
  setId(id: number): void {
    this.id = id;
  }
}

const myImplementExt = new ImplementExt();
myImplementExt.setId(23);
myImplementExt.print();
// Result : this.id = 23
