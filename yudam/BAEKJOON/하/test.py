import sys

input = sys.stdin.readline


def solution(n, record):
    wheel = ["?"] * n
    is_available = dict()
    for i in range(26):
        is_available[chr(ord("A") + i)] = True

    idx = 0
    for count, alpha in record:
        idx = (idx - int(count)) % n
        if (wheel[idx] == alpha):
            continue
        if (wheel[idx] != "?" or not is_available[alpha]):
            return "!"
        is_available[alpha] = False
        wheel[idx]=alpha

    return "".join(wheel[idx:] + wheel[:idx]);


with open("input.txt", "r") as file:
    n, k = map(int, file.readline().split())
    record = [line.split() for line in file]

print(solution(n, record))