class Parent {
  name: string;
  address: string;
  age: number;
  isMD: boolean;

  constructor(name: string, address: string, age: number, isMD: boolean) {
    this.name = name;
    this.address = address;
    this.age = age;
    this.isMD = isMD;
  }

  great(job: string) {
    console.log(`My name is ${this.name} my job is a ${job}`);
  }
}

class UserOne extends Parent {
  job: string;

  constructor(
    name: string,
    address: string,
    age: number,
    isMD: boolean,
    job: string
  ) {
    super(name, address, age, isMD);
    this.job = job;
  }

  great() {
    console.log(`This is a ${this.name}.I work in a job ${this.job}`);
  }
}

class UserTwo extends Parent {
  private salary: number;

  constructor(
    name: string,
    address: string,
    age: number,
    isMD: boolean,
    salary: number
  ) {
    super(name, address, age, isMD);
    this.salary = salary;
  }

  parental(balance: number) {
    this.salary = this.salary + balance;
  }

  callHidden(balance: number) {
    this.parental(balance);
  }
}

abstract class AbstractName {
  name: string;
  address: string;
  age: number;
  isMD: boolean;

  constructor(name: string, address: string, age: number, isMD: boolean) {
    this.name = name;
    this.address = address;
    this.age = age;
    this.isMD = isMD;
  }

  abstract great(job?: string): void;
}

class UserThree extends AbstractName {
  great(job: string = "Unknown") {
    console.log(`My name is ${this.name} and my job is ${job}`);
  }
}

const user1 = new Parent("WVR", "UK", 24, true);
const user2 = new UserOne("ABCD", "USA", 27, true, "Google");
const user3 = new UserTwo("YIK", "ITY", 29, true, 123456789);
const user4 = new UserThree("ERV", "ESN", 26, true);
user4.great("Designer");
