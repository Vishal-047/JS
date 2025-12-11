class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const name = new Teacher("vishal", "vishal@teacher.com", "123")

name.logMe()
const fullname = new User("vishal singh")

fullname.logMe()

console.log(name instanceof User);