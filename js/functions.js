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
