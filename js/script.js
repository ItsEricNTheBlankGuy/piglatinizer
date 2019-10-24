$( "document" ).ready(function() {
$("button").click(function() {

    $("p").text("");

    var message = $("input").val();

    var arrayOfStrings = message.split(" ");

    var arrayOfStringsTwo = [];

    var one = 1;

    var inside = arrayOfStrings.length;

    for (let e = 0; e < inside; e++) {

        if (arrayOfStrings[e].includes("!")){

        arrayOfStringsTwo.push(arrayOfStrings[e].slice(0, -1));

        arrayOfStringsTwo.splice(e+one, 0, "!");

        } else if (arrayOfStrings[e].includes(",")){

        arrayOfStringsTwo.push(arrayOfStrings[e].slice(0, -1));

        arrayOfStringsTwo.splice(e+one, 0, ",");

        } else if (arrayOfStrings[e].includes(";")){

        arrayOfStringsTwo.push(arrayOfStrings[e].slice(0, -1));

        arrayOfStringsTwo.splice(e+one, 0, ";");

        }  else if (arrayOfStrings[e].includes("?")){

        arrayOfStringsTwo.push(arrayOfStrings[e].slice(0, -1));

        arrayOfStringsTwo.splice(e+one, 0, "?");

        }  else if (arrayOfStrings[e].includes(".")){

        arrayOfStringsTwo.push(arrayOfStrings[e].slice(0, -1));

        arrayOfStringsTwo.splice(e+one, 0, ".");

        } else {

            arrayOfStringsTwo.push(arrayOfStrings[e]);

        }

        var one = one + 1;

    }



    var arrayOfArrays = [];

    arrayOfStringsTwo.forEach(function(element){


        var arrayWithin = element.split("");


        arrayOfArrays.push(arrayWithin);

    });

    let rows = arrayOfArrays.length;

    for (let i=0; i<rows; i++ ) {

        let items = arrayOfArrays[i].length;

        for (let r=0; r<items; r++) {

            var LoCa = arrayOfArrays[i][r].toLowerCase();
            arrayOfArrays[i].splice(r, 1, LoCa);
        }

        for(let n=0; n<items; n++) {

            if (arrayOfArrays[i][n] === "a" || arrayOfArrays[i][n] === "e" || arrayOfArrays[i][n] === "i" ||arrayOfArrays[i][n] === "o" || arrayOfArrays[i][n] === "u") {
                break;


            } else if (arrayOfArrays[i][n] === "b" || arrayOfArrays[i][n] === "c" || arrayOfArrays[i][n] === "d" || arrayOfArrays[i][n] === "f" || arrayOfArrays[i][n] === "g" || arrayOfArrays[i][n] === "h" || arrayOfArrays[i][n] === "j" || arrayOfArrays[i][n] === "k" || arrayOfArrays[i][n] === "l" || arrayOfArrays[i][n] === "m" || arrayOfArrays[i][n] === "n" || arrayOfArrays[i][n] === "p" || arrayOfArrays[i][n] === "q" || arrayOfArrays[i][n] === "r" || arrayOfArrays[i][n] === "s" || arrayOfArrays[i][n] === "t" || arrayOfArrays[i][n] === "v" || arrayOfArrays[i][n] === "w" || arrayOfArrays[i][n] === "x" ||  arrayOfArrays[i][n && n === 1] === "y" || arrayOfArrays[i][n] === "z") {

                arrayOfArrays[i].push(arrayOfArrays[i][n]);

            }


        }

        var secondItems = arrayOfArrays[i].length;

        while(items !== secondItems) {

            arrayOfArrays[i].splice(0,1);

            var secondItems = arrayOfArrays[i].length;

        }

        var lastLetter = arrayOfArrays[i].length - 1;

        if (arrayOfArrays[i][lastLetter] === "a" || arrayOfArrays[i][lastLetter] === "b" || arrayOfArrays[i][lastLetter] === "c" || arrayOfArrays[i][lastLetter] === "d" || arrayOfArrays[i][lastLetter] === "e" || arrayOfArrays[i][lastLetter] === "f" || arrayOfArrays[i][lastLetter] === "g" || arrayOfArrays[i][lastLetter] === "h" || arrayOfArrays[i][lastLetter] === "i" || arrayOfArrays[i][lastLetter] === "j" || arrayOfArrays[i][lastLetter] === "k" || arrayOfArrays[i][lastLetter] === "l" || arrayOfArrays[i][lastLetter] === "m" || arrayOfArrays[i][lastLetter] === "n" || arrayOfArrays[i][lastLetter] === "o" || arrayOfArrays[i][lastLetter] === "p" || arrayOfArrays[i][lastLetter] === "q" || arrayOfArrays[i][lastLetter] === "r" || arrayOfArrays[i][lastLetter] === "s" || arrayOfArrays[i][lastLetter] === "t" || arrayOfArrays[i][lastLetter] === "u" || arrayOfArrays[i][lastLetter] === "v" || arrayOfArrays[i][lastLetter] === "w" || arrayOfArrays[i][lastLetter] === "x" || arrayOfArrays[i][lastLetter] === "y" || arrayOfArrays[i][lastLetter] === "z") {
            arrayOfArrays[i].push("ay");
        }







    }

    for (let z=0; z<rows-1; z++) {
        var lastOne = arrayOfArrays[z][arrayOfArrays[z].length-1];
        if (arrayOfArrays[z+1][0] === "!" || arrayOfArrays[z+1][0] === "," || arrayOfArrays[z+1][0] === ";"  || arrayOfArrays[z+1][0] === "."  || arrayOfArrays[z+1][0] === "?" && arrayOfArrays[z+1].length === 1) {
            arrayOfArrays[z+1].push(" ");
        } else if (["ay", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(lastOne)) {
            arrayOfArrays[z].push(" ");

        }
        console.log(arrayOfArrays);
    }

    var k = 0;


    for (let t = 0; t < arrayOfArrays.length; t++) {




        if (arrayOfStringsTwo[k].match("A") || arrayOfStringsTwo[k].match("B") || arrayOfStringsTwo[k].match("C") || arrayOfStringsTwo[k].match("D") || arrayOfStringsTwo[k].match("E") || arrayOfStringsTwo[k].match("F") || arrayOfStringsTwo[k].match("G") || arrayOfStringsTwo[k].match("H") || arrayOfStringsTwo[k].match("I") || arrayOfStringsTwo[k].match("J") || arrayOfStringsTwo[k].match("K") || arrayOfStringsTwo[k].match("L") || arrayOfStringsTwo[k].match("M") || arrayOfStringsTwo[k].match("N") || arrayOfStringsTwo[k].match("O") || arrayOfStringsTwo[k].match("P") || arrayOfStringsTwo[k].match("Q") || arrayOfStringsTwo[k].match("R") || arrayOfStringsTwo[k].match("S") || arrayOfStringsTwo[k].match("T") || arrayOfStringsTwo[k].match("U") || arrayOfStringsTwo[k].match("V") || arrayOfStringsTwo[k].match("W") || arrayOfStringsTwo[k].match("Z") || arrayOfStringsTwo[k].match("Y") || arrayOfStringsTwo[k].match("X")) {

            var UpCa = arrayOfArrays[t][0].toUpperCase();
            arrayOfArrays[t].splice(0, 1, UpCa);

        }

        var k = k + 1;

    }

   console.log(arrayOfArrays);

    for (let v = 0; v<arrayOfArrays.length; v++) {
            arrayOfArrays[v].forEach(function(element) {
                $("p").append(element);
            });
    }
});

});