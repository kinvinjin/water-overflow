const expect = require('chai').expect;
const { processInput } = require('../src/input');

describe('input.js', function() {
    describe('processInput(callback)', function() {
        it('should not throw error', function() {
            expect(() => processInput()).to.not.throw();
            setTimeout(()=> {
                process.exit(0);
            }, 1000);
        });
    });
});