// Function 
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hi");
function signUp(name, email, isPaid) { }
signUp("abyu", "cnjsbjb", false);
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
login("Deepali", "Deepali@google.com");
function add(num) {
    return num + 10;
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "dr. strange"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmssg) {
    console.log(errmssg);
}
// Some functions never return a value
// It leads to forceful termination of the program.
function handleError(errmssg) {
    throw new Error(errmssg);
}
