// 내 풀이
function fac(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solution(balls, share) {
  return Math.round(fac(balls) / (fac(balls - share) * fac(share)));
}
//fac은 팩토리얼 계산 함수
// 반복문을 돌면서 2부터 해당 수만큼 곱 진행 후 해당 값 리턴
// 서로 다른 n개 중 m개를 뽑는 공식에 대입
// 계산 오류를 잡기 위해 Math.round() 사용

// 다른 사람 풀이
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution(balls, share) {
  return Math.round(
    팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share)
  );
}
// 재귀함수를 통해서 팩토리얼 계산 함수선언
// num이 0이면 1을 리턴하고 나머지의 경우 num*팩토리얼(num-1) 예를 들어 4*3! -> 4*3*2! -> 4*3*2*1! -> 4*3*2*1*0! -> 4*3*2*1*1(최종리턴)
// 서로 다른 n개 중 m개를 뽑는 공식에 대입 (식 정리한 경우)
// 계산 오류를 잡기 위해 Math.round() 사용
