function solution(score) {
  const averageObject = score.map((e, index) => {
    const [eng, math] = e;
    const average = (eng + math) / 2;

    return { index, average };
  });

  console.log(averageObject);

  const array = Array.from([...averageObject]);

  let rank = 1; // Initialize rank
  array.sort((a, b) => {
    return b.average - a.average;
  });
  console.log(array);

  array.forEach((e, i) => {
    e.rank = rank;
    if (i >= 1 && e.average === array[i - 1].average) {
      e.rank = array[i - 1].rank;
    }
    rank++;
  });

  console.log(array);

  array.sort((a, b) => a.index - b.index);
  console.log(array);
  return array.map((e) => {
    return e.rank;
  });
}

function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  console.log(avg);
  let sorted = avg.slice().sort((a, b) => b - a);
  console.log(sorted);

  console.log(avg.map((v) => sorted.indexOf(v) + 1));

  return avg.map((v) => sorted.indexOf(v) + 1);
}
