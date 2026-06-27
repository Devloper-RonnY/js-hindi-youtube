// Reverse Module Pattern

// this is the same module pattern but return the function in key value pairs

let Bank = (function(){
    let bankBalence = 50000;

    function checkBalence(){
        console.log(`your account balence is ${bankBalence}`);
    }

    function deposit(val){
        bankBalence += val;
        console.log(`your money is deposited ${val}`);
    }

    function withdraw(val){
        if(val >= bankBalence) console.log(`insuficient balence ${bankBalence}`);
        else console.log(`your amount sucessfully withdraw ${val}`);  
    }
    return {
        check : checkBalence,
        add : deposit,
        remove : withdraw
    }
})()

Bank.remove(70000)
Bank.check()