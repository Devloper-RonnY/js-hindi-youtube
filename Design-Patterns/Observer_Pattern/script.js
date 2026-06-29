// Observer Pattern

class YoutubeChannel{
    constructor(){
        this.Subscribers = [];
    }
    subscribe(user){
        this.Subscribers.push(user)
        user.update(`${user.name} has subscribed youtube channel`)
    }
    unsubscribe(user){
        this.Subscribers = this.Subscribers.forEach((sub) => sub !== user)
        user.update(`${user.name} has unsubscribed youtube channel`)
    }
    notify(message){
        this.Subscribers.forEach((sub) => sub.update(`${message}`))
    }
}


class User{
    constructor(name){
        this.name = name
    }
    update(data){
        console.log(`${this.name} ${data}`);  
    }
}

const sherians = new YoutubeChannel();
const user1 = new User("Roshan");
const user2 = new User("Bhavesh");

sherians.subscribe(user1)
sherians.subscribe(user2)
sherians.notify("new video uploaded")
