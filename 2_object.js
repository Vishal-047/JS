const mysymb=Symbol("key1")

const myobj={
    name:"Vishal",
    age:21,
    [mysymb]:"key",
    Course:"B.tech",
    email:"vishal@email.com"
}

console.log(myobj.name)
console.log(myobj["Course"])
console.log(myobj)