"use strict";
// interface Increment{
//     type : "Increment"
// }    
// interface Decrement{
//     type : "Decrement"
// }    
// interface Reset{
//     type: "Reset"
// }    
Object.defineProperty(exports, "__esModule", { value: true });
function makeCounter(initialValue) {
    if (initialValue === void 0) { initialValue = 0; }
    var x = initialValue;
    return {
        increment: function () {
            return ++x;
        },
        decrement: function () {
            return --x;
        },
        reset: function () {
            x = initialValue;
            return x;
        }
    };
}
var counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.decrement());
