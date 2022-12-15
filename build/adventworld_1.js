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

    do {

        // Elf Object
        const result = [];
        do {
            result.push(returnedData[s]);
            s++;
        } while (returnedData[s] != '');

        const total = result.reduce((r, c) => r + parseFloat(c), 0);
        elves.push(total);

        delete result

        s++;

    } while (s < returnedData.length)

    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }

        return maxIndex;
    }

    console.log(elves[indexOfMax(elves)]);
    let totalCal = elves[indexOfMax(elves)];
    elves.splice(indexOfMax(elves), 1);
    console.log(elves[indexOfMax(elves)]);
    totalCal = totalCal + elves[indexOfMax(elves)];
    elves.splice(indexOfMax(elves), 1);
    console.log(elves[indexOfMax(elves)]);
    totalCal = totalCal + elves[indexOfMax(elves)];
    console.log(totalCal);

});