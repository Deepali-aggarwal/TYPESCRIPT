// Function 
function addTwo(num: number){
    return num + 2;
}

addTwo(5);

function getUpper(val:string){
    return val.toUpperCase();
}

getUpper("hi");

function signUp(name:string , email:string, isPaid: boolean){}
signUp( "abyu" , "cnjsbjb" , false);

let login = (name:string , email:string, isPaid: boolean = false)=>{}
login("Deepali" , "Deepali@google.com");

function add(num : number):number{ // the colon outside the function tells the function to allow only number to return 
    return num + 10;
}

const getHello = (s:string):string => {
    return "";
}

const heros = ["thor" ,"spiderman", "dr. strange"]

heros.map( (hero):string =>{
    return `hero is ${hero}`;
});

function consoleError(errmssg: string):void{ //void specifies this function doesn't returns anything
    console.log(errmssg);
}

// Some functions never return a value
// It leads to forceful termination of the program.
function handleError(errmssg: string):never{
    throw new Error(errmssg)
}