const { processInput, processOutput } = require('./src/input');
const Glasses = require('./src/glasses.js');

processInput((params) => {
    processOutput(Glasses.build(params));
});