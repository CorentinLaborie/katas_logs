import Account from "./Account.js";

let test = new Account(250);

test.deposit = {
  date: new Date(),
  amount : 100
}
console.log("Deposit done");
setTimeout(() =>{
  test.withdraw = {
    date: new Date(),
    amount : 500
  }
}, 1000)
console.log("Withdraw done");
setTimeout(() =>{
  console.log("STATEMENT")
  console.log(test.printStatement)
}, 1000)

