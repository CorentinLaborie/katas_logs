export default class Account {
  constructor(balance) {
    this.balance = balance || 0; // Float
    this.operations = []; // {date : new Date(), amount : 10.01, textAmount : "+10.01", newBalance : 10.01, oldBalance : 0}
  }

  setBalance(newBalance) {
    this.balance = newBalance
    return newBalance
  }

  checkOperationObject(operation){
    let checker = [
      this.checkDate(operation),
      this.checkAmount(operation)
    ];
    if (checker.includes(false)){
      return false
    } else {
      return true
    }
  }

  checkDate(operation){
    if (!operation.hasOwnProperty("date")){
      return false
    } else {
      if (operation.date instanceof Date && operation.date > 0) {
        return true
      } else {
        return false
      }
    }
  }
  checkAmount(operation){
    if (!operation.hasOwnProperty("amount")){
      return false
    } else {
      if (typeof operation.amount === "number") {
        return true
      } else {
        return false
      }
    }
  }

  set deposit(operation) {
    if (!this.checkOperationObject(operation)){
      throw new Error("Operation Object is not well formatted")
    } else {
      operation.oldBalance = this.balance;
      operation.textAmount = "+" + operation.amount;
      let newBalance = this.setBalance(this.balance+operation.amount);
      operation.newBalance = newBalance;
      this.operations.push(operation)
      return true
    }
  } 

  set withdraw(operation){
    if (!this.checkOperationObject(operation)){
      throw new Error("Operation Object is not well formatted")
    } else {
      operation.oldBalance = this.balance;
      operation.textAmount = "-" + operation.amount;
      let newBalance = this.setBalance(this.balance-operation.amount);
      operation.newBalance = newBalance;
      this.operations.push(operation)
      return true
    }
  }

  get printStatement(){
    console.log("Date\t\t\tAmount\t\tBalance")
    for (let i = 0; i < this.operations.length; i++){                                      //5
      console.log(this.operations[i].date.toLocaleString('en-GB', { timeZone: 'UTC' }) + "\t"+this.operations[i].textAmount+"\t"+this.operations[i].newBalance)
    }

    return true
  }
}