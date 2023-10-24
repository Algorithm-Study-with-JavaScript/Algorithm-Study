const solution = (emergency) => {
  const sortedEmergency = emergency.slice().sort((a, b) => b - a);

  //emergency 배열을 순회하면서, sortedEmergency에서의 인덱스를 찾기
  const result = emergency.map((value) => sortedEmergency.indexOf(value) + 1);

  return result;
};

function solution(emergency) {
  let sort = [...emergency].sort((a, b) => b - a);
  return emergency.map((k) => {
    const queue = sort.findIndex((v) => v === k);

    return queue + 1;
  });
}
/*
  k에 해당하는 sort 인덱스를 찾아서 배열은 0부터 시작이기 때문에 
  + 1 해준 값을 리턴
*/
