module.exports = function validateCpf (cpf) {
  function getVerificationDigit(value) {
    const rest = value % 11;
    return rest < 2 ? 0 : 11 - rest;
  }
  function sumDigits(first, second) {
    return first + second;
  }
  function multiplyDigits(factor) {
    return function (digit, index) {
      return Number(digit) * (factor - index);
    };
  }
  const cleanCpf = String(cpf).replace(/\D/g, "");
  if (cleanCpf.length == 11) {
    switch (cleanCpf) {
      case "           ":
      case "00000000000":
      case "11111111111":
      case "22222222222":
      case "33333333333":
      case "44444444444":
      case "55555555555":
      case "66666666666":
      case "77777777777":
      case "88888888888":
      case "99999999999":
        return false;
    }
    const brokenCpf = cleanCpf.match(/^(\d{9})(\d{2})$/);
    const withoutDigits = brokenCpf[1].split("");
    const digits = brokenCpf[2];
    let tempFirstDigit = withoutDigits
      .map(multiplyDigits(10))
      .reduce(sumDigits);
    const firstDigit = getVerificationDigit(tempFirstDigit);
    let tempSecondDigit = withoutDigits
      .concat(firstDigit)
      .map(multiplyDigits(11))
      .reduce(sumDigits);
    const secondDigit = getVerificationDigit(tempSecondDigit);
    return String(firstDigit) + secondDigit === digits;
  }
  return false;
}