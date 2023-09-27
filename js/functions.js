function isLessOrEqual (string, maxLength){
  return (string.length <= maxLength);
}
console.log(isLessOrEqual('проверяемая строка', 20));
console.log(isLessOrEqual('проверяемая строка', 18));
console.log(isLessOrEqual('проверяемая строка', 10));
