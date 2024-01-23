const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const s = line.split(" ").map(Number);
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 4; j++) {
      const a = s.shift();
      sum += a;
    }
    if (sum === 3) console.log("A");
    else if (sum === 2) console.log("B");
    else if (sum === 1) console.log("C");
    else if (sum === 0) console.log("D");
    else if (sum === 4) console.log("E");
  }
});
