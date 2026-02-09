/ Objects;
var User = {
    name: "Parth",
    email: "parth@google.com",
    isActive: true
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    // function body
}
// createUser({ name: "Deepali", isPaid: false });
var newUsr = { name: "Deepali", isPaid: false, email: "Deepali@google.com" };
createUser(newUsr); // weird behaviour of objects because if we were to pass email as argument in create user that was not allowed but now we have passed using a different method 
function createCourse() {
    return { name: "react.js", price: 399 };
}
var myUser = {
    _id: "1234",
    name: "p",
    email: "palplk",
    isActive: false
};
myUser.email = "ncvsnvjnv";
