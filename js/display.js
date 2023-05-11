window.GameDisplay = class GameDisplay {
    constructor(viewportWidth, viewportHeight) {
        this.viewportWidth = viewportWidth;
        this.viewportHeight = viewportHeight;
    }

    draw(gameState, puzzle, sane) {
        if (sane !== "1") {
            const chaosLevel = Math.max(Math.min(Math.floor(gameState.moves / (puzzle.par * 0.4)), 4), 0);
            document.querySelector('#viewport').setAttribute('class', `chaos-level-${chaosLevel}`);
        }

        const charViewport = document.querySelector('#viewport-chars');

        charViewport.innerHTML = "";

        const cellWidth = `${this.viewportWidth / (gameState.width + 1)}px`;
        const cellHeight = `${this.viewportHeight / gameState.height}px`;
        const lineHeight = cellHeight;
        const fontSize = cellHeight;
        const numberFontSize = `${this.viewportHeight / gameState.height * 0.5}px`;

        gameState.contents.forEach((row, y) => {
            const rowElement = document.createElement('div');
            
            rowElement.style.height = rowElement.style.maxHeight = cellHeight;

            const numberElement = document.createElement('div');

            numberElement.style.width = numberElement.style.maxWidth = cellWidth;
            numberElement.style.height = numberElement.style.maxHeight = cellHeight;
            numberElement.style.lineHeight = lineHeight;
            numberElement.style.fontSize = numberFontSize;
            
            const numberElementInner = document.createElement('div');
            numberElementInner.setAttribute('class', 'viewport-line-number-inner');
            numberElement.appendChild(numberElementInner);


            if (y == 0) {
                rowElement.setAttribute('class', 'viewport-row viewport-row-header');
                numberElement.setAttribute('class', 'viewport-line-number viewport-line-number-header');
                numberElementInner.innerHTML = '&nbsp;';
            } else {
                numberElement.setAttribute('class', 'viewport-line-number');
                rowElement.setAttribute('class', 'viewport-row');
                numberElementInner.innerHTML = y;
            }

            rowElement.appendChild(numberElement);

            row.forEach((cell, x) => {
                const cellElement = document.createElement('div');
                cellElement.setAttribute('class', 'viewport-cell');
                cellElement.style.width = cellElement.style.maxWidth = cellWidth;
                cellElement.style.height = cellElement.style.maxHeight = cellHeight;
                cellElement.style.lineHeight = lineHeight;
                cellElement.style.fontSize = fontSize;

                const cellElementInner = document.createElement('div');
                cellElementInner.setAttribute('class', 'viewport-cell-inner');
                cellElementInner.innerHTML = cell.replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(' ', '&nbsp;');
                cellElement.appendChild(cellElementInner);


                if (x === gameState.cursor_x && y === gameState.cursor_y) {
                    cellElement.setAttribute('class', 'viewport-cell viewport-cursor');
                }


                rowElement.appendChild(cellElement);
            });

            charViewport.appendChild(rowElement);
        });
    }
}