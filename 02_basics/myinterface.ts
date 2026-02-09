interface User{
    readonly dbId: number
    email : string,
    userId: number
    googleId?: string
    // startTrail: () => string 
    startTrail() : string
    getCoupon(couponname:string , value: number):number
}

interface User {
    githubToken : string
}

interface Admin extends User {
    role : "admin" | "ta" | "learner"
}



// const deepali : User = {dbId: 22 ,email: "h@h.com", userId: 2211,
//     githubToken: "github",
// startTrail: () => {
//     return "trail started"
// },
// getCoupon: (name: "deepali10" , off : 43) => {
//     return 10
// }
// }
// deepali.email = "h@ch.com"

const deepali : Admin = {dbId: 22 ,email: "h@h.com", userId: 2211,
    role: "admin",
    githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "deepali10" , off : 43) => {
    return 10
}
}
deepali.email = "h@ch.com"
