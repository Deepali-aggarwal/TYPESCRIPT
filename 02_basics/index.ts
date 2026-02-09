// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string , name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {

    // private _courseCount = 1
    // use of protected : The property marked as this can be accessed in its own class and in the class tat inherits the class
    protected _courseCount = 1
    readonly city: string = "Jaipur"
    constructor(
        public email: string ,
        public name : string,
        private UserId: string
    ){

    }
    // private deleteToken(){
    //     console.log("Token deleted");
    // }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
} 
// we can use #name to make it a private field instead of writing private keyword 
const deepali = new User("deepali@gmail.com" , "deepali" , "jdjjd");





