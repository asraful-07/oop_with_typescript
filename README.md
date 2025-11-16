# OOP with TypeScript

A simple and clean project to understand **Object-Oriented Programming (OOP)** in **TypeScript**. This repository includes examples of:

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction
- Access Modifiers
- Static Members
- Getter & Setter
- Type Guards

---

## 🚀 How to Run This Project

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Compile TypeScript

```bash
npx tsc
```

### 3️⃣ Run the Compiled JavaScript

```bash
node dist/index.js
```

---

## 🧩 Example Class (Parent)

```ts
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

  greet(job: string) {
    console.log(`My name is ${this.name} and my job is ${job}`);
  }
}
```

---

## 📚 Topics Covered

### ✔ Encapsulation

Keeping data safe using private/protected modifiers.

### ✔ Inheritance

Reusing properties & methods using `extends`.

### ✔ Polymorphism

Same method name, different implementations.

### ✔ Abstraction

Using abstract classes to enforce structure.

---

## 🛠 Commands for Development (VS Code)

### Watch Mode

```bash
npx tsc --watch
```

### Run with ts-node (optional)

```bash
npx ts-node src/index.ts
```

---

## 📦 Dependencies

---

## 🤝 Contribution

Feel free to fork this repo and submit PRs.

---

## 📄 License

This project is open-source and free to use.

---

## 💬 Contact

For any help, feel free to ask!
