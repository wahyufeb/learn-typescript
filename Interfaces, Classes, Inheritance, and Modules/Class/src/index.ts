/**
 * Class
 * ----------------------------
 * 1. The this keyword
 * 2. Implementing interfaces
 * 3. Class constructors
 * 4. Class modifiers
 * 5. Readonly
 * 6. Get and set
 * 7. Static function
 * 8. Static properties
 * 9. Namespaces
 * ----------------------------
 */

// (1) The this keyword ==> implemented at Simpleclass.ts
import SimpleClass from "./DAO/SimpleClass";

const mySimpleClass = new SimpleClass();
mySimpleClass.id = 1500;
mySimpleClass.print(); // Result : Simple class id = 1500

// (2) Implementing interfaces ===> implemented at UnionClass.ts
import { ClassA, ClassB } from "./DAO/UnionClass";
import IPrint from "./Interfaces/IPrint";

function printClass(obj: IPrint) {
  obj.print();
}

const myClassA = new ClassA();
const myClassB = new ClassB();

printClass(myClassA); // Result : ClassA.print() called
printClass(myClassB); // Result : ClassB.print() called

// (3) Class constructors ===> implemented at ClassWithConstructor.ts
import ClassWithConstructor from "./DAO/ClassWithConstructor";
const myClassConstructor = new ClassWithConstructor(10);
console.log(`ClassWithContructor = ${JSON.stringify(myClassConstructor)}`);
// Result : ClassWithContructor = {"id":10}

// (4) Class modifiers ===> implemented at ClassWithPrivateProperty & ClassWithPublicProperty
import ClassWithPrivateProperty from "./DAO/ClassWithPrivateProperty";
import ClassWithPublicProperty from "./DAO/ClassWithPublicProperty";

const publicAccess = new ClassWithPublicProperty();
publicAccess.id = 123;
publicAccess.print();
// Result : ClassWithPublicProperty public id 123

const privateAccess = new ClassWithPrivateProperty();
// console.error(privateAccess.id); (Error) karna properti id private, tidak bisa diakses diluar class
console.log(privateAccess);
// Result : ClassWithPrivateProperty {}

// (5) Readonly ===> implemented at ClassWithReadonly.ts
import ClassWithReadonly from "./DAO/ClassWithReadonly";
const myClassWithReadonly = new ClassWithReadonly("hello");
console.log(myClassWithReadonly);

// (6) Get and set ===> implemented at ClassWithAccessors.ts
import ClassWithAccessors from "./DAO/ClassWithAccessors";
const myClassWithAccessors = new ClassWithAccessors();
myClassWithAccessors.id = 321;
console.log(`ClassWithAccessors.id = ${myClassWithAccessors.id}`);

// (7) Static function ===> implemented at StaticFunction.ts
import StaticFunction from "./DAO/StaticFunction";
StaticFunction.printData();
// Result : Print from Static Function

// (8) Static properties ===> implemented at StaticProperty.ts
import StaticProperty from "./DAO/StaticProperty";
const firstInstance = new StaticProperty();
const secondInstance = new StaticProperty();

firstInstance.updateCount();
console.log(`StaticProperty.count ${StaticProperty.count}`);
// Result : StaticProperty.count 1

secondInstance.updateCount();
console.log(`StaticProperty.count ${StaticProperty.count}`);
// Result : StaticProperty.count 2

// (9) Namespaces ===> implemented at FirstNameSpace.ts
import FirstNameSpace from "./DAO/FirstNameSpace";
const nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// const notExported = new FirstNameSpace.NotExported() // (Error) karna class NotExported tidak melakukan export pada file ===> FirstNameSpace.ts

console.log(nameSpaceClass);
// Result : NameSpaceClass {}
