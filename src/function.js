const pattern = /\/\/(.*)\\n/;

function hasCustomSeparator(input) {
  // 커스텀 구분자를 선언하는 데 이용되는 패턴 선언
  return pattern.test(input);
}

export function getCustomSeparator(input) {
  let separators = [":", ","];
  if (hasCustomSeparator(input)) {
    const customSeparators = input.match(pattern)[1];

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
  console.log(expressions);
  console.log(separators);
  for (const char of expressions) {
    if (separators.includes(char)) {
      result += Number(stack);
      stack = "";
    } else stack += char;
  }
  result += Number(stack);

  return result;
}
