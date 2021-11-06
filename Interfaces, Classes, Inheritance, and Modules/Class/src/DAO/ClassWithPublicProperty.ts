class ClassWithPublicProperty {
  public id: number | undefined;
  public print(): void {
    console.log(`ClassWithPublicProperty public id ${this.id}`);
  }
}

export default ClassWithPublicProperty;
