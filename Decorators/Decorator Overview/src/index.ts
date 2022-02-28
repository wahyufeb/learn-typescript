/**
 * Decorator
 * ----------------------------
 * 1. Decorator setup
 * 2. Decorator syntax
 * 3. Multiple decorators
 * 4. Types of decorators
 * 5. Decorator factories
 * ----------------------------
 */

//  (1) Decorator setup => set properti 'experimentalDecorators' pada tsconfig.json
//  (2) Decorator syntax => @decorator
@simpleDecorator
class ClassWithSimpleDecorator {}
function simpleDecorator(constructor: Function) {
  console.log('simpleDecorator called');
}

const instance1 = new ClassWithSimpleDecorator();
const instance2 = new ClassWithSimpleDecorator();

// console.log(instance1)
// console.log(instance2)

// Result: 
// simpleDecorator called
// ClassWithSimpleDecorator {}
// ClassWithSimpleDecorator {}


//  (3) Multiple decorators
@simpleDecorator
@secondSimpleDecorator
class MultipleDecorator {}
function secondSimpleDecorator(constructor: Function) {
  console.log('secondSimpleDecorator called');;
}

const instance3 = new MultipleDecorator();
const instance4 = new MultipleDecorator();

// console.log(instance3)
// console.log(instance4)

// Result:
// simpleDecorator called
// secondSimpleDecorator called
// simpleDecorator called
// MultipleDecorator {}
// MultipleDecorator {}


//  (4) Types of decorators
/*
  * 1. Class decorator : decorator yang akan diterapkan pada pendefinisian kelas
  * 2. Method decorator : decorator yang akan diterapkan pada method dalam satu kelas
  * 3. Property decorator : decorator yang akan diterapkan pada properti dalam satu kelas
  * 4. Parameter decorator : decorator yang akan diterapkan pada parameter method dalam satu kelas
*/

@classDecoratorType
class ClassWithAllTypesOfDecorators {
  @propertyDecoratorType
  id: number = 1;

  @methodDecoratorType
  print() {
    console.error("Function print() called")
  }

  setId(@parameterDecoratorType id: number) {}
}

function classDecoratorType(constructor: Function) {
  console.log("Class Decorator Params: ", constructor)
}

function propertyDecoratorType(target: any, propertyKey: string) {
  console.log("Property Decorator Params [target] : ", target)
  console.log("Property Decorator Params [propertyKey] : ", propertyKey)
}

function methodDecoratorType(target: any, methodName: string, descriptor?: PropertyDescriptor) {
  console.log("Method Decorator Params [target] : ", target)
  console.log("Method Decorator Params [methodName] : ", methodName)
  console.log("Method Decorator Params [descriptor] : ", descriptor)
}

function parameterDecoratorType(target: any, methodName: string, parameterIndex: number) {
  console.log("Parameter Decorator [target] : ", target)
  console.log("Paramter Decorator [methodName] : ", methodName)
  console.log("Paramter Decorator [parameterIndex] : ", parameterIndex)
}

//  (5) Decorator factories
@decoratorFactory("TestParams")
class ClassWithDecoratorFactory {}

function decoratorFactory(name: string) {
  return (constructor: Function) => {
    console.log(`Decorator function called with : ${name}`)
  }
}
// Result : 
// Decorator function called with : TestParams