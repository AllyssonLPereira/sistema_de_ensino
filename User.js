export default class User {

    // using only private attributes (#), we can still have problems, because assigning a value to a property that does not exist creates that property. For example, newUser.name = "Marcio", would create the prop. name.

    #name
    #email
    #birth
    #role
    #active

    constructor(name, email, birth, role, active = true) {
        this.#name = name
        this.#email = email
        this.#birth = birth
        this.#role = role || "student"
        this.#active = active
    }

    // accessor methods are read-only
    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get birth() {
        return this.#birth;
    }

    get role() {
        return this.#role;
    }

    get active() {
        return this.#active;
    }

    set name(newName) {
        if (newName === "") {
            throw new Error("Invalid name format")
        }

        this.#name = newName;
    }

    // Overload = sobrecarga de método (muito acoplamento) *Ele não consegue usar a ASSINATURA DE FUNÇÃO
    displayInformation() {
        const types = {
            student: `Student: ${this.name}`,
            admin: `Admin: ${this.name}\nEmail: ${this.email}`,
            teacher: `Teacher: ${this.name}\nEmail: ${this.email}`
        }

        return types[arguments[0]]
    }

    // Static methods do not depend on instances or class constructors
    static displayInformationGeneric(name, email) {
        return `Name: ${name}\nEmail: ${email}`
    }
}
