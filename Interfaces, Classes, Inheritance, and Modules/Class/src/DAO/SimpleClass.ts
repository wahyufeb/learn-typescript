/**
 * (#) The this keyword
 * Selector untuk properti pada class
 */
class SimpleClass {
  id: number | undefined;
  print(): void {
    console.log(`Simple class id = ${this.id}`);
  }
}

export default SimpleClass;
