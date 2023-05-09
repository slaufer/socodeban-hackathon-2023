import "./skulpt/skulpt.min.js";
import "./skulpt/skulpt-stdlib.js";

export default class GameBoard {
    constructor(script, cursor_x, cursor_y, validator) {
        this.contents = this.stringToArrays(script);
        this.height = this.contents.length;
        this.width = this.contents[0].length;
        this.cursor_x = cursor_x;
        this.cursor_y = cursor_y;
        this.validator = validator;
        this.output = "";
    }

    moveUp() {

    }

    moveDown() {

    }

    moveLeft() {

    }

    moveRight() {

    }

    validate() {
        this.output = "";
        Sk.configure({ output: (text) => this.storeOutput(text) });
        Sk.importMainWithBody("<stdin>", false, this.arraysToString(this.contents), true);
        return this.validator(this.output);
    }

    storeOutput(str) {
        if (this.output !== '') {
            this.output += "\n" + str;
        } else {
            this.output = str;
        }
    }

    stringToArrays(str) {
        return str.split("\n").map(x => x.split(""));
    }

    arraysToString(arrs) {
        return arrs.map(x => x.join('')).join('\n');
    }
}
