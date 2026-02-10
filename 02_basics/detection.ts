// Detections : Cases about which we need to more catious
function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please Provide ID");
        return
    }
    // id ID is available perform operations on it 
    id.toLowerCase()
}

// example of array number or string

function printAll(strs : string | string[]| null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        } else if(typeof strs === "string"){
            console.log(strs);
        }
    }
}

// ##typeof are also called type guards which are used for strict type checking 

// instanceof narrowing 

// typeof checks for the default type and instanceof checks whether this object was an instance of some class 


function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void};
type Bird = { fly: () => void};

function isFish(pet : Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    } else{
        pet
        return "bird food"
    }
}


// DISCRIMINATED UNION

interface Circle{
    kind: "Circle"
    radius: number
}
interface Square{
    kind : "square"
    side: number
}
interface Rectangle{
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "Circle"){
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}


//NEVER TYPE & EXHAUSTIVE CHECKING

function getArea(shape: Shape){
    switch(shape.kind){
        case "Circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side 
        case "rectangle":
            return shape.length + shape.width       
        default:
            const _defaultforshape: never = shape
            return _defaultforshape

    }
}