// interface Increment{
//     type : "Increment"
// }    
// interface Decrement{
//     type : "Decrement"
// }    
// interface Reset{
//     type: "Reset"
// }    

// type counters = Increment | Decrement | Reset
// function makeCounter(val: number ,Counter : counters): number{
//     switch(Counter.type){
//         case "Increment":
//             return val + 1
//         case "Decrement":
//             return val -1
//         case "Reset":
//             return val
//         default:
//             const _defaultforCounter: never = Counter
//             return _defaultforCounter    
//     }
// }

// // let count = 5;
// makeCounter(5);
// console.log(makeCounter(count , {type: "Increment"}));
// // console.log(count);
// console.log(makeCounter(count , {type: "Decrement"}));
// // console.log(count);
// console.log(makeCounter(count , {type: "Reset"}));
// // console.log(count);
// console.log(makeCounter(count , {type: "Decrement"}));
// // console.log(count);
// console.log(makeCounter(count , {type: "Increment"}));
// console.log(count);

type user = {
    increment() : number,
    decrement(): number,
    reset(): number,
}
function makeCounter(initialValue : number = 0) : user {
    let x = initialValue;
    return{
        increment():number{
            return ++x
        },
        decrement(): number{
            return --x
        },
        reset() : number{
            x = initialValue
            return x
        }
    }
    
}
const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.decrement());

export{}

