// factory Pattern

// in factory pattern design, we return function as an oject to create multiple object in different variables.

function ProductCart(name, prize){
    let stock = 10;

    return {
        name,
        prize,
        checkStock(){
            console.log(`available stock ${stock}`);
        },
        buy(qty){
            if(qty <= stock){
                console.log(`sucssesfully purched ${qty} stock`);
            } else {
                console.log(`insufficient stock ${qty}, available stock is ${stock}`);
            }
        },
        refil(qty){
            stock += qty;
            console.log(`sucessefullly refil stock ${stock}`);
            
        }
    }
}

let iphone = ProductCart("iphone", 60000)
let kitkat = ProductCart("kitkat", 10)
