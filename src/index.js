module.exports = function check(str, bracketsConfig) {
  bracketsList = bracketsConfig.map((item) => item.join(""));
  let i = 0;
  while (i < bracketsList.length) {
    if (str.includes(bracketsList[i])) {
      while(str.includes(bracketsList[i])) {
        str = str.replace(bracketsList[i], '');
      }
      i = 0;
    } else {
      i++;
    }    
  }
  return str.length === 0 ? true : false;
}
