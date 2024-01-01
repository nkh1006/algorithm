/**
 * 10진수, 2진수, 8진수 그 어느 것으로 표현해도 대칭수가 되는 수중 10진수의 10 이상에서의 최솟값을 구해 보세요.
 */

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

function solution() {
  let num = 11;
  while (true) {
    if (
      num.toString() === num.toString().reverse() &&
      num.toString(8) === num.toString(8).reverse() &&
      num.toString(2) === num.toString(2).reverse()
    ) {
      console.log(num);
      break;
    }
    num += 2;
  }
}

solution();
