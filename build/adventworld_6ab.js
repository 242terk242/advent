// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

// Read the file and print its contents.

var fs = require('fs'), filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {

    if (err) throw err;

    // data consumption
    //let returnedData = data.split(/\r?\n/);

    let s = 0;
    let fourCheck;
    let dataCheck;



    function getCommonItems(array1, array2) {
        let counter = 0;
        var common = []; // Initialize array to contain common items
        if (array1 && array2) {
            for (var i = 0; i < array1.length; i++) {
                for (var j = 0; j < array2.length; j++) {

                    if (array1[i] == array2[j]) {
                        counter++;
                        // If item is present in both arrays
                        //common.push(array1[i]); // Push to common array
                        // Return the common items
                        // return true;
                    }
                }
            }
        }
        return counter === 1;

    }

    //console.log(data);

    do {

        fourCheck = data.slice(s, s + 14);

        let check = 0;
        for (var t = 0; t < fourCheck.length; t++) {
            if (getCommonItems(fourCheck, fourCheck[t])) {
                // console.log('here', s);
                check++;
            }
        }
        if (check === 14) {
           // if (fourCheck === 'crjs') {
                console.log('here', s, fourCheck);
           // }
        }

        s++;
        fourCheck = '';


        //} while (s < 10)
    } while (s < data.length)

});