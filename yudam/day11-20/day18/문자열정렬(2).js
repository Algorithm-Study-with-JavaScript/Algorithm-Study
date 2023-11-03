function solution(my_string) {
  return [...my_string]
    .map((e) => {
      return e.toLowerCase();
    })
    .sort()
    .join("");
}
