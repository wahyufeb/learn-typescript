class ClassWithPrivateProperty {
  private id: number | undefined;
  private print(id: number): void {
    console.log(`ClassWithPrivateProperty private id ${this.id}`);
  }
}

export default ClassWithPrivateProperty;
