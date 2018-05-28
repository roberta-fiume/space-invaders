
window.addEventListener ("load", function() {
    const sizeOfSquare = 20;
    const borderSize = 2;
    const borderCorrection = 1;
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    function drawSquare(square) {
        context.strokeRect(square.originX, square.originY, square.side, square.side);  
    }

    function drawSquareRow(numberOfEnemiesInRow, rowIndex) {
        var enemiesInRow = [];
        for(var i=0; i < numberOfEnemiesInRow; i++) {
            var enemySquare = createSquare(140+(i*sizeOfSquare), 0+rowIndex, sizeOfSquare);
            drawSquare(enemySquare);
            enemiesInRow.push(enemySquare);
        }
        return enemiesInRow;
    }

    function drawAllEnemies(numberOfRows) {
        var enemies = [];
        for(var i=0; i < numberOfRows; i++) {
            var enemyRow = drawSquareRow(11, i*sizeOfSquare);
            enemies.push(enemyRow);
        }
        return enemies;
    }

    function createSquare(originX, originY, side) {
        var square = new Square(originX, originY, side);
        return square;        
    }
    
    function moveSquare(square, newOriginX, newOriginY) {
        eraseSquare(square);
        square.originX = newOriginX;
        square.originY = newOriginY;
        drawSquare(square);
    }

    function eraseSquare(square) {
        context.clearRect(square.originX-borderCorrection, square.originY-borderCorrection, 
                            square.side+borderSize, square.side+borderSize);
    }

    function moveOnArrowKey(square) {
        document.addEventListener('keydown', function(event) {
            const keyName = event.key;
            switch(keyName) {
                case "ArrowRight":
                    moveSquare(square, square.originX+sizeOfSquare, square.originY);
                    break;
                case "ArrowLeft":
                    moveSquare(square, square.originX-sizeOfSquare, square.originY);
                    break;
                case "ArrowUp":
                    moveSquare(square, square.originX, square.originY-sizeOfSquare);
                    break;
                case "ArrowDown":
                    moveSquare(square, square.originX, square.originY+sizeOfSquare);
                    break;
            }
        }, false);
    }

    var mainSquare = createSquare(240, 480, sizeOfSquare);

    drawSquare(mainSquare);
    moveOnArrowKey(mainSquare);
    var enemies = drawAllEnemies(5);

    console.log("enemies", enemies);

    // var firstEnemy = enemies[0][0];
    // moveSquare(firstEnemy, 120, firstEnemy.originY);
});