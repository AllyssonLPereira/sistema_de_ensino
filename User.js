export default class User {
    
    // utilizando serquilha, ainda podemos ter problemas, pois a atribuição de um valor a uma propriedade que não existe cria essa propriedade. Por exemplo, newUser.name = "Márcio", criaria a prop. name.
    
    #name
    #email
    #birth
    #role
    #active

    constructor(name, email, birth, role, active = true) {
        this.#name = name
        this.#email = email
        this.#birth = birth
        this.#role = role || "estudante"
        this.#active = active
    }

    #returnsObject() {
        return ({
            name: this.#name,
            email: this.#email,
            birth: this.#birth,
            role: this.#role,
            active: this.#active,

        })
    }

    displayInformation() {
        const objUser = this.#returnsObject();
        return `Name: ${objUser.name}\nEmail: ${objUser.email}`;
    }
}

// const newUser = new User("Allysson", "allysson@domain.com", "2025/01/01");
// console.log(newUser.displayInformation());
