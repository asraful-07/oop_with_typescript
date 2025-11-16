class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

//* This one class
class Parson extends Parent {
  great(num: number) {
    console.log(
      `My name is ${this.name} and my age is ${num}. My country name is ${this.address}`
    );
  }
}

const user1 = new Parson("WSD", 88, "xyz");
user1.great(18);

//TODO one more class this class name is Inheritance Version inheritance
class ParsonTwo extends Parent {
  isMD: boolean;

  constructor(name: string, age: number, address: string, isMD: boolean) {
    super(name, age, address);
    this.isMD = isMD;
  }

  greatTwo(num: number) {
    console.log(
      `My name is ${this.name} and my age is ${num}. My country name is ${this.address}`
    );
  }
}

const user2 = new ParsonTwo("XYZ", 30, "Bangladesh", true);
user2.greatTwo(40);

//* one more example
class Test extends Parent {
  get() {
    console.log(`This is my name is ${this.name}`);
  }
}

const user3 = new Test("PQR", 28, "WER");
user3.get();

//* more and more example
class TestTwo extends Parent {
  addr: string;

  constructor(name: string, age: number, address: string, addr: string) {
    super(name, age, address);
    this.addr = addr;
  }
  get() {
    console.log(`This is my name is ${this.name}`);
  }
}

const user4 = new TestTwo("IOS", 28, "WER", "VCD");
user4.get();
