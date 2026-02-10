// Detections : Cases about which we need to more catious
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please Provide ID");
        return;
    }
    // id ID is available perform operations on it 
    id.toLowerCase();
}
// example of array number or string
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// ##typeof are also called type guards which are used for strict type checking 
// instanceof narrowing 
// typeof checks for the default type and instanceof checks whether this object was an instance of some class 
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "Circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    // return shape.side * shape.side
}
//NEVER TYPE & EXHAUSTIVE CHECKING
function getArea(shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length + shape.width;
        default:
            var _defaultforshape = shape;
            return _defaultforshape;
    }
}
