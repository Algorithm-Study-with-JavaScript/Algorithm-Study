function solution(board, moves) {
  const array = board.map((arr, index) => {
    console.log(arr);

    arr.map((element, index2) => {
      console.log(index, element);
      return element;
    });
  });
  // console.log(array);
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
