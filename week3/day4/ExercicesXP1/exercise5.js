class Dog {
    constructor(name) {
        this.name = name;
    }
}

class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
}

const labrador = new Labrador("Buddy", "large");
console.log("Correct option: 2");
console.log(labrador);
