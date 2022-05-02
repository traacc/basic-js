const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nn = n;
  let sum = n;
  let tmp = 0;
  /*while(sum>10){
    tmp = nn%10
    sum += tmp;
    if(nn<1) break;
    nn = Math.floor(nn /= 10);
  }*/
  console.log(sum);
  return sum;
}
getSumOfDigits(91)
module.exports = {
  getSumOfDigits
};
