import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, birth, role = "admin", active = true) {
        super(name, email, birth, role, active);
    }

    // Override - sobrescrita de método
    // displayInformation() {
    //     const infos = super.displayInformation();
    //     return `Admin - ${infos}`;
    // }

    createCourse(course, amountOfVacancies) {
        return `Course ${course} created with ${amountOfVacancies} vacancies.`;
    }
}
