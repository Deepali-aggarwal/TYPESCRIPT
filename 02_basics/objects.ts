/ Objects
const User = {
    name: "Parth",
    email : "parth@google.com",
    isActive : true     
}

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
  // function body
}

// createUser({ name: "Deepali", isPaid: false });
let newUsr = { name: "Deepali", isPaid: false , email: "Deepali@google.com"};
createUser(newUsr); // weird behaviour of objects because if we were to pass email as argument in create user that was not allowed but now we have passed using a different method 

function createCourse() : {name:string , price: number}{
    return {name :"react.js" , price : 399};
}

// Type Aliases

// type User = {
//     name: string;
//     email : string;
//     isActive : boolean;
// }

// function createNewUser (user : User):User{
// // function body
//     return {name: "" , email: "", isActive: true};
// }

// createNewUser({name: "" , email: "", isActive: true});

type User = {
    readonly _id : string;
    name: string;
    email : string;
    isActive : boolean;
    creditDetails? : number
}
let myUser: User = {
    _id : "1234",
    name : "p",
    email : "palplk",
    isActive : false
}

myUser.email = "ncvsnvjnv";
// myUser._id = "bccvb"; this is not allowed due to the readonly 

type cardnumber = {
    cardnumber : string;
}

type cardDate = {
    carddate : string;
}

type cardDetails = cardDate & cardnumber & {
    cvv : number;
}
