class StaticProperty {
  static count: number = 0;
  updateCount(): void {
    StaticProperty.count++;
  }
}

export default StaticProperty;
