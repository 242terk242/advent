// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

// Read the file and print its contents.

var fs = require('fs'), filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {

    if (err) throw err;
    // console.log('OK: ' + filename);

    // data consumption
    let returnedData = data.split(/\r?\n/);

    // elf problem
    let elves = [];

    // inside while
    let s = 0;

    let total = 0;

    do {

        let shapeScore = 0;
        let roundScore = 0;

        switch (returnedData[s].charAt(0)) {

            case 'A':
                //A X   Rock        Rock
                if (returnedData[s].charAt(2) === 'X') {
                    shapeScore = 1;
                    roundScore = 3;
                }

                //A Y   Rock        Paper
                if (returnedData[s].charAt(2) === 'Y') {
                    shapeScore = 2;
                    roundScore = 6;
                }

                //A Z   Rock        Scissors
                if (returnedData[s].charAt(2) === 'Z') {
                    shapeScore = 3;
                    roundScore = 0;
                }
                break;

            
            case 'B' :
                
            //B X   Paper       Rock
             if (returnedData[s].charAt(2) === 'X') {
                shapeScore = 1;
                roundScore = 0;
            }

            //B Y   Paper       Paper
            if (returnedData[s].charAt(2) === 'Y') {
                shapeScore = 2;
                roundScore = 3;
            }

            //B Z   Paper       Scissors
            if (returnedData[s].charAt(2) === 'Z') {
                shapeScore = 3;
                roundScore = 6;
            }
            break;
            
            case 'C' :
                
             //C X   Scissors    Rock
             if (returnedData[s].charAt(2) === 'X') {
                shapeScore = 1;
                roundScore = 6;
            }

           //C Y   Scissors    Paper
            if (returnedData[s].charAt(2) === 'Y') {
                shapeScore = 2;
                roundScore = 0;
            }

            //C Z   Scissors    Scissors
            if (returnedData[s].charAt(2) === 'Z') {
                shapeScore = 3;
                roundScore = 3;
            }
            break;

            default:

        }

        console.log('total   ', total)
        console.log('shape   ', shapeScore)
        console.log('round   ', roundScore)
        total = total + shapeScore + roundScore;

        s++
    } while (s < returnedData.length)

    console.log(total)

});