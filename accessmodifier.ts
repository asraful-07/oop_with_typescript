class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
}

const myAccount = new BankAccount(1234, "AXQ", 1999999);
myAccount.addBalance(1001);
console.log(myAccount);
