//Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
class Account {
    constructor(initialBalance) {
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log(`Insufficient funds. Current balance: ${this.balance}`);
      } else {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  // Create an instance of the Account class with an initial balance
  const myAccount = new Account(1000);
  
  // Test deposit method
  myAccount.deposit(500); // Deposited 500. New balance: 1500
  
  // Test withdraw method
  myAccount.withdraw(200); // Withdrew 200. New balance: 1300
  
  // Attempt to withdraw more than the balance
  myAccount.withdraw(2000); // Insufficient funds. Current balance: 1300
  
  // Another deposit
  myAccount.deposit(300); // Deposited 300. New balance: 1600
  
  // Final withdrawal
  myAccount.withdraw(600); // Withdrew 600. New balance: 1000
  
  // Log final balance
  console.log(`Final balance: ${myAccount.getBalance()}`); // Final balance: 1000