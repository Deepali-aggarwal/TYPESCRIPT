// Unions : It allows us to deal with the situation where we are not sure what type of data we are going to encounter so using union we can combine 2 or more types of data that we can include into a variable or any array and vice vresa..
var score = 33;
score = 55;
score = "44";
var deepali = { name: "deepali", id: 334 };
deepali = { username: "da", id: 334 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is : ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // id.toLowerCase(); // it gives a red line as it treates id as a new datatype that has string or number both
    // So to overcome the above squiggly line we need to the strict type checking
    // ## Below is called as teh narrowing down of union type .
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data1 = [1, 2, 3, 4];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3"]; // this specifies that either all the elements in the array can be string or all can be number
var data4 = [1, 2, "hi"]; // this is the array that can have both numbers and strings as its elements.
var seatAllotment;
// seatAllotment = "aisle"
// seatAllotment = "crew"
