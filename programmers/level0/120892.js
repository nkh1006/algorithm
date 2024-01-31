function solution(cipher, code) {
  let answer = [];
  for (let i = 1; i < cipher.length; i++) {
    if (i % code === 0) answer.push(cipher[i]);
  }
  return answer.join("");
}
