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

        let fields = returnedData[s].split(',')
        let fields_1 = fields[0].split('-')
        let fields_2 = fields[1].split('-')

        console.log(s)

        let check_1 = (fields_1[0] > fields_2[0]) && (fields_1[1] < fields_2[1])
        let check_2 = (fields_2[0] > fields_1[0]) && (fields_2[1] < fields_1[1])
        if (check_1) {
            console.log(fields_1[0], fields_2[0], (fields_1[0] <= fields_2[0]), '   ', fields_1[1], fields_2[1], (fields_1[1] >= fields_2[1]))
            total++;
        } else if (check_2) {
            console.log(fields_2[0], fields_1[0], (fields_2[0] <= fields_1[0]), '   ', fields_2[1], fields_1[1], (fields_2[1] >= fields_1[1]))
          // total++;
        }
        // if (check_1 || check_2) {
        //     total++;
        // } 299

        s++;

    } while (s < returnedData.length)

    console.log(total);

});