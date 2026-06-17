//  call back hell

// function getUserInfo(username, cb){
//     console.log("fetching user Info ...");
//     let id = Math.floor(Math.random()*10)
//     setTimeout(() => {
//         cb({_id: id ,username, age: "25", city: "Mahad"})
//     }, 2000);
// }

// function getUserFriendNames(id, cb){
//  console.log("fetching user friends names  ...");
//     setTimeout(() => {   
//         cb({_id: id, frdNames: ["bhavesh", "atharv", "aryan", "shreyas"]})
//     }, 3000);
// }

// function getBestestFriendsNames(id, cb){
//      console.log("fetching bestest friends names  ...");
//     setTimeout(() => {
//         cb({_id: id, bf: ["bhavesh", "atharv"]})
//     }, 2000);   
// }

// getUserInfo("Roshan", function(data){
//     getUserFriendNames(data._id, function(frdNames){
//        getBestestFriendsNames(data?._id, function(bf){
//     })  
//   })
// })

let p1 = new Promise(function(res, rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10)
        if(rn > 5) res( "promise is resolved " + rn)
        else (rej("promise is rejected " + rn))
        
    }, 2000)
})

//  then and catch
// p1.
// then(function(val){
//     console.log( val);
    
// })
// .catch(function(val){
//     console.log( val); 
// })
// .finally(function(){
//     console.log("I always run ");  
// })

// try and catch

async function abcd(){
    try{
        let val = await p1;
        console.log(val);      
    }
    catch(error){
        console.log(error);
        
    }
}
abcd()