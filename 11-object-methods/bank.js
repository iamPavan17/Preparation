// Create an object to specify data of customers in a bank. The data to be stored is: Account Number, Name, Balance. Assume a maximum of 200 customers in the bank

// create a method called as transaction which takes 2 args amount and code (1 for deposit, 0 for withdraw )
// Create a method the display the current balance for the customer
// If the withdraw amount is more than the balance then display "The balance is insufficient for the specified withdrawal" 

var customers = {
    accountNumber: 'acc001',
    name: 'Rama',
    balance: 50000,
    transaction: function(amount, code) {
        if(code) {
            console.log('\n********DEPOSITING********\n');
            console.log(`${amount}/-`);
            this.balance += amount;
        } else {
            console.log('\n*********WITHDRAWING**********\n');
            console.log(`${amount}/-`);
            if(amount > this.balance) {
                console.log('The balance is insufficient for the specified withdrawal.');
            } else {
                this.balance -= amount;
            } 
        }
    },
    currentBalance: function() {
        return `
Hi ${this.name}, your current balance is ${this.balance}.`
    }
};

customers.transaction(30000, 1);
customers.transaction(30000, 0);
console.log(customers.currentBalance());

