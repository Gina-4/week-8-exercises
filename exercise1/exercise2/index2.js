// Object with methods

const bankAccount = {
    balance: 0, 

     deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Account deposit: ${amount}.`);
            console.log(`Account balance now: ${this.balance}.`);
        } else {
            console.log('Deposit amount must be greater than zero.');
        }
    },
     withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Account withdrawal: ${amount}.`);
            console.log(`Account balance now: ${this.balance}.`);
        } else if (amount > this.balance) {
            console.log('Insufficient balance for withdrawal.');
        } else {
            console.log('Withdrawal amount must be greater than zero.');
        }
    }
};
bankAccount.deposit(100);   
bankAccount.withdraw(75);  
bankAccount.withdraw(50); 
bankAccount.deposit(200); 