export class App {
  public message = "Hello World!";
  public count = 0;

  public called = (increment: number) => {
    this.count += increment;
  };
}
