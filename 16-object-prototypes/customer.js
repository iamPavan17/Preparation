function Customer(name, accountNumber, balance) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transaction = function(amount, code) {
        if(code) {
            console.log('\n********DEPOSITING********\n');
            console.log(`${amount}/-`);
            this.balance += amount;
            console.log(`Current balance - ${this.balance}`)
        } else {
            console.log('\n*********WITHDRAWING**********\n');
            console.log(`${amount}/-`);
            if(amount > this.balance) {
                console.log('The balance is insufficient for the specified withdrawal.');
            } else {
                this.balance -= amount;
                console.log(`Current balance - ${this.balance}`)
            } 
        }
        
    };
    this.currentBalance = function() {
        return `
Hi ${this.name}, your current balance is ${this.balance}.`
    }
}

var c1 = new Customer('rama', 'acc01', 5000);
var c2 = new Customer('sita', 'acc02', 1000);

console.log(c1.currentBalance());
// console.log(c2.currentBalance());

c1.transaction(1, 1);

c1.transaction(40505, 0);
