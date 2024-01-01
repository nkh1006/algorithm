function solution() {
  const arr = Array.from(new Array(100)).fill(false);
  for (let i = 2; i < 101; i++) {
    for (let j = i - 1; j < 100; j += i) {
      arr[j] = arr[j] === false ? true : false;
    }
  }
  console.log(
    arr
      .map((_, i) => {
        if (_ === false) return i + 1;
      })
      .filter((item) => item !== undefined)
  );
}

solution();
