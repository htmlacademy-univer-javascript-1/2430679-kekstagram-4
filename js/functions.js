function isLessOrEqual (string, maxLength){
  return string.length <= maxLength;
}

function isPalindrom (passedString){
  const string = passedString.replaceAll(' ','').toLowerCase();
  let emptyString = '';
  for (let i = string.length - 1; i >= 0; i--){
    emptyString += string[i];
  }
  return string === emptyString;
}

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
