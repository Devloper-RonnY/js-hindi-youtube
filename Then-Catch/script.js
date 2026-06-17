let p1 = new Promise(function(res, rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10)
        if(rn > 5) res( "promise is resolved " + rn)
        else (rej("promise is rejected " + rn))
        
    }, 2000)
})

//  then and catch
p1.
then(function(val){
    console.log( val);
    
})
.catch(function(val){
    console.log( val); 
})
.finally(function(){
    console.log("I always run ");  
})