const solution = (spell, dic) => (dic.some((word) => spell.sort().join("") === [...word].sort().join("")) ? 1 : 2);

// 다른 사람 풀이
function solution(spell, dic) {
  return dic
    .map((e1) => {
      if (e1.length != spell.length) {
        return false;
      }
      let copySpell = Array.from(spell);
      let dics = e1.split("");
      for (let i = 0; i < dics.length; i++) {
        if (copySpell.includes(dics[i])) {
          copySpell.splice(copySpell.indexOf(dics[i]), 1);
        } else {
          return false;
        }
      }
      if (copySpell.length == 0) {
        return true;
      }
      return false;
    })
    .filter((el) => el).length > 0
    ? 1
    : 2;
}
/*
1. 애초에 요소가 spell의 길이랑 다르면 false를 반환.
2. 복사된 spell을 만들고 사전을 문자열로 만듬.
3. 문자열 사전의 길이만큼 순회하면서 만약 복사된 spell에 사전의 i 요소가 포함되어있다면 복사된 spell에서 사전의 i 요소를 없앰.
4. 만약 복사된 spell에 사전의 i 요소가 없다면 false를 반환.
5. 순회를 마치면 복사된 배열의 길이를 확인해서 0이라면 spell을 모두 사용해서 단어를 만들었기때문에 true를 반환.
6. 마지막으로 filter로 true인 요소들을 걸러내고 해당 배열의 길이가 0보다 크면 1 아니면 2를 반환.
근데 어차피 copySpell.length == 0로 확인하기 때문에 else {return false;}는 필요없지 않나..?
 */
