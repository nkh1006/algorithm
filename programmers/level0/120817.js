function solution(numbers) {
  const sum = numbers.reduce((prev, current) => prev + current, 0);
  return sum / numbers.length;
}
