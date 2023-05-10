import "./skulpt/skulpt.min.js";
import "./skulpt/skulpt-stdlib.js";

export default class GameState {
    constructor(script, cursor_x, cursor_y, width, validator, filename = "", show_score=true) {
        this.filename = filename;
        let prefix = "";
        if (filename !== "") {
            prefix += "FILE:" + filename;
        }
        if (show_score) {
            prefix += "          ";
        }
        if (prefix !== "") {
            script = "#" + prefix + "\n" + script;
            cursor_y += 1;
        }
        this.contents = this.stringToArrays(script);
        this.height = this.contents.length;
        this.width = Math.max(width, ...this.contents.map(l => l.length));
        for (const line of this.contents) {
            while (line.length < this.width) {
                line.push(' ');
            }
        }
        this.cursor_x = cursor_x;
        this.cursor_y = cursor_y;
        this.validator = validator;
        this.output = "";
        this.moves = -1;
        this.show_score = show_score;

        this.baseline_x = this.cursor_x;
        this.baseline_y = this.cursor_y;
        this.baseline_contents = this.contents.map(x => [...x]);

        this.update_moves_display();
    }

    reset() {
        this.cursor_x = this.baseline_x;
        this.cursor_y = this.baseline_y;
        this.contents = this.baseline_contents.map(x => [...x]);
        this.output = "";
        this.moves = -1;
        this.update_moves_display();
    }

    moveUp() {
        let flipped = zip(this.contents);
        // noinspection JSSuspiciousNameCombination
        let result = this._move(flipped, this.cursor_y, this.cursor_x);
        if (result[1] !== this.cursor_y) {
            this.contents = zip(result[0]);
            this.cursor_y -= 1;
        }
        this.update_moves_display();
    }

    moveDown() {
        let flipped = zip(this.contents).map(x => [...x].reverse());
        // noinspection JSSuspiciousNameCombination
        let result = this._move(flipped, this.height - this.cursor_y - 1, this.cursor_x);
        if (this.height - result[1] - 1 !== this.cursor_y) {
            this.contents = zip(result[0].map(x => x.reverse()));
            this.cursor_y += 1;
        }
        this.update_moves_display();
    }

    moveLeft() {
        let result = this._move(this.contents, this.cursor_x, this.cursor_y);
        if (result[1] !== this.cursor_x) {
            this.contents = result[0];
            this.cursor_x -= 1;
        }
        this.update_moves_display();
    }

    moveRight() {
        let flipped = this.contents.map(x => [...x].reverse());
        let result = this._move(flipped, this.width - this.cursor_x - 1, this.cursor_y);
        if (this.width - result[1] - 1 !== this.cursor_x) {
            this.contents = result[0].map(x => x.reverse());
            this.cursor_x += 1;
        }
        this.update_moves_display();
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

    update_moves_display() {
        if (this.show_score) {
            let first_line = this.contents[0].join('');
            const m = first_line.match(".*MOVES: ?(-?[0-9]+)");
            if (m !== null) {
                this.moves = parseInt(m[1]);
            }
            this.moves += 1;
            let suffix = " MOVES: " + this.moves;
            first_line = first_line.substring(0, first_line.length - suffix.length) + suffix;
            this.contents[0] = first_line.split('');
        } else {
            this.moves += 1;
        }
    }

    validate() {
        this.output = "";
        this.error = undefined;
        Sk.configure({ output: (text) => this.storeOutput(text) });
        try {
            Sk.importMainWithBody("<stdin>", false, this.arraysToString(this.contents), true);
        } catch (e) {
            this.error = e;
            return false;
        }
        return this.validator(this);
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
