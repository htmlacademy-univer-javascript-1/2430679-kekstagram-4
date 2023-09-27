function isLessOrEqual (string, maxLength){
  return string.length <= maxLength;
}

console.log(isLessOrEqual('проверяемая строка', 20));
console.log(isLessOrEqual('проверяемая строка', 18));
console.log(isLessOrEqual('проверяемая строка', 10));

function isPalindrom (passedString){
  const string = passedString.replaceAll(' ','').toLowerCase();
  let emptyString = '';
  for (let i = string.length - 1; i >= 0; i--){
    emptyString += string[i];
  }
  return string === emptyString;
}

console.log(isPalindrom('топот'));
console.log(isPalindrom('ДовОд'));
console.log(isPalindrom('Кекс'));
console.log(isPalindrom('Лёша на полке клопа нашёл '));

function extractNumber (arg){
  const string = arg.toString();
  let result = '';
  for(let i = 0; i < string.length; i++){
    if(!Number.isNaN(parseInt(string[i], 10))){
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));
console.log(extractNumber(2023));
console.log(extractNumber(-1));
console.log(extractNumber(1.5));
