
window.addEventListener ("load", function() {
    const sizeOfSquare = 20;
    const borderSize = 2;
    const borderCorrection = 1;
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    function drawSquare(originX, originY, side) {
        context.strokeRect(originX, originY, side, side);  
    }
    
    function drawMainSquare(square) {
        drawSquare(square.originX, square.originY, square.side);
    }

    function drawSquareRow(numberOfEnemiesInRow, rowIndex) {
        for(var i=0; i < numberOfEnemiesInRow; i++) {
            drawSquare(140+(i*sizeOfSquare), 0+rowIndex, sizeOfSquare);
        }
    }

    function drawAllEnemies(numberOfRows) {
        for(var i=0; i < numberOfRows; i++) {
            drawSquareRow(11, i*sizeOfSquare);
        }
    }

    function createSquare(originX, originY, side) {
        var square = new Square(originX, originY, side);
        return square;        
    }

    function moveSquare(square, newOriginX, newOriginY) {
        eraseSquare(square);
        square.originX = newOriginX;
        square.originY = newOriginY;
        drawMainSquare(square);
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

    drawMainSquare(mainSquare);
    moveOnArrowKey(mainSquare);
    drawAllEnemies(5);

});