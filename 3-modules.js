// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const myData = require("./4-name");
const sayHi = require("./5-utils");
const { item, person } = require("./6-alternative-flavor");
require("./7-mind-grenade");

const { wail, john } = myData;

console.log(item, person);

sayHi(wail);
sayHi(john);
sayHi("Mark");