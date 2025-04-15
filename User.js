export default class User {
    constructor(name, email, birth, role, active = true) {
        this.name = name
        this.email = email
        this.birth = birth
        this.role = role || "estudante"
        this.active = active
    }

    displayInformation() {
        console.log(`Name: ${this.name}\nEmail: ${this.email}`);
    }
}

// const newUser = new User("Allysson", "allysson@domain.com", "2000/01/01", "estudante");
// console.log(newUser.displayInformation());
