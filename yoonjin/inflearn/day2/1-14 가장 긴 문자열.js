function solution(s) {
  console.log(s.sort((a, b) => b.length - a.length)[0]);
}
solution(['teacher', 'time', 'student', 'beautiful', 'good']);
