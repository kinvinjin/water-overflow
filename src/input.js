const readline = require('readline');


const parse = (token) => {
    return token.split(/\s+/);
};

/**
 * Read data by line and bind processing function
 * 
 * @param {Function} callback
 */
exports.processInput = (callback) => {
    const reader = readline.createInterface({input: process.stdin});
    
    reader.on('line', function(line) {
        const token = line.trim();
        if (token === 'exit' ||
                token === 'EXIT') {
            process.exit(0);
        }
        callback(parse(token));
    });
};
