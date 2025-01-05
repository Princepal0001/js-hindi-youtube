function Setusername(username){
    //complete Db calls
    this.username = username
}
function createuser(username,email,password){
    Setusername.call(this,username)
    this.email=email;
    this.password=password;
}
const chai = new createuser("prince","princepal12329@gmail.com","123");
console.log(chai);
