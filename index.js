import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

const newAdmin = new Admin("Fernando", "fernando@domain.com", "1980/02/02");

newAdmin.name = "";
console.log(newAdmin.name); //It is called as if it were a prop. It does not know about the internal implementation of the Parent class.
