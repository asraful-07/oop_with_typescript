class Person {
  getSleep() {
    console.log(`Normal person sleep 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`Student sleep 6 to 7 hours`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`NextLevelDeveloper sleep 6 hours`);
  }
}

const getSleepHours = (params: Person) => {
  params.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();
getSleepHours(person3);

//TODO one more example
class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  hight: number;
  width: number;

  constructor(hight: number, width: number) {
    super();
    this.hight = hight;
    this.width = width;
  }

  getArea(): number {
    return this.hight * this.width;
  }
}

const getArea = (params: Shape) => {
  console.log(params.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

getArea(shape3);
