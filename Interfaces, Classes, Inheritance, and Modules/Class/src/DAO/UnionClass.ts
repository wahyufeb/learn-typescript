/**
 * (#) Implementing interfaces
 * Setiap class yang mengimplementasikan IPrint harus memiliki method yang bernama print() betipe void
 */
import IPrint from "../Interfaces/IPrint";

class ClassA implements IPrint {
  print(): void {
    console.log("ClassA.print() called");
  }
}

class ClassB implements IPrint {
  print(): void {
    console.log("ClassB.print() called");
  }
}

export { ClassA, ClassB };
