// Object with methods
 let account = {
balance: 0,
deposit: function(depositAmount){
this.balance = this.balance + depositAmount;
},
withdraw: function(withdrawAmount){
this.balance = this.balance - withdrawAmount;
},
}

console.log("Balance 1: " + account.balance);
account.balance(100);
console.log("Balance 2: " + account.balance);
account.withdraw(75);
console.log("Balance 3: " + account.balance);