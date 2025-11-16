class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }

  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

const user = new BankAccount(1234, "DEW", 12457894);
user.callHiddenMethod(123456);
console.log(user);
