import GameBoard from "./socodeban.mjs"

// Str/Arr conversion
console.log("str/array");
let x = new GameBoard('', 0,0,x=>x);
let teststr = "qewr\nasdf\nzxcv";
let testarray = x.stringToArrays(teststr);
if (testarray.length !== 3 && testarray[0].length !== 4) {
    console.log("str -> array error");
} else {  process.stdout.write("."); }
let resultstr = x.arraysToString(testarray);
if (teststr !== resultstr) {
    console.log("array -> str errror");
} else {  process.stdout.write("."); }

// validate
console.log("\nvalidation")
x = new GameBoard('print("this is a test")', 0,0,x => x.output.trim() === "this is a test");
if (! x.validate()) {
    console.log("validate positive");
} else {  process.stdout.write("."); }

x = new GameBoard('print("this is a test")', 0,0,x => x.output.trim() === "this is not a test");
if (x.validate()) {
    console.log("validate negative");
} else {  process.stdout.write("."); }

// move left
console.log("\nmove left");
x = new GameBoard('12345\n1 3 5\n12345', 0,1,x => x);
x.moveLeft();
if (x.cursor_x !== 0) {
    console.log("left cursor 0");
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1 3 5") {
    console.log("left text 0");
} else {  process.stdout.write("."); }

x = new GameBoard('12345\n1 3 5\n12345', 1,1,x => x);
x.moveLeft();
if (x.cursor_x !== 1) {
    console.log("left cursor 1");
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1 3 5") {
    console.log("left text 1");
} else {  process.stdout.write("."); }

x = new GameBoard('12345\n1 3 5\n12345', 2,1,x => x);
x.moveLeft();
if (x.cursor_x !== 1) {
    console.log("left cursor 2");
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "13  5") {
    console.log("left text 2");
} else {  process.stdout.write("."); }

x = new GameBoard('12345\n1 3 5\n12345', 3,1,x => x);
x.moveLeft();
if (x.cursor_x !== 2) {
    console.log("left cursor 3");
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "13  5") {
    console.log("left text 3");
} else {  process.stdout.write("."); }

x = new GameBoard('12345\n1 3 5\n12345', 4,1,x => x);
x.moveLeft();
if (x.cursor_x !== 3) {
    console.log("left cursor 4");
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1 35 ") {
    console.log("left text 4");
} else {  process.stdout.write("."); }

if (x.moves !== 1) {
    console.log("left moves '" + x.moves + "'");
} else {  process.stdout.write("."); }


// move right
console.log("\nmove right");
x = new GameBoard('12345\n1 3 5\n12345', 0,1,x => x);
x.moveRight();
if (x.cursor_x !== 1) {
    console.log("right cursor 0 " + x.cursor_x);
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== " 13 5") {
    console.log("right text 0 '" + x.contents[1].join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('12345\n1 3 5\n12345', 1,1,x => x);
x.moveRight();
if (x.cursor_x !== 2) {
    console.log("right cursor 1 " + x.cursor_x);
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1  35") {
    console.log("right text 1 '" + x.contents[1].join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('12345\n1 3 5\n12345', 2,1,x => x);
x.moveRight();
if (x.cursor_x !== 3) {
    console.log("right cursor 2 " + x.cursor_x);
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1  35") {
    console.log("right text 2 '" + x.contents[1].join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('12345\n1 3 5\n12345', 3,1,x => x);
x.moveRight();
if (x.cursor_x !== 3) {
    console.log("right cursor 3 " + x.cursor_x);
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1 3 5") {
    console.log("right text 3 '" + x.contents[1].join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('12345\n1 3 5\n12345', 4,1,x => x);
x.moveRight();
if (x.cursor_x !== 4) {
    console.log("right cursor 4 " + x.cursor_x);
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1 3 5") {
    console.log("right text 4 '" + x.contents[1].join('') + "'");
} else {  process.stdout.write("."); }

if (x.moves !== 1) {
    console.log("right moves '" + x.moves + "'");
} else {  process.stdout.write("."); }


// move up
console.log("\nmove up");
x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,0,x => x);
x.moveUp();
if (x.cursor_y !== 0) {
    console.log("up cursor 0 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1 3 5") {
    console.log("up text 0 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,1,x => x);
x.moveUp();
if (x.cursor_y !== 1) {
    console.log("up cursor 1 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1 3 5") {
    console.log("up text 1 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,2,x => x);
x.moveUp();
if (x.cursor_y !== 1) {
    console.log("up cursor 2 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "13  5") {
    console.log("up text 2 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,3,x => x);
x.moveUp();
if (x.cursor_y !== 2) {
    console.log("up cursor 3 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "13  5") {
    console.log("up text 3 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,4,x => x);
x.moveUp();
if (x.cursor_y !== 3) {
    console.log("up cursor 4 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1 35 ") {
    console.log("up text 4 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

if (x.moves !== 1) {
    console.log("up moves '" + x.moves + "'");
} else {  process.stdout.write("."); }


// move down
console.log("\nmove down");
x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,0,x => x);
x.moveDown();
if (x.cursor_y !== 1) {
    console.log("down cursor 0 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== " 13 5") {
    console.log("down text 0 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,1,x => x);
x.moveDown();
if (x.cursor_y !== 2) {
    console.log("down cursor 1 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1  35") {
    console.log("down text 1 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,2,x => x);
x.moveDown();
if (x.cursor_y !== 3) {
    console.log("down cursor 2 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1  35") {
    console.log("down text 2 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,3,x => x);
x.moveDown();
if (x.cursor_y !== 3) {
    console.log("down cursor 3 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1 3 5") {
    console.log("down text 3 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameBoard('111\n2 2\n333\n4 4\n555', 1,4,x => x);
x.moveDown();
if (x.cursor_y !== 4) {
    console.log("down cursor 4 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1 3 5") {
    console.log("down text 4 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

if (x.moves !== 1) {
    console.log("down moves '" + x.moves + "'");
} else {  process.stdout.write("."); }

