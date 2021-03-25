const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      this.chain.push(value);
      return this;
  },
  removeLink(position) {
      if (position < 1 || position >= this.chain.length) {
          this.chain = [];
          throw new Error();
      }
      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      let temp = '';
      for (let i = 0; i < this.chain.length; i++) {
          temp += '( ' + this.chain[i] +' )~~';
      }
      this.chain = [];
      temp = temp.slice(0, temp.length - 2);
      return temp;
  }
};

module.exports = chainMaker;
