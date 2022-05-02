const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(){
    this.LETTERS_OFFSET = 65;
    this.LETTERS_END = 26;
  }
  getSymCode(char){
    return char.charCodeAt(0) - this.LETTERS_OFFSET;
  }
  encrypt(str, key) {


    let newStr = str.toUpperCase();
    let newKey = key.toUpperCase();

    let resStr = '';

    let keyPosition = 0;

    for(let char of newStr){
      if(!char.match(/[A-Z]/i)){
        resStr += char;
        continue;
      }

      if(keyPosition>=newKey.length)
        keyPosition = 0;

      let sym = this.getSymCode(char)+this.getSymCode(newKey[keyPosition]);
      
      if(sym>=this.LETTERS_END) sym -= this.LETTERS_END;
      
      resStr += String.fromCharCode(sym+this.LETTERS_OFFSET);
      keyPosition++;
        
    }
    //console.log(resStr);
    return resStr;
  }
  decrypt(str, key) {
    let newStr = str.toUpperCase();
    let newKey = key.toUpperCase();

    let resStr = '';

    let keyPosition = 0;

    for(let char of newStr){
      if(!char.match(/[A-Z]/i)){
        resStr += char;
        continue;
      }

      if(keyPosition>=newKey.length)
        keyPosition = 0;

      let sym = this.getSymCode(char)-this.getSymCode(newKey[keyPosition]);
      
      if(sym<0) sym += this.LETTERS_END;
      
      resStr += String.fromCharCode(sym+this.LETTERS_OFFSET);
      keyPosition++;
        
    }
    //console.log(resStr);
    return resStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};
