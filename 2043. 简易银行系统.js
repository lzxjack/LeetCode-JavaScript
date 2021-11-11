class Bank {
    constructor(balance) {
        this.bank = balance;
    }
    transfer(account1, account2, money) {
        if (account1 > this.bank.length || account2 > this.bank.length) return false;
        if (this.bank[account1 - 1] < money) return false;
        this.bank[account1 - 1] -= money;
        this.bank[account2 - 1] += money;
        return true;
    }
    deposit(account, money) {
        if (account > this.bank.length) return false;
        this.bank[account - 1] += money;
        return true;
    }
    withdraw(account, money) {
        if (account > this.bank.length) return false;
        if (this.bank[account - 1] < money) return false;
        this.bank[account - 1] -= money;
        return true;
    }
}
