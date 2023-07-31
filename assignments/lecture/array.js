class Person {
    static instanceCount = 0;
    constructor(name) {
        this.name = name;
        Person.instanceCount++;
    }
    introduceYourself() {
        console.log(`Hello, my name is {this.name}.`);
    }
}
