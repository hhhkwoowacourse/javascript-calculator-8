const pattern = /\/\/(.*)\\n/;

function hasCustomSeparator(input) {
  // 커스텀 구분자를 선언하는 데 이용되는 패턴 선언
  return pattern.test(input);
}

export function getCustomSeparator(input) {
  let separators = [":", ","];
  if (hasCustomSeparator(input)) {
    const customSeparators = input.match(pattern)[1];
    isLegelSeparator(customSeparators);
    for (const separator of customSeparators) {
      separators.push(separator);
    }
  }
  return separators;
}

export function getExpression(input) {
  if (hasCustomSeparator(input)) {
    return input.replace(pattern, "");
  } else {
    return input;
  }
}

export function executeExpression(expressions, separators) {
  let stack = "";
  let result = 0;

  for (const char of expressions) {
    if (separators.includes(char)) {
      number = Number(stack);
      isLegalNumber(number);
      result += number;
      stack = "";
    } else stack += char;
  }
  result += Number(stack);

  return result;
}

function isLegalNumber(number) {
  if (number < 0) throw new Error("[ERROR] 양수를 입력해주세요.");
  if (Number.isNaN(number))
    throw new Error("[ERROR] 올바른 숫자를 입력해주세요.");
}

function isLegelSeparator(separators) {
  if (separators.length < 1)
    throw new Error("[ERROR] 구분자를 올바르게 입력해주세요.");
  if (separators.test(/.*\d.*/))
    throw new Error("[ERROR] 숫자를 구분자로 이용할 수 없어요.");
}
