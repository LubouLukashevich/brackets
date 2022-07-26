module.exports = function check(str, bracketsConfig) {
  var test = [];
  for (let j = 0; j < bracketsConfig.length; j++) {
    test[j] = bracketsConfig[j][0] + bracketsConfig[j][1];
  }
  var result = str;
  var flag = 1;
 while ((result.length !== 0) && (flag !== 0)) {
  flag = 0;
  for (let i = 0; i < test.length; i++) {
   let a = result.indexOf(test[i]);
   if (a !== -1) { result = result.slice(0, a) + result.slice(a+2);
  flag = 1; }
  }
 }
  return result.length === 0;
}

console.log(module.exports('|||||', [['|', '|']]));