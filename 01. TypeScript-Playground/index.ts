class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `${this.name} says hello!`;
    }
}

const user = new User('Michael');
console.log(user.sayHello());
