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

    let priorities = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
        A: 27,
        B: 28,
        C: 29,
        D: 30,
        E: 31,
        F: 32,
        G: 33,
        H: 34,
        I: 35,
        J: 36,
        K: 37,
        L: 38,
        M: 39,
        N: 40,
        O: 41,
        P: 42,
        Q: 43,
        R: 44,
        S: 45,
        T: 46,
        U: 47,
        V: 48,
        W: 49,
        X: 50,
        Y: 51,
        Z: 52
    }

    // inside while
    let s = 0;

    let total = 0;

    do {

        let firstComp = returnedData[s].slice(0, returnedData[s].length / 2)
        let secondComp = returnedData[s].slice(returnedData[s].length / 2)

        function getCommonItems(array1, array2) {
            var common = []; // Initialize array to contain common items

            for (var i = 0; i < array1.length; i++) {
                for (var j = 0; j < array2.length; j++) {
                    if (array1[i] == array2[j]) { // If item is present in both arrays
                        common.push(array1[i]); // Push to common array
                        // Return the common items
                        return common;
                    }
                }
            }
        }

        let commonItemList = getCommonItems(firstComp, secondComp);
        let output = Object.entries(priorities).map(entry => {
            if (entry[0] == commonItemList[0]){
                total = total + entry[1];
            }
            return entry;
        });

        s++
    } while (s < returnedData.length)

    console.log(total);

});