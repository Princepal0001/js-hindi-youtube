const user ={
    username : "prince",
    loginCount : 8,
    signIn : true,
    getUserDetails : function(){
        // console.log("got the user details");
        // console.log(`username ${this.username}`)
        // console.log(this)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function UserDetails(username,loginCount,signIn){
    this.username=username;
    this.loginCount=loginCount;
    this.signIn=signIn;
    // return this;
}
const userone = new UserDetails("prince",5,true);
const usertwo = new UserDetails("saajani",7,false);
console.log(userone);
console.log(usertwo);
