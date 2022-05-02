const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numStr = n.toString();
  let nums = [];
  for(let i=0;i<numStr.length;i++){
    let numA = numStr.split('');
    numA.splice(i,1);
    nums.push(+numA.join(''));
  }
  console.log(nums);
  return Math.max(...nums);
}

module.exports = {
  deleteDigit
};
