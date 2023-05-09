import "js/skulpt/skulpt.min.js";
import "js/skulpt/skulpt-stdlib.js";

class GameBoard {
    constructor(script, cursor_x, cursor_y, validator) {
        this.contents = stringToArrays(script);
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
        validator(this.output);
    }

    storeOutput(str) {
        this.output += "\n" + str;
    }

    stringToArrays(str) {

    }

    arraysToString(arrs) {

    }
}
