const User = {
    _email: 'vishal@name.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const h = Object.create(User)
console.log(h.email);