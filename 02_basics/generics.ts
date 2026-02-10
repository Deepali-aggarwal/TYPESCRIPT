const score: Array<number> = []
const names: Array<string> = []

function identityOne(val:boolean | number): boolean| number{ 
    return val // in this we've got the problem that we are never sure if value is boolean then we are returning only boolean but with this code we can return boolean or number
}

function identityTwo(val: any) : any{
    return val  //Using any is not a healthy practice and this also doesn't solve the problem
}

function identityThree<Type>(val: Type) : Type{
    return val 
}

// identityThree("3")

function identityFour<T>(val : T):T{ 
    return val; //just a short form for identityThree function 
}

interface Bottle{
    brand:string,
    type: number
}

identityFour<Bottle>({brand: " " , type: 4})

function getSearchProducts<T>(products: T[]) : T{
    //do some dateabse operations
    const myIndex = 3
    return products[myIndex]
}


// defining generics in arrow functions 
const getMmoreSearchProducts =<T,>(products: T[]): T => {
    // ## <T,> many times this syntax for generics will be used just to mention this is not a JSX syntax but a generics syntax
    const myIndex =4 
    return products [myIndex]
}  

interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T , U extends Database>(valOne: T , valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}
// anotherFunction(3, {})

// classes
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class sellable<T>{
    public cart: T[] = []

    addTCart(product : T){
        this.cart.push(product)
    }
}