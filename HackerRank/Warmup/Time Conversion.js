function timeConversion(s) {
  // Write your code here
  let time = parseInt(s.slice(0, 2));
  if (s.includes("P")) {
    if (time === 12) {
      time = time;
    } else if (time < 12) {
      time += 12;
    }
  } else if (s.includes("A")) {
    time = time === 12 ? 0 : time;
  }
  time = time >= 10 ? `${time}` : `0${time}`;

  return `${time}:${s.slice(3, s.length - 2)}`;
}
