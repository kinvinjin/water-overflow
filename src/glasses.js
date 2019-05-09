const { VOLUME } = require('./constants');

class Glasses {
    constructor(k) {
        this.n = this.getInputNum(k);
    }
    /**
     * Calculate how many glasses of water poured into:
     * k (L) * 1000 / 250 ml
     * 
     * @param {Number} k the amount of water poured into (L)
     * @return {Number} the number of glasses of water poured into
     */
    getInputNum(k) {
        return k * 1000 / VOLUME;
    }
    /**
     * Calculate the amount of water in the glass by sepcified row and column number
     * 
     * @param {Number} k water (L)
     * @return {Number} the amount of water (ml)
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
     * @param {Number} n the number of glasses of water poured into.
     * @return {Number} a proportion of water in a glass.
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
    /**
     * Static method for public use
     * 
     * @param {Number} k the amount of water poured into (Litre)
     * @param {Number} i row number of glass
     * @param {Number} j column number of glass
     * @return {Number} the amount of water in the glass (ml).
     */
    static build(params) {
        const [k, i, j] = params.map((n) => parseFloat(n));
        
        if (params.length !== 3 || isNaN(k) || isNaN(i) || isNaN(j) ||
                k < 0 || i < 0 || j < 0) {
            return new Error();
        }
        
        const glasses = new Glasses(k);
        return glasses.getWater(i, j);
    }
}

module.exports = Glasses;
