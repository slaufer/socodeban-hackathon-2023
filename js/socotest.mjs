import GameBoard from "./socodeban.mjs"

// Str/Arr conversion
console.log("str/array");
let x = new GameBoard('', 0,0,x=>x);
let teststr = "qewr\nasdf\nzxcv";
let testarray = x.stringToArrays(teststr);
if (testarray.length !== 3 && testarray[0].length !== 4) {
    console.log("str -> array error");
} else { console.log("ok"); }
let resultstr = x.arraysToString(testarray);
if (teststr !== resultstr) {
    console.log("array -> str errror");
} else { console.log("ok"); }

// validate
console.log("\nvalidation")
x = new GameBoard('print("this is a test")', 0,0,x => x.trim() === "this is a test");
if (! x.validate()) {
    console.log("validate positive");
} else { console.log("ok"); }

x = new GameBoard('print("this is a test")', 0,0,x => x.trim() === "this is not a test");
if (x.validate()) {
    console.log("validate negative");
} else { console.log("ok"); }

