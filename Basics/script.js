//    OOPS in Javascript
//   always write first spell of keyword is Capital letter
//  Function Contructor

function  CreateBiscuit(name,prize,color){
    this.name = name
    this.prize = prize,
    this.color = color
}

//    prototype is shared property that ES5 constructor can have
CreateBiscuit.prototype.write = function (text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color

        document.body.appendChild(h1)
    }

let biscuit1 = new CreateBiscuit( "Oreo", "10rs", "black")
let biscuit2 = new CreateBiscuit( "parle", "10rs", "red")

