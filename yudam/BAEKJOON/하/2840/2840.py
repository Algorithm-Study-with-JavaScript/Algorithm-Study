import sys
input = sys.stdin.readline


def solution(n, record):
    wheel = ['?'] * n   # 바퀴의 상태
    is_available = dict()   # 해당 알파벳을 새로 쓸 수 있는지 확인하는 딕셔너리


    # 모든 알파벳에 대해 우선 True로 저장
    # ord(문자) = 아스키코드
    # chr(아스키코드) = 문자
    ord_a = ord('A')

    for i in range(26):
        is_available[chr(i + ord_a)] = True

    idx = 0 # 화살표가 가르키는 인덱스

    for rot, alpha in record:

        idx = (idx - int(rot)) % n
    
        # 같은 경우
        if wheel[idx] == alpha:
            continue
        # 배열에 저장되어있지 않은 다른 알파벳이 써있거나, 이미 알파벳을 다른 자리에 사용한 경우
        if wheel[idx] != '?' or not is_available[alpha]:
            return '!'
        wheel[idx] = alpha
        is_available[alpha] = False
                
    return ''.join(wheel[idx:]+wheel[:idx])

with open("input.txt", "r") as file:
    n, k = map(int, file.readline().split())
    record = [line.split() for line in file]
    
print(solution(n, record))