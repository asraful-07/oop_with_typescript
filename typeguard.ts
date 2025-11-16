//TODO type guard
//TODO in type of

//* in type of
type Alphaneumeric = number | string;

const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
};

add(2, 2); // 4

add(2, "2"); // 22

add("2", 2); // 22

add("2", "2"); //

//* type guard
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} and his role is : ${user.role}`);
  } else {
    console.log(` ${user.name}`);
  }
};

getUserInfo({ name: "Normal", role: "Admin" });

//* one more example
function isAdmin(user: NormalUser | AdminUser): user is AdminUser {
  return (user as AdminUser).role === "Admin";
}

// * more
const getUserInfo1 = (user: NormalUser | AdminUser) => {
  if (isAdmin(user)) {
    console.log(`${user.name} and role: ${user.role}`);
  } else {
    console.log(user.name);
  }
};

// * more
type Admin = { name: string; role: "admin" };
type User = { name: string };

function info(obj: Admin | User) {
  if ("role" in obj) {
    console.log("Admin");
  } else {
    console.log("Normal");
  }
}
