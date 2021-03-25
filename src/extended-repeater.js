const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let temp = '', mainTemp = '';
  if (options.addition !== undefined) {
      if (options.additionRepeatTimes != undefined) {
          if (options.additionSeparator != undefined)
              temp = (options.addition + '') + (options.additionSeparator + '');
          else
              if (options.additionRepeatTimes == 1)
                  temp = '';
              else
                  temp = options.addition + '|';
          let miniTemp = temp;
          for (let i = 0; i < options.additionRepeatTimes - 2; i++)
              temp += miniTemp;
          if (options.additionRepeatTimes == 1)
              temp = '';
          temp += (options.addition + '');
      }
      else
          temp += (options.addition + '');
  }
  if (options.repeatTimes != undefined) {
      if (options.separator != undefined) {
          mainTemp = str + temp + options.separator;
      }
      else
          if (options.repeatTimes == 1)
              mainTemp = '';
          else
              mainTemp = str + temp + '+';
      let miniTemp = mainTemp;
      for (let i = 0; i < options.repeatTimes - 2; i++)
          mainTemp += miniTemp;
      if (options.repeatTimes == 1)
          mainTemp = '';
      mainTemp += str + temp;
  }
  else
      mainTemp = str + temp;
  return mainTemp;
};
  