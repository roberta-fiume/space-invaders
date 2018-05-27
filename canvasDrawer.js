
window.addEventListener ("load", function() {
    var sizeOfSquare = 20;

    function drawSquare(originX, originY, side) {
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        context.rect(originX, originY, side, side);  
        context.stroke();
    }
    
    function drawMainSquare() {
        drawSquare(240, 480, sizeOfSquare);
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

    function moveSquare(square) {
        
    }

    drawMainSquare();
    drawAllEnemies(5)
});