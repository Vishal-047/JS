const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const obj = {
    name: 'Vishal Singh',
    age: 21,
    isAvailable: true,

    hello: function(){
        console.log("Hellooooooooo");
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

Object.defineProperty(obj, 'name', {
    //writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}