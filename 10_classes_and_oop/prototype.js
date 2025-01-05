let myname = "prince"
console.log(myname.length)


let myheroes=["thor","spiderman",]
let heropower={
    thor : "hammer",
    spiderman : "sling",
    getspiderpower : function(){
        console.log(`spider man power is ${this.spiderman}`);
    }
}
Object.prototype.prince = function(){
    console.log(`hitesh is present in all objects`);
}
// heropower.prince();
myheroes.prince();


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
