// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const hello = new User("vishal", "vs@gmail.com", "123")

console.log(hello.encryptPassword());
console.log(hello.changeUsername());

// behind the scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const hii = new user("helloo", "helloo@gmail.com", "123")

console.log(hii.encryptPassword());
console.log(hii.changeUsername());