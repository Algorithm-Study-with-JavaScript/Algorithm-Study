// 나의 풀이: 정규표현식 사용해서 split 한후 reduce로 더함, filter는 빈문자열을 지우기위함
const solution = (my_string) => my_string.split(/[a-zA-Z]/g).filter((x)=>x).reduce((curr,acc)=>parseInt(acc)+curr,0);

/* 다른 사람 풀이: 정규표현식 사용 - \d+는 '하나 혹은 그 이상 연결된 숫자 (역슬래시는 특수문자)
 split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
-> split(문자) 했을 땐 문자가 지워지는데, split(숫자)헸을 땐 왜 문자가 지워지는지??
 -> separator가 포획 괄호 ()를 포함하는 정규표현식일 경우, 포획된 결과도 배열에 포함됩니다.
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split
 var myString = "Hello 1 word. Sentence number 2.";
var splits = myString.split(/(\d)/);

console.log(splits);
    [ "Hello ", "1", " word. Sentence number ", "2", "." ]
 */
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
