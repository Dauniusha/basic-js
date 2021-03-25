const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = [];
  if (!Array.isArray(members))
      return false;
  members = members.filter(function (item, index) { if (typeof (item) == 'string') return true; });
  for (let i = 0; i < members.length; i++)
      for (let j = 0; j < members[i].length; j++)
          if (members[i][j] == ' ')
              continue;
          else {
              str.push(members[i][j].toUpperCase());
              break;
          }
  return str.sort().join('');
};

