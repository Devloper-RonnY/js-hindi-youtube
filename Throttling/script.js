let inp = document.querySelector("input");

function throttle(fnc, delay){
    let timer = 0;
    return function(...args){
        clearTimeout(timer)
        let now = Date.now()
        if(now - timer >= delay){
            timer = now
            fnc(...args)
        }
    }
}

inp.addEventListener("input", throttle(function(){
    console.log("run");
    
}, 1000));