function solution(genres, plays) {
  let answer = [];
  let map = new Map();

  // 장르 별 재생 수 누적
  for (let i = 0; i < genres.length; i++) {
    if (map.has(genres[i])) {
      map.set(genres[i], map.get(genres[i]) + plays[i]);
    } else {
      map.set(genres[i], plays[i]);
    }
  }

  let thisGenreSongs = [];

  while (map.size > 0) {
    let max = [...map.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0]; // 가장 많이 재생된 장르

    // 가장 많이 재생된 장르와 같은 장르만 thisGenreSongs에 저장
    genres.filter((genre, index) => {
      if (genre === max) {
        thisGenreSongs.push(plays[index]);
      }
    });

    thisGenreSongs.sort((a, b) => b - a).splice(2); // 내림차순으로 정리하여 2개까지만 저장

    // 가장 먼저 재생된 장르 곡들의 재생 수가 같다면
    if (thisGenreSongs[0] === thisGenreSongs[1]) {
      plays.map((play, index) => {
        if (thisGenreSongs[0] === play) {
          answer.push(index);
        }
      });
      thisGenreSongs = [];
    } else {
      // 가장 많이 재생된 장르 곡들의 재생 수가 다르다면
      // 가장 많이 재생된 장르 중 가장 많이 재생된 곡의 고유번호를 answer에 저장(push) 후 해당 곡 제거(shift)
      while (thisGenreSongs.length > 0) {
        for (let i = 0; i < plays.length; i++) {
          if (plays[i] === thisGenreSongs[0]) {
            answer.push(i);
          }
        }
        thisGenreSongs.shift();
      }
    }
    map.delete(max);
  }
  return answer;
}
