
class Admin {

}

class User extends Admin{
    constructor(email, passwd) {
        super()


    }


    isAdmin() {
        if(admin == true){
            return true
        }
    }
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin());  // true