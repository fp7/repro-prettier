export class Foo {
  constructor(public name: string) {}
  testfunc(name: string) {
    this.name = name + 'some very very very long string'
  }
}
