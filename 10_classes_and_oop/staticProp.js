class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const prince = new user("prince");
// console.log(prince.createId());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }

}
const iphone =new Teacher("iphone","iphone@gmail.com");
iphone.logme();
console.log(iphone.createId());

