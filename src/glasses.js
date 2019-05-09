const { VOLUME } = require('./constants');

class Glasses {
    constructor(k) {
        this.n = this.getInputNum(k);
    }
    /**
     * Calculate how many glasses of water for the input water:
     * k (L) * 1000 / 250 ml
     * 
     * @param {Number} k water (L)
     * @return {Number} how many glasses of water.
     */
    getInputNum(k) {
        return k * 1000 / VOLUME;
    }
    /**
     * Calculate the amount of water in the glass with sepcified row and column number
     * 
     * @param {Number} k water (L)
     * @return {Number} the amount of water (ml).
     */
    getWater(i, j) {
        let result = this.calculate(i, j, this.n);
        return result * VOLUME;
    }
    /**
     * Use dynamic programming to calculate the result 
     * 
     * @param {Number} r row number
     * @param {Number} c column number
     * @param {Number} n the number of glass water as input
     * @return {Number} water in the glass.
     */
    calculate(r, c, n) {
        const rows = r + 2;
        const d = [...Array(rows)].map(()=>Array(rows).fill(0));
        
        d[0][0] = n;
        for (let i=0; i<=r; i++) {
            for (let j=0; j<=i; j++) {
                if (d[i][j] > 1) {
                    d[i+1][j] += (d[i][j] - 1) / 2;
                    d[i+1][j+1] += (d[i][j] - 1) / 2;
                }
            }
        }
        
        return d[r][c] > 1? 1 : d[r][c];
    }
}

module.exports = Glasses;
