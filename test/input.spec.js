const expect = require('chai').expect;
const { processInput, processOutput } = require('../src/input');

describe('input.js', function() {
    describe('processInput(callback)', function() {
        it('should not throw error', function() {
            expect(() => processInput()).to.not.throw();
            setTimeout(()=> {
                process.exit(0);
            }, 1000);
        });
    });
    describe('processOutput(result)', function() {
        it('should not throw error', function() {
            expect(() => processOutput()).to.not.throw();
        });
        it('should not throw error', function() {
            expect(() => processOutput(new Error())).to.not.throw();
        });
    });
});