export default class GameDisplay {
    constructor(viewportWidth, viewportHeight) {
        this.viewportWidth = viewportWidth;
        this.viewportHeight = viewportHeight;
    }

    debugDraw(board) {
        const out = document.querySelector("#test-output");
        out.innerHTML = ""

        out.innerHTML += `SIZE ${board.width} x ${board.height}\n`
            + `MOVES ${board.moves}\n`
            + `CURSOR ${board.cursor_x} ${board.cursor_y}\n\n`;
        

        board.contents.forEach((row, y) => {
            row.forEach((cell, x) => {
                let disp = cell.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');

                if (x === board.cursor_x && y == board.cursor_y) {
                    disp = `<span>${disp}</span>`;
                }

                out.innerHTML += disp;
            });

            out.innerHTML += "\n";
        });
    }

    draw(board) {
        console.log("REDRAW TIME", board);
        this.debugDraw(board);

        const vp = document.querySelector('#viewport');

        vp.innerHTML = "";

        const cellWidth = `${this.viewportWidth / (board.width + 1)}px`;
        const cellHeight = `${this.viewportHeight / board.height}px`;
        const lineHeight = cellHeight;
        const fontSize = cellHeight;
        const numberFontSize = `${this.viewportHeight / board.height * 0.5}px`;

        board.contents.forEach((row, y) => {
            const rowElement = document.createElement('div');
            rowElement.setAttribute('class', 'viewport-row');
            rowElement.style.height = rowElement.style.maxHeight = cellHeight;

            const numberElement = document.createElement('div');
            numberElement.setAttribute('class', 'viewport-line-number');
            numberElement.style.width = numberElement.style.maxWidth = cellWidth;
            numberElement.style.height = numberElement.style.maxHeight = cellHeight;
            numberElement.style.lineHeight = lineHeight;
            numberElement.style.fontSize = numberFontSize;
            numberElement.innerHTML = y + 1;

            rowElement.appendChild(numberElement);



            row.forEach((cell, x) => {
                const cellElement = document.createElement('div');
                cellElement.setAttribute('class', 'viewport-cell');
                cellElement.innerHTML = cell.replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(' ', '&nbsp;');

                cellElement.style.width = cellElement.style.maxWidth = cellWidth;
                cellElement.style.height = cellElement.style.maxHeight = cellHeight;
                cellElement.style.lineHeight = lineHeight;
                cellElement.style.fontSize = fontSize;


                if (x === board.cursor_x && y === board.cursor_y) {
                    cellElement.style.backgroundColor = 'black';
                    cellElement.style.color = 'white';
                }


                rowElement.appendChild(cellElement);
            });

            vp.appendChild(rowElement);
        });
    }
}