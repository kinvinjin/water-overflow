const { processInput } = require('./src/input');
const Glasses = require('./src/glasses.js');

console.log('please input k, i, j:');
processInput((params) => {
    const [k, i, j] = params.map((n)=>parseInt(n));
    const glass = new Glasses(k);
    const result = glass.getWater(i, j);
    console.log(result);
});