function isLessOrEqual (string, maxLength){
  return string.length <= maxLength;
}
isLessOrEqual('проверяемая строка', 20);
isLessOrEqual('проверяемая строка', 18);
isLessOrEqual('проверяемая строка', 10);

function isPalindrom (passedString){
  const string = passedString.replaceAll(' ','').toLowerCase();
  let emptyString = '';
  for (let i = string.length - 1; i >= 0; i--){
    emptyString += string[i];
  }
  return string === emptyString;
}

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

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

extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');
extractNumber(2023);
extractNumber(-1);
extractNumber(1.5);
