const expect = require('chai').expect;
const Glasses = require('../src/glasses');

const testdata = {
    input: 1, // 1L
    output: 4, // 4 glasses of water
    glasses: [[0]]
};
describe('glasses.js', function() {
    describe('getInputNum(k)', function() {
        it('should return the input number of glasses water', function() {
            const glasses = new Glasses(testdata.input);
            expect(glasses.getInputNum(testdata.input)).to.equal(testdata.output);
            expect(glasses.n).to.equal(testdata.output);
        });
    });
    describe('getWater(i, j)', function() {
        it('should return the amount of water for the specified glass', function() {
            const glasses = new Glasses(testdata.input);
            expect(glasses.getInputNum(testdata.input)).to.equal(testdata.output);
            let i = 0, j = 0;
            expect(glasses.getWater(i, j)).to.equal(testdata.glasses[i][j]);
        });
    });
});