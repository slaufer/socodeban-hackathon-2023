import GameState from "./socodeban.mjs"

// constructor
console.log("constructor");
let x = new GameState('1\n\n1234567\nasdf\nqwerty', 0,0, 0, x=>x);
if (x.width !== 7) {
    console.log("constructor width bad");
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x.join('')).join('\n') !== '1      \n       \n1234567\nasdf   \nqwerty ') {
    console.log("constructor row padding bad");
} else {  process.stdout.write("."); }

x = new GameState('1\n\n123', 0,0, 7, x=>x);
if (x.width !== 7) {
    console.log("constructor width argument bad");
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x.join('')).join('\n') !== '1      \n       \n123    ') {
    console.log("constructor argument padding bad");
} else {  process.stdout.write("."); }

x = new GameState('foo', 0,0, 7, x=>x, "testfile.txt");
if (x.contents.map(x=>x.join('')).join('\n') !== '#File:testfile.txt\nfoo               ') {
    console.log("constructor file name injection bad");
} else {  process.stdout.write("."); }


// Str/Arr conversion
console.log("\nstr/array");
x = new GameState('', 0,0, 0, x=>x);
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
x = new GameState('print("this is a test")', 0,0, 0, x => x.output.trim() === "this is a test");
if (! x.validate()) {
    console.log("validate positive");
} else {  process.stdout.write("."); }

x = new GameState('print("this is a test")', 0,0, 0, x => x.output.trim() === "this is not a test");
if (x.validate()) {
    console.log("validate negative");
} else {  process.stdout.write("."); }

x = new GameState('"this is an invalid method".foobar()', 0,0, 0, x => x.output.trim() === "this is not a test");
if (x.validate()) {
    console.log("validate syntax error");
} else {  process.stdout.write("."); }
if (x.error.toString() !== "AttributeError: 'str' object has no attribute 'foobar' on line 1") {
    console.log("validate attribute error message " + x.error);
} else {  process.stdout.write("."); }

x = new GameState('object()[', 0,0, 0, x => x.output.trim() === "this is not a test");
if (x.validate()) {
    console.log("validate syntax error");
} else {  process.stdout.write("."); }
if (x.error.toString() !== "SyntaxError: EOF in multi-line statement on line 2") {
    console.log("validate syntax error message " + x.error);
} else {  process.stdout.write("."); }

x = new GameState('notanidentifier', 0,0, 0, x => x.output.trim() === "this is not a test");
if (x.validate()) {
    console.log("validate syntax error");
} else {  process.stdout.write("."); }
if (x.error.toString() !== "NameError: name 'notanidentifier' is not defined on line 1") {
    console.log("validate name error message " + x.error);
} else {  process.stdout.write("."); }

// move left
console.log("\nmove left");
x = new GameState('12345\n1 3 5\n12345', 0,1, 0, x => x);
x.moveLeft();
if (x.cursor_x !== 0) {
    console.log("left cursor 0");
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1 3 5") {
    console.log("left text 0");
} else {  process.stdout.write("."); }

x = new GameState('12345\n1 3 5\n12345', 1,1, 0, x => x);
x.moveLeft();
if (x.cursor_x !== 1) {
    console.log("left cursor 1");
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1 3 5") {
    console.log("left text 1");
} else {  process.stdout.write("."); }

x = new GameState('12345\n1 3 5\n12345', 2,1, 0, x => x);
x.moveLeft();
if (x.cursor_x !== 1) {
    console.log("left cursor 2");
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "13  5") {
    console.log("left text 2");
} else {  process.stdout.write("."); }

x = new GameState('12345\n1 3 5\n12345', 3,1, 0, x => x);
x.moveLeft();
if (x.cursor_x !== 2) {
    console.log("left cursor 3");
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "13  5") {
    console.log("left text 3");
} else {  process.stdout.write("."); }

x = new GameState('12345\n1 3 5\n12345', 4,1, 0, x => x);
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
x = new GameState('12345\n1 3 5\n12345', 0,1, 0, x => x);
x.moveRight();
if (x.cursor_x !== 1) {
    console.log("right cursor 0 " + x.cursor_x);
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== " 13 5") {
    console.log("right text 0 '" + x.contents[1].join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('12345\n1 3 5\n12345', 1,1, 0, x => x);
x.moveRight();
if (x.cursor_x !== 2) {
    console.log("right cursor 1 " + x.cursor_x);
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1  35") {
    console.log("right text 1 '" + x.contents[1].join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('12345\n1 3 5\n12345', 2,1, 0, x => x);
x.moveRight();
if (x.cursor_x !== 3) {
    console.log("right cursor 2 " + x.cursor_x);
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1  35") {
    console.log("right text 2 '" + x.contents[1].join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('12345\n1 3 5\n12345', 3,1, 0, x => x);
x.moveRight();
if (x.cursor_x !== 3) {
    console.log("right cursor 3 " + x.cursor_x);
} else {  process.stdout.write("."); }
if (x.contents[1].join('') !== "1 3 5") {
    console.log("right text 3 '" + x.contents[1].join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('12345\n1 3 5\n12345', 4,1, 0, x => x);
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
x = new GameState('111\n2 2\n333\n4 4\n555', 1,0, 0, x => x);
x.moveUp();
if (x.cursor_y !== 0) {
    console.log("up cursor 0 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1 3 5") {
    console.log("up text 0 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('111\n2 2\n333\n4 4\n555', 1,1, 0, x => x);
x.moveUp();
if (x.cursor_y !== 1) {
    console.log("up cursor 1 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1 3 5") {
    console.log("up text 1 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('111\n2 2\n333\n4 4\n555', 1,2, 0, x => x);
x.moveUp();
if (x.cursor_y !== 1) {
    console.log("up cursor 2 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "13  5") {
    console.log("up text 2 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('111\n2 2\n333\n4 4\n555', 1,3, 0, x => x);
x.moveUp();
if (x.cursor_y !== 2) {
    console.log("up cursor 3 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "13  5") {
    console.log("up text 3 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('111\n2 2\n333\n4 4\n555', 1,4, 0, x => x);
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
x = new GameState('111\n2 2\n333\n4 4\n555', 1,0, 0, x => x);
x.moveDown();
if (x.cursor_y !== 1) {
    console.log("down cursor 0 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== " 13 5") {
    console.log("down text 0 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('111\n2 2\n333\n4 4\n555', 1,1, 0, x => x);
x.moveDown();
if (x.cursor_y !== 2) {
    console.log("down cursor 1 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1  35") {
    console.log("down text 1 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('111\n2 2\n333\n4 4\n555', 1,2, 0, x => x);
x.moveDown();
if (x.cursor_y !== 3) {
    console.log("down cursor 2 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1  35") {
    console.log("down text 2 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('111\n2 2\n333\n4 4\n555', 1,3, 0, x => x);
x.moveDown();
if (x.cursor_y !== 3) {
    console.log("down cursor 3 " + x.cursor_y);
} else {  process.stdout.write("."); }
if (x.contents.map(x=>x[1]).join('') !== "1 3 5") {
    console.log("down text 3 '" + x.contents.map(x=>x[1]).join('') + "'");
} else {  process.stdout.write("."); }

x = new GameState('111\n2 2\n333\n4 4\n555', 1,4, 0, x => x);
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

