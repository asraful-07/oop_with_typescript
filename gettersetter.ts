class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  //TODO  this type name is getter
  //* addBalance(balance: number) {
  //*   this._userBalance = this._userBalance + balance;
  //* }

  //* getBalance() {
  //*   return this._userBalance;
  //* }

  //TODO this type name is setter
  set addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }

  getBalance() {
    return this._userBalance;
  }
}

const myAccount = new BankAccount(1234, "AXQ", 1999999);
//* myAccount.addBalance(1001);
//* console.log(myAccount.getBalance());

myAccount.addBalance = 1000;
console.log(myAccount);
