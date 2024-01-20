/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = (startGene, endGene, bank) => {
  let bankSet = new Set(bank);
  let queue = [[startGene, 0]];
  let visited = new Set([startGene]);

  while (queue.length) {
    let [currendGene, mutations] = queue.shift();
    if (currendGene === endGene) return mutations;

    for (let i = 0; i < currendGene.length; i += 1) {
      for (let char of ["A", "C", "G", "T"]) {
        let mutatedGene = `${currendGene.substring(
          0,
          i
        )}${char}${currendGene.substring(i + 1)}`;
        if (!visited.has(mutatedGene) && bankSet.has(mutatedGene)) {
          visited.add(mutatedGene);
          queue.push([mutatedGene, mutations + 1]);
        }
      }
    }
  }
  return -1;
};
