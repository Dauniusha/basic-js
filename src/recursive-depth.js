const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        let temp = this.calculateDepth(arr[i]);
        if (depth < temp + 1)
          depth = temp + 1;
      }
    }
    return depth;
  }
};