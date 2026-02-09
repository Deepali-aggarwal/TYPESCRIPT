// Tuples : IT is a kind of specialised array given to us by TYpeScript with some special restrictions on it.
// IN the tuples order of the array also matters

const user : (string | number)[] = ["hc", 1]

let tUser : [string , number, boolean]
tUser = ["fg", 1223 ,true  ]

let rgb : [number , number , number] = [255, 123, 112]

type User = [number , string]
const newUser: User = [112, "ejcidhd@gmail.com"]

newUser[1] = "hc.com"
newUser.push(3)  // we marked our newUser to follow a tuple so it must never be more than the size of 2 but using push we have altered it's size 

