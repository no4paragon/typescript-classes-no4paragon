export class bankAccount {
    owner: string;	
    balance: number;	
    transactions: number[];
    
    constructor (public owner: string, public balance: number){
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
        
    }
    getBalance(){
        return this.balance;
    }
    withdrawal(num){
        this.transactions.push(num);
        return this.balance -= num;
        
    }
    deposit(num){
        this.transactions.push(num);
        return this.balance += num;
        
    }
}