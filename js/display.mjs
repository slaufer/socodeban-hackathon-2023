export default class GameDisplay {
    constructor(viewportWidth, viewportHeight) {
        this.viewportWidth = viewportWidth;
        this.viewportHeight = viewportHeight;
    }

    draw(board) {
        console.log(board);

        document.querySelector('#viewport-movecounter').innerText = `MOV_CNT: ${board.moves}`;
        document.querySelector('#viewport-curpos').innerText = `CUR_POS: ${board.cursor_x},${board.cursor_y}`;

        const vp = document.querySelector('#viewport-chars');

        vp.innerHTML = "";

        const cellWidth = `${this.viewportWidth / (board.width + 1)}px`;
        const cellHeight = `${this.viewportHeight / board.height}px`;
        const lineHeight = cellHeight;
        const fontSize = cellHeight;
        const numberFontSize = `${this.viewportHeight / board.height * 0.5}px`;

        board.contents.forEach((row, y) => {
            const rowElement = document.createElement('div');
            
            rowElement.style.height = rowElement.style.maxHeight = cellHeight;

            const numberElement = document.createElement('div');

            numberElement.style.width = numberElement.style.maxWidth = cellWidth;
            numberElement.style.height = numberElement.style.maxHeight = cellHeight;
            numberElement.style.lineHeight = lineHeight;
            numberElement.style.fontSize = numberFontSize;
            

            if (y == 0) {
                rowElement.setAttribute('class', 'viewport-row viewport-row-header');
                numberElement.setAttribute('class', 'viewport-line-number viewport-line-number-header');
                numberElement.innerHTML = '&nbsp;';
            } else {
                numberElement.setAttribute('class', 'viewport-line-number');
                rowElement.setAttribute('class', 'viewport-row');
                numberElement.innerHTML = y;
            }

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