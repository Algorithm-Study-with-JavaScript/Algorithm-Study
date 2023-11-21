function solution(babbling) {
  let count = 0;
  babbling.forEach((e) => {
    let copyString = e.slice();
    let i = 0;
    while (i <= 5) {
      if (copyString === "") {
        count++;
        break;
      }
      copyString = copyString.replaceAll(/^aya|^ye|^woo|^ma/g, "");

      i++;
    }
  });
  return count;
}
