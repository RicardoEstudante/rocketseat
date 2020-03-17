
class User {
    constructor(email, passwd) {
        this.email = email;
        this.senha = passwd;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends User{
    constructor(email, passwd) {
        super(email, passwd);

        this.admin = true;
    }
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin());  // true