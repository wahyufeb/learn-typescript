class ClassWithAccessors {
  private _id: number = 0;
  get id(): number {
    console.log("get id property");
    return this._id;
  }
  set id(value: number) {
    console.log("set id property");
    this._id = value;
  }
}

export default ClassWithAccessors;
