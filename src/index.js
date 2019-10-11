module.exports = function multiply(first, second) {
  // перемножаем числа и возвращаем результат в виде строки
  let result = BigInt(first) * BigInt(second);
  return result.toString();
}
