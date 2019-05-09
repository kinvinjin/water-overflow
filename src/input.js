const readline = require('readline');

/**
 * Read data by line and bind processing function
 * 
 * @param {Function} callback
 */
exports.processInput = (callback) => {
    const reader = readline.createInterface({input: process.stdin});
    
    console.log('Please input water (litres) poured into, the row and column of the glass.');
    console.log('For example: 1 0 0');
    
    reader.on('line', function(line) {
        const params = line.trim().split(/\s+/);
        callback(params);
    });
};

exports.processOutput = (result) => {
    if (result instanceof Error) {
        console.log('cannot evaluate the input.')
    } else {
        console.log(`There is ${result}ml water in the glass.`);
    }
};