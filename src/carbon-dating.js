const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(arguments.length==0) return false;
  if(!Number.isNaN(sampleActivity)&&typeof sampleActivity === 'string')
   return Math.ceil((Math.log(Math.E)/Math.log(MODERN_ACTIVITY/+sampleActivity))/0.693);
  else
   return false;
  
}

module.exports = {
  dateSample
};
