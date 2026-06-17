# js-hindi-youtube
A code repo for javascript series at sheriyan coding school youtube channel

// class contructor
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    intro() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}

class Developer extends Person {
    constructor(name, age, city, lang, issue) {
        super(name, age, city);
        this.lang = lang;
        this.issue = issue;
    }

    favlang() {
        console.log(`${this.lang} is favourite coding language!`);
    }
}

class Manager extends Developer {

    resolved(dev) {
        console.log(`${dev.issue} is resolved!`);
    }

    notResolved(dev) {
        console.log(`${dev.issue} is not resolved!`);
    }
}

let p1 = new Person("Roshan", "24", "Thane");

let d1 = new Developer(
    "Siddhesh",
    "24",
    "Taloja",
    "Python",
    "Firewall"
);

let m1 = new Manager(
    "Pritam",
    "38",
    "Mumbai",
    "JavaScript",
    "Server Down"
);