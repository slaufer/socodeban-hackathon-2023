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
        let flipped = zip(this.contents);
        let result = this._move(flipped, this.cursor_y, this.cursor_x);
        if (result[1] !== this.cursor_y) {
            this.contents = zip(result[0]);
            this.cursor_y -= 1;
        }
    }

    moveDown() {
        let flipped = zip(this.contents).map(x => [...x].reverse());
        let result = this._move(flipped, this.height - this.cursor_y - 1, this.cursor_x);
        if (this.height - result[1] - 1 !== this.cursor_y) {
            this.contents = zip(result[0].map(x => x.reverse()));
            this.cursor_y += 1;
        }
    }

    moveLeft() {
        let result = this._move(this.contents, this.cursor_x, this.cursor_y);
        if (result[1] !== this.cursor_x) {
            this.contents = result[0];
            this.cursor_x -= 1;
        }
    }

    moveRight() {
        let flipped = this.contents.map(x => [...x].reverse());
        let result = this._move(flipped, this.width - this.cursor_x - 1, this.cursor_y);
        if (this.width - result[1] - 1 !== this.cursor_x) {
            this.contents = result[0].map(x => x.reverse());
            this.cursor_x += 1;
        }
    }

    _move(contents, cursor_x, cursor_y) {
        let candidate = contents[cursor_y].slice(0, cursor_x);
        let curr_x = cursor_x - 1;
        while (1) {
            if (curr_x < 0) {
                return [contents, cursor_x];
            }
            if (candidate[curr_x] === " ") {
                break;
            }
            curr_x -= 1;
        }
        while (curr_x < cursor_x) {
            contents[cursor_y][curr_x] = contents[cursor_y][curr_x + 1];
            curr_x += 1;
        }
        contents[cursor_y][curr_x] = ' ';
        return [contents, cursor_x - 1];
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

function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}
