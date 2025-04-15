import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

const newUser = new User("Allysson", "allysson@domain.com", "1980/02/02");
console.log(newUser.displayInformation("student"));

const dataFictitious = User.displayInformationGeneric("Yoda", "yoda@dagobah.com");
console.log(dataFictitious);

// newAdmin.name = "";
// console.log(newAdmin.name); -> It is called as if it were a prop. It does not know about the internal implementation of the Parent class.
