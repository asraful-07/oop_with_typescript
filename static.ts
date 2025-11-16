class Counter {
  static count: number = 0;

  increment() {
    Counter.count = Counter.count + 1;
    return Counter.count;
  }

  decrement() {
    Counter.count = Counter.count - 1;
    return Counter.count;
  }
}

const instance1 = new Counter();

console.log(instance1.increment()); // 1
console.log(instance1.increment()); // 2
console.log(instance1.increment()); // 3
console.log(instance1.increment()); // 4
