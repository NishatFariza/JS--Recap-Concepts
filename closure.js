// const bank = owner =>{
//     balance = 0;
//     return amount =>{
//         // balance =balance + amount;
//         balance += amount;
//         return balance;

//     }
// }
const bank = owner =>{
    balance = 0;
    return {
        deposite: amount =>{
            // balance =balance + amount;
            balance += amount;
            return balance;

    },
    withdraw: amount =>{
        // balance =balance + amount;
        balance -= amount;
        return balance;
    }
}
}
const mofizBank =bank('Mofiz');
console.log(mofizBank.deposite(400));
console.log(mofizBank.deposite(70));
console.log(mofizBank.balance);
console.log(mofizBank.deposite(200));
console.log(mofizBank.withdraw(100));
console.log(mofizBank.withdraw(200));
