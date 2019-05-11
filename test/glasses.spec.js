const expect = require('chai').expect;
const { MAX } = require('../src/constants');
const Glasses = require('../src/glasses');

const testdata = {
    inputL: 1, // 1L
    inputG: 4, // 4 glasses of water
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
            const glasses = new Glasses(testdata.inputL);
            expect(glasses.getInputNum(testdata.inputL)).to.equal(testdata.inputG);
            expect(glasses.n).to.equal(testdata.inputG);
        });
    });
    describe('calculate(r, c, n)', function() {
        it('should return the number of glass water for the glass with specific row and column', function() {
            const glasses = new Glasses(testdata.inputL);
            expect(glasses.getInputNum(testdata.inputL)).to.equal(testdata.inputG);
            testdata.glasses.forEach((item)=> {
                expect(glasses.calculate(item.i, item.j, testdata.inputG)).to.equal(item.result);
            });
        });
    });
    describe('getWater(i, j)', function() {
        it('should return the amount of water (ml) for the specified glass', function() {
            const glasses = new Glasses(testdata.inputL);
            expect(glasses.getInputNum(testdata.inputL)).to.equal(testdata.inputG);
            expect(glasses.getWater(testdata.glasses[0].i, testdata.glasses[0].j)).to.equal(testdata.glasses[0].water);
        });
    });
    describe('build(k, i, j)', function() {
        it('should return the amount of water (ml) for the specified glass', function() {
            expect(Glasses.build([testdata.inputL, testdata.glasses[0].i, testdata.glasses[0].j])).to.equal(testdata.glasses[0].water);
        });
        it('should return the amount of water (ml) for the specified glass', function() {
            expect(Glasses.build([0, 0, 0])).to.equal(0);
        });
        it('should return the amount of water (ml) for the specified glass', function() {
            this.timeout(10000);
            expect(Glasses.build([MAX, MAX, MAX])).to.equal(0);
        });
        it('should return error if params are not 3', function() {
            expect(Glasses.build([testdata.inputL, testdata.glasses[0].i])).to.be.an('error');
        });
        it('should return error if params are invalid', function() {
            expect(Glasses.build([testdata.inputL, testdata.glasses[0].i, 'a'])).to.be.an('error');
        });
        it('should return error if params are invalid', function() {
            expect(Glasses.build([-1, testdata.glasses[0].i, testdata.glasses[0].j])).to.be.an('error');
        });
        it('should return error if params are invalid', function() {
            expect(Glasses.build([1.1, testdata.glasses[0].i, testdata.glasses[0].j])).to.be.an('error');
        });
        it('should return error if params are invalid', function() {
            expect(Glasses.build([testdata.inputL, testdata.glasses[0].i, -1])).to.be.an('error');
        });
        it('should return error if params are invalid', function() {
            expect(Glasses.build([testdata.inputL, 1.1, testdata.glasses[0].j])).to.be.an('error');
        });
        it('should return error if params are invalid', function() {
            expect(Glasses.build([testdata.inputL, testdata.glasses[0].i, 1.1])).to.be.an('error');
        });
        it('should return error if k is greater than max limit', function() {
            expect(Glasses.build([MAX+1, testdata.glasses[0].i, testdata.glasses[0].j])).to.be.an('error');
        });
        it('should return error if i is greater than max limit', function() {
            expect(Glasses.build([testdata.inputL, MAX+1, testdata.glasses[0].j])).to.be.an('error');
        });
        it('should return error if j is greater than max limit', function() {
            expect(Glasses.build([testdata.inputL, testdata.glasses[0].i, MAX+1])).to.be.an('error');
        });
    });
});