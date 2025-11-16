class Users {
  name: string;
  role: number;

  constructor(name: string, role: number) {
    this.name = name;
    this.role = role;
  }

  great() {
    console.log(`My name is ${this.name} and my role number: ${this.role}.`);
  }
}

const user1 = new Users("ABCDEF", 12);
user1.great();

//TODO short cut way
class User {
  constructor(public name: string, public role: number) {}

  great() {
    console.log(`My name is ${this.name} and my role number: ${this.role}.`);
  }
}

const user2 = new User("ABCDEF", 12);
user2.great();
