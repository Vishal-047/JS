// let myName = "vishal     "
// let mychannel = "singh     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vishal = function(){
    console.log(`vishal is present in all objects`);
}

Array.prototype.hello = function(){
    console.log(`vishal says hello`);
}

// heroPower.vishal()
// myHeros.vishal()
// myHeros.hello()
// heroPower.hello()

// inheritance

const User = {
    name: "vishal",
    email: "vishal@google.com"
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

let anotherUsername = "visalsingh     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"college".trueLength()
"iceTea".trueLength()