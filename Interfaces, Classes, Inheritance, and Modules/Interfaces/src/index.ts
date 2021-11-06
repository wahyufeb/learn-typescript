/**
 * Interfaces
 * ----------------------------
 * 1. Interface?
 * 2. Optional properties
 * 3. The in operator
 * 4. Keyof
 * ----------------------------
 */

//  (1) Interface
interface IStudent {
  nis: number;
  name: string;
  grade: number;
}

const student1: IStudent = {
  nis: 23220023123,
  name: "June Wanwimol",
  grade: 12,
};
console.log(student1);
// Result :
// { nis: 23220023123, name: 'June Wanwimol', grade: 12 }

// const student2: IStudent = {
//   nis: 211232123123,
//   name: "Puimek Napasorn",
// };
// console.log(student2);
// Result : (Error) Karena student2 tidak mengimplementasikan properti grade

//  (2) Optional properties
interface IEmployee {
  name: string;
  division: string;
  remoteWorker?: boolean;
}

const employee1: IEmployee = {
  name: "Nong Patchamon",
  division: "Product",
  remoteWorker: true,
};
console.log(employee1);
// Result :
// { name: 'Nong Patchamon', division: 'Product', remoteWorker: true }

const employee2: IEmployee = {
  name: "Mint Nicha Phongkorapat",
  division: "Marketing",
};
console.log(employee2);
// Result : (Tidak Erorr) karena properti remoteWorker adalah properti optional
// { name: 'Mint Nicha Phongkorapat', division: 'Marketing' }
//

//  (3) The in operator
interface IIdName {
  id: number;
  name: string;
}

interface IDescrValue {
  descr: string;
  value: number;
}

function printNameOrValue(obj: IIdName | IDescrValue): void {
  if ("id" in obj) {
    console.log(`obj.name : ${obj.name}`);
  }

  if ("descr" in obj) {
    console.log(`obj.value : ${obj.value}`);
  }
}

printNameOrValue({ id: 1, name: "Nong" });
printNameOrValue({ descr: "Description", value: 23 });
// Result :
// obj.name : Nong
// obj.value : 23

//  (4) Keyof
interface IPerson {
  id: number;
  name: string;
}

type PersonPropertyName = keyof IPerson; // === type PersonPropertyName = "id" | "name"
const person1: PersonPropertyName = "id";
const person2: PersonPropertyName = "name";
console.log(person1);
console.log(person2);
// Result :
// id
// name
