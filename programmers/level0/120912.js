function solution(array) {
  let cnt = 0;
  const arr = array.join("").split("");
  arr.forEach((item) => (Number(item) === 7 ? (cnt += 1) : (cnt += 0)));
  return cnt;
}
