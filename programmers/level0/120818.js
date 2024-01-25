function solution(price) {
  return price > 500000
    ? Math.floor(price * 0.8)
    : price > 300000
    ? Math.floor(price * 0.9)
    : Math.floor(price * 0.95);
}
