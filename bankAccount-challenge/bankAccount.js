"use strict";
exports.__esModule = true;
var bankAccount = /** @class */ (function () {
    function bankAccount(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.withdrawal = function (num) {
        this.transactions.push(num);
        return this.balance -= num;
    };
    bankAccount.prototype.deposit = function (num) {
        this.transactions.push(num);
        return this.balance += num;
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
