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
  let sum = n;
  let tmp = 0;
  while(sum<10){
    
    while(n>0){
      
      tmp = n%10
      sum += tmp;
      n = Math.floor(n /= 10);
      
    }
  }
  console.log(sum);
  return sum;
}
getSumOfDigits(91)
module.exports = {
  getSumOfDigits
};
