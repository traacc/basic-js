const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //let resArr = [];
  let fullStr = str;
  let repTime = 1;
  let addRepTime = 1;
  let addStr = '';

  let sep = '';
  let addSep = '';
  let addition = '';

  if(options.hasOwnProperty('repeatTimes'))
    repTime = options.repeatTimes;
  if(options.hasOwnProperty('additionRepeatTimes'))
    addRepTime = options.additionRepeatTimes;

  if(options.hasOwnProperty('separator'))
    sep = options.separator;
  if(options.hasOwnProperty('additionSeparator'))
    addSep = options.additionSeparator;
  if(options.hasOwnProperty('addition'))
    addition = options.addition;

  for(let i=0;i<addRepTime;i++){
    addStr += addition+addSep;
  }

  for(let i=0;i<repTime;i++){
    fullStr += addStr + sep;
  }

  return fullStr;
}

module.exports = {
  repeater
};
