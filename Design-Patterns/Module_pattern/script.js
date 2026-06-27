//  Module Pattern --->  Modul pattern is the pattern where we can write code under the  self executing function (IIFE) therefor our function and variables kept as private.

// In module pattern we can write in IIFE

let Bank = (function(){
    let bankBalence = 50000;

    function checkBalence(){
        console.log(`Your account balence is ${bankBalence} rs`);
    }

    function deposit(val){
        bankBalence += val
        console.log(`your money is deposited ${bankBalence} rs`);  
    }

    function withdraw(val){
        bankBalence -= val
         console.log(`your money is withdraw ${val} rs`); 
    }

    return {
       checkBalence,
       deposit,
       withdraw
    }
})()

// Bank.checkBalence()
// Bank.deposit()
// Bank.withdraw()