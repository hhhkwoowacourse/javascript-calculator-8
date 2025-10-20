import { Console } from "@woowacourse/mission-utils";
import {
  getCustomSeparator,
  getExpression,
  executeExpression,
} from "./function.js";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");

    const separators = getCustomSeparator(input);
    const expressions = getExpression(input);
    const result = executeExpression(expressions, separators);

    Console.print(`결과 : ${result}`);
  }
}

export default App;
