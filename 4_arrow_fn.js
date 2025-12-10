const user = {
    username: "vishal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function heelo(){
//     let username = "vishal"
//     console.log(this.username);
// }

// heelo()

// const heelo = function () {
//     let username = "vishal"
//     console.log(this.username);
// }

const heelo =  () => {
    let username = "vishal"
    console.log(this);
}


// heelo()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "vishal"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()