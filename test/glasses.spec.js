const expect = require('chai').expect;
const Glasses = require('../src/glasses');

const testdata = {
    input: 1, // 1L
    output: 4, // 4 glasses of water
    glasses: [{
      i: 0,
      j: 0,
      result: 1,
      water: 250
    }, {
      i: 1,
      j: 0,
      result: 1,
      water: 250
    }, {
      i: 1,
      j: 1,
      result: 1,
      water: 250
    }, {
      i: 2,
      j: 0,
      result: 0.25,
      water: 62.5
    }, {
      i: 2,
      j: 1,
      result: 0.5,
      water: 125
    }, {
      i: 2,
      j: 2,
      result: 0.25,
      water: 62.5
    }]
};
describe('glasses.js', function() {
    describe('getInputNum(k)', function() {
        it('should return the input number of glasses water', function() {
            const glasses = new Glasses(testdata.input);
            expect(glasses.getInputNum(testdata.input)).to.equal(testdata.output);
            expect(glasses.n).to.equal(testdata.output);
        });
    });
    describe('calculate(r, c, n)', function() {
        it('should return the number of glass water for the glass with specific row and column', function() {
            const glasses = new Glasses(testdata.input);
            expect(glasses.getInputNum(testdata.input)).to.equal(testdata.output);
            testdata.glasses.forEach((item)=> {
                expect(glasses.calculate(item.i, item.j, testdata.output)).to.equal(item.result);
            });
        });
    });
    describe('getWater(i, j)', function() {
        it('should return the amount of water (ml) for the specified glass', function() {
            const glasses = new Glasses(testdata.input);
            expect(glasses.getInputNum(testdata.input)).to.equal(testdata.output);
            expect(glasses.getWater(testdata.glasses[0].i, testdata.glasses[0].j)).to.equal(testdata.glasses[0].water);
        });
    });
});