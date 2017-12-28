$( document ).ready (function() {
    var world = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,2,1,2,1,2,2,2,1,1,2,1,2,2,2,1,1,2,1,2,2,2,1,1,2,1,2,2,2,1,1,2],
        [2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2],
        [2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,4,2,1,1,2,1,2,1,2,1,1,2],
        [2,1,2,4,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2],
        [2,1,2,2,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,1,2,1,2,1,2,2,1,2,1,2,1,1,2],
        [2,1,1,1,1,1,2,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,2,1,1,2],
        [2,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]    
    ];

    function displayWorld() {
        var output = "";

        for( var i = 0; i<world.length; i++) {
            output += "<div class = 'row'>";
            
            for( var j = 0; j<world[i].length; j++) {
                if( world[i][j] == 2 )
                    output += "<div id = x" + j + "y" + i + " class = 'brick'></div>";
                    else if( world[i][j] == 1 )
                    output += "<div id = x" + j + "y" + i + " class = 'coin'></div>";
                    if( world[i][j] == 0 )
                    output += "<div id = x" + j + "y" + i + " class = 'empty'></div>";
                    if( world[i][j] == 3 )
                    output += "<div id = x" + j + "y" + i + " class = 'pacman'></div>";
                    if( world[i][j] == 4 )
                    output += "<div id = x" + j + "y" + i + " class = 'cherry'></div>";
            }
            output += "</div>";
        }
        output += "<p id = score>SCORE: 0</p>"
        document.getElementById("world").innerHTML = output;
    }
    displayWorld();

    var px = 1, py = 1;
    var direction = "180deg"
    var pacmanDivId = "";
    var score = 0;
    document.onkeydown = function(e) { //setting new coordinates for pacman
        
        if ( e.keyCode  == 37) {
            direction = "0deg"; //turning pacman's face
            if ( world[py][px-1] !== 2 ) {
                px --;
            }
        }
        if ( e.keyCode  == 39) {
            direction = "180deg";
            if ( world[py][px+1] !== 2  ) {
                px ++;
            } 
        }
        if ( e.keyCode  == 38) {
            direction = "90deg";
            if ( world[py-1][px] !== 2  ) {
                py --;
            } 
        }
        if ( e.keyCode  == 40) {
            direction = "270deg";
            if ( world[py+1][px] !== 2  ) {
                py ++;
            } 
        }
        
        $( "div.pacman" ).attr( "class", "empty" ); //removing pacman from old coordinates
        
        pacmanDivId = "#x" + px + "y" + py + ""; //building up the id with new coordinates for pacman's div

        if ($( pacmanDivId ).attr( "class" ) == "coin") {
            score += 10;
        }
        if ($( pacmanDivId ).attr( "class" ) == "cherry") {
            score += 50;
            $( "body" ).css( 'background-color', 'red');
            setTimeout (function () {
                $( "body" ).css( 'background-color', 'black');
            }, 200)
        }

        $( pacmanDivId ).attr( "class", "pacman" ); //creating pacman at the new coordinates
        $( "div.pacman" ).css( 'transform', 'rotate(' + direction + ')' );

        document.getElementById("score").innerHTML = "<p>SCORE: " + score + "</p>";


    }

})
