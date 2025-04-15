import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

const newUser = new User("Allysson", "allysson@domain.com", "1980/02/02");
const newAdmin = new Admin("Fernando", "fernando@domain.com", "1980/02/02");
const newTeacher = new Teacher("Milene", "milene@domain.com", "1989/03/27");

console.log(newUser.displayInformation());
console.log(newAdmin.displayInformation());
console.log(newTeacher.displayInformation());

// newAdmin.name = "";
// console.log(newAdmin.name); -> It is called as if it were a prop. It does not know about the internal implementation of the Parent class.
