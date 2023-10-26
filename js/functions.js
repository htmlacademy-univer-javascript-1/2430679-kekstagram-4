const isLessOrEqual = (string, maxLength) => string.length <= maxLength;

isLessOrEqual('проверяемая строка', 20);
isLessOrEqual('проверяемая строка', 18);
isLessOrEqual('проверяемая строка', 10);

const isPalindrom = (passedString) => {
  const string = passedString.replaceAll(' ','').toLowerCase();
  for (let i = 0; i < string.length / 2; i++){
    if (string.at(i) !== string.at(-i - 1)){
      return false;
    }
  }
  return true;
};

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

const extractNumber = (arg) => {
  const string = arg.toString();
  let result = '';
  for(let i = 0; i < string.length; i++){
    if(!Number.isNaN(parseInt(string[i], 10))){
      result += string[i];
    }
  }
  return parseInt(result, 10);
};

extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');
extractNumber(2023);
extractNumber(-1);
extractNumber(1.5);

const getMinutes = (time) => {
  const result = time.split(':');
  return parseInt(result[0], 10) * 60 + parseInt(result[1], 10);
};

const checkMeetingAccuracy = (startDay, endDay, startMeet, meetLength) => {
  const startMinutes = getMinutes(startDay);
  const endMinutes = getMinutes(endDay);
  const startMeetMinutes = getMinutes(startMeet);
  return startMeetMinutes >= startMinutes && startMeetMinutes + meetLength <= endMinutes;
};

checkMeetingAccuracy('08:00', '17:30', '14:00', 90);
checkMeetingAccuracy('8:0', '10:0', '8:0', 120);
checkMeetingAccuracy('08:00', '14:30', '14:00', 90);
checkMeetingAccuracy('14:00', '17:30', '08:0', 90);
checkMeetingAccuracy('8:00', '17:30', '08:00', 900);
