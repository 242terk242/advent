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

    // 
    let coulumnString = "NWFRZSMD,SGQPW,CJNFQVRW,LDGCPZF,SPT,LRWFDH,CDNZ,QJSVFRNW,VWZGSMR"
    let coulumnArray = coulumnString.split(',')


    let t = 0
    let moveArrays = []
    do {

        let moveArray = returnedData[t].split(' ')
        moveArray.splice(4, 1)
        moveArray.splice(2, 1)
        moveArray.splice(0, 1)
        moveArrays.push(moveArray)

        t++;

    } while (t < returnedData.length)


    let s = 0;
    let fromColumn;
    let moveContent;

    do {

        //collect
        fromColumn = coulumnArray[moveArrays[s][1] - 1]
        moveContent = fromColumn.substring(0, moveArrays[s][0]);
        coulumnArray[moveArrays[s][1] - 1] = coulumnArray[moveArrays[s][1] - 1].substring(moveArrays[s][0], fromColumn.length)

      
            coulumnArray[moveArrays[s][2] - 1] = moveContent + coulumnArray[moveArrays[s][2] - 1]
//console.log(coulumnArray[moveArrays[s][1] - 1], coulumnArray[moveArrays[s][2] - 1])
        s++;

   } while (s < moveArrays.length)
//} while (s < 6)
    for (let i = 0; i < coulumnArray.length; i++) {
       console.log(coulumnArray[i].charAt(0));
    }

});