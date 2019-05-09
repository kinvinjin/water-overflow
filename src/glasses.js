const { VOLUME } = require('./constants');

class Glasses {
    constructor(k) {
        this.n = this.getInputNum(k);
    }
    getInputNum(k) {
        return k * 1000 / VOLUME;
    }
    getWater(i, j) {
        return 0;
    }
}

module.exports = Glasses;