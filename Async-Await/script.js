let p1 = new Promise(function(res, rej){
    let rn = Math.floor(Math.random() * 10)
    setTimeout(() => {
        if(rn > 5) res("promise is resolved with " + rn)
        else rej("promise is rejected with " + rn)
    }, 2000)
})

async function abcd(){
    try {
        let val = await p1
        console.log(val);   
    } catch (err) {
        console.log(err);  
    }
}

abcd()