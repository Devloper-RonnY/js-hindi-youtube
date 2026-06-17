       // Call back Hell
 
function getUserInfo(username, cb){
    console.log("fetching user Info ...");
    let id = Math.floor(Math.random()*10)
    setTimeout(() => {
        cb({_id: id ,username, age: "25", city: "Mahad"})
    }, 2000);
}

function getUserFriendNames(id, cb){
 console.log("fetching user friends names  ...");
    setTimeout(() => {   
        cb({_id: id, frdNames: ["bhavesh", "atharv", "aryan", "shreyas"]})
    }, 3000);
}

function getBestestFriendsNames(id, cb){
     console.log("fetching bestest friends names  ...");
    setTimeout(() => {
        cb({_id: id, bf: ["bhavesh", "atharv"]})
    }, 2000);   
}

getUserInfo("Roshan", function(data){
    getUserFriendNames(data._id, function(frdNames){
       getBestestFriendsNames(data?._id, function(bf){
    })  
  })
})