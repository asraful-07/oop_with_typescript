class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greatGlobal(numOfSleep: number) {
    console.log(`This man ${this.name} every day sleep ${numOfSleep}`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  greatStudent(numOfSleep: number) {
    console.log(`This man ${this.name} every day sleep ${numOfSleep}`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  TeacherClass(numOfSleep: number) {
    console.log(`This man ${this.name} every day sleep ${numOfSleep}`);
  }
}

//* common code
const isStudent = (user: Person) => {
  return user instanceof Student;
};

//* common code
const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.greatStudent(8);
  } else if (isTeacher(user)) {
    user.TeacherClass(10);
  } else {
    user.greatGlobal(6);
  }
};

const user1 = new Student("hi");
const teacher1 = new Teacher("hello");
getUserInfo(user1);
