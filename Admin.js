import User from "./User.js";

class Admin extends User {
    constructor(name, email, birth, role = "Admin", active = true) {
        super(name, email, birth, role, active);
    }

    createCourse(course, amountOfVacancies) {
        console.log(`Course ${course} created with ${amountOfVacancies} vacancies`);
    }
}

const newAdmin = new Admin("Fernando", "fernando@domain.com", "1980/02/02");

console.log(newAdmin.displayInformation());
console.log(newAdmin.createCourse("CTI", "50"));
