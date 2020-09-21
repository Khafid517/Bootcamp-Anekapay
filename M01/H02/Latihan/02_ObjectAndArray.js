
/**
 * Objek
 */
let user = {
    name: "John",
    age: 30
};

// ["name", "age"]
Object.keys(user) 
// ["John", 30]
Object.values(user) 
// [ ["name","John"], ["age",30] ]
Object.entries(user) 


/**
 * Array
 */
var x = [ ["prop1", 2] , ["prop2", 3]]
Object.fromEntries(x)
  