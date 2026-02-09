var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string , name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
var User = /** @class */ (function () {
    function User(email, name, UserId) {
        this.email = email;
        this.name = name;
        this.UserId = UserId;
        // private _courseCount = 1
        // use of protected : The property marked as this can be accessed in its own class and in the class tat inherits the class
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        // private deleteToken(){
        //     console.log("Token deleted");
        // }
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return SubUser;
}(User));
// we can use #name to make it a private field instead of writing private keyword 
var deepali = new User("deepali@gmail.com", "deepali", "jdjjd");
