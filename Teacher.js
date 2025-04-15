import User from "./User.js";

class Teacher extends User {
    constructor(name, email, birth, role = "Teacher", active = true) {
        super(name, email, birth, role, active);
    }

    approveStudent(student, course) {
        console.log(`${student} passed the course of ${course}.\nResponsible: ${this.name}`);
    }
}

const newTeacher = new Teacher("Milene", "milene@domain.com", "1989/03/27");
console.log(newTeacher.approveStudent("Allysson", "Python"));
