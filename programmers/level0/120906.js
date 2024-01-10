function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((prev, current) => Number(prev) + Number(current), 0);
}
