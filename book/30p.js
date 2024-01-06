function solution(m, n, current) {
  if (current >= n) {
    return 0;
  } else if (current < m) {
    return 1 + solution(m, n, current * 2);
  } else {
    return 1 + solution(m, n, current + m);
  }
}

solution(3, 20, 1);
solution(5, 10, 1);
