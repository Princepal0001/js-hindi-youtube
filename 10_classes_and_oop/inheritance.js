class user{
    constructor(username,gmail,password){
       this.username=username;
       this.gmail=gmail;
       this.password=password
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password

    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("prince","prince@gmail.com","123");
chai.addcourse();
chai.logme()
const masalaChai = new user("masalaChai","chai@gmail.com","123")
masalaChai.logme()

console.log(chai instanceof user);