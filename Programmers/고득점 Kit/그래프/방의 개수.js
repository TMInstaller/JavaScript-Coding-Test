function solution(arrows) {
  let answer = 0;

  // prettier-ignore
  const move = [
    [-1, 0], [-1, 1], [0, 1], [1, 1], 
    [1, 0], [1, -1], [0, -1], [-1, -1]
  ];

  let vertexVisited = new Map();
  let edgeVisited = new Map();

  let x = 0,
    y = 0;
  vertexVisited.set(`${x}_${y}`, true);

  for (let i = 0; i < arrows.length; i++) {
    for (let j = 0; j < 2; j++) {
      // To handle diagonal movements
      let nx = x + move[arrows[i]][0];
      let ny = y + move[arrows[i]][1];

      if (
        vertexVisited.has(`${nx}_${ny}`) &&
        !edgeVisited.has(`${x}_${y}_${nx}_${ny}`)
      ) {
        answer++;
      }

      vertexVisited.set(`${nx}_${ny}`, true);
      edgeVisited.set(`${x}_${y}_${nx}_${ny}`, true);
      edgeVisited.set(`${nx}_${ny}_${x}_${y}`, true);

      x = nx;
      y = ny;
    }
  }

  return answer;
}
