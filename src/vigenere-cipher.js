const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined)
        throw Error;
    message = message.split('');
    let j = 0;
    for (let i = 0; i < message.length; i++) {
        if (/[A-Za-z]/.test(message[i])) {
            let letter = message[i].toUpperCase().charCodeAt(0);
            let temp = key[j].toUpperCase().charCodeAt(0);
            message[i] = String.fromCharCode(65 + (letter + temp - 130) % 26);
            j++;
            if (j == key.length)
                j = 0;
        }
    }
    if(this.value == false)
      return message.reverse().join('');
    else
    return message.join('');
  }    
  decrypt(message, key) {
    if (message == undefined || key == undefined)
        throw Error;
    message = message.split('');
    let j = 0;
    for (let i = 0; i < message.length; i++) {
        if (/[A-Z]/.test(message[i])) {
            let letter = message[i].charCodeAt(0) - 65;
            let temp = key[j].toUpperCase().charCodeAt(0) - 65;
            message[i] = String.fromCharCode(65 + (26 + letter - temp) % 26);
            j++;
            if (j == key.length)
                j = 0;
        }
    }
    if(this.value == false)
      return message.reverse().join('');
    else
    return message.join('');
  }
}

module.exports = VigenereCipheringMachine;
