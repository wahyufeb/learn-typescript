class ClassWithReadonly {
  readonly name: string;
  constructor(_name: string) {
    this.name = _name;
  }
  setNameValue(name: string) {
    // this.name = name; (Error) karna properti name readonly / tidak bisa mengubahnya
  }
}

export default ClassWithReadonly;
