// Object with methods
 let account = {
balance: 0,
deposit: function(depositAmount){
this.balance = this.balance + depositAmount;
console.log("account deposit: " + depositAmount);
},
withdraw: function(withdrawAmount){
this.balance = this.balance - withdrawAmount;
console.log("account withdrawal: " + withdrawAmount)
},
}

