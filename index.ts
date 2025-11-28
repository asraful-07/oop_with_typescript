// Base Class
class Account {
  name: string;
  accountNumber: number;
  private balance: number;

  constructor(name: string, accountNumber: number, balance: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`${amount} deposited. New balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    // Default rule: only balance  withdraw
    if (amount > this.balance) {
      console.log("Insufficient balance!");
      return;
    }
    this.balance -= amount;
    console.log(`${amount} withdrawn. New balance: ${this.balance}`);
  }

  getBalance(): number {
    console.log(`Current Balance: ${this.balance}`);
    return this.balance;
  }
}

//------------------------------------------------------
// SavingsAccount (Child)
class SavingsAccount extends Account {
  minimumBalance: number;

  constructor(
    name: string,
    accountNumber: number,
    balance: number,
    minimumBalance: number
  ) {
    super(name, accountNumber, balance);
    this.minimumBalance = minimumBalance;
  }

  // override withdraw
  withdraw(amount: number): void {
    const currentBalance = this.getBalance();

    if (currentBalance - amount < this.minimumBalance) {
      console.log(
        `Withdraw not allowed! Minimum balance requirement: ${this.minimumBalance}`
      );
      return;
    }

    super.withdraw(amount);
  }
}

//------------------------------------------------------
// CurrentAccount (Child)
class CurrentAccount extends Account {
  overdraftLimit: number;

  constructor(
    name: string,
    accountNumber: number,
    balance: number,
    overdraftLimit: number
  ) {
    super(name, accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
  }

  // override withdraw
  withdraw(amount: number): void {
    const currentBalance = this.getBalance();

    if (currentBalance - amount < -this.overdraftLimit) {
      console.log(
        `Overdraft limit exceeded! Your limit: ${this.overdraftLimit}`
      );
      return;
    }

    super.withdraw(amount);
  }
}

//------------------------------------------------------
// Test Cases

const sa = new SavingsAccount("Rahat", 101, 6000, 1000);
sa.withdraw(6600); // Not allowed
sa.withdraw(3600); // Allowed

const ca = new CurrentAccount("Rahat", 102, 4000, 6000);
ca.withdraw(4000); // Allowed, negative balance = -2000
ca.withdraw(2000); // Not allowed (exceeds overdraft)
