var score = [];
var names = [];
function identityOne(val) {
    return val; // in this we've got the problem that we are never sure if value is boolean then we are returning only boolean but with this code we can return boolean or number
}
function identityTwo(val) {
    return val; //Using any is not a healthy practice and this also doesn't solve the problem
}
function identityThree(val) {
    return val;
}
// identityThree("3")
function identityFour(val) {
    return val; //just a short form for identityThree function 
}
identityFour({ brand: " ", type: 4 });
function getSearchProducts(products) {
    //do some dateabse operations
    var myIndex = 3;
    return products[myIndex];
}
// defining generics in arrow functions 
var getMmoreSearchProducts = function (products) {
    // ## <T,> many times this syntax for generics will be used just to mention this is not a JSX syntax but a generics syntax
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
var sellable = /** @class */ (function () {
    function sellable() {
        this.cart = [];
    }
    sellable.prototype.addTCart = function (product) {
        this.cart.push(product);
    };
    return sellable;
}());
