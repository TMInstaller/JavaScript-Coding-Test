function solution(picture, k) {
  const expandedPicture = [];

  // 주어진 picture 배열의 각 문자열을 k배로 늘립니다.
  for (let i = 0; i < picture.length; i++) {
    const originalRow = picture[i];
    let expandedRow = "";

    // 각 문자열의 모든 문자를 k번 반복하여 새로운 문자열을 생성합니다.
    for (let j = 0; j < originalRow.length; j++) {
      const originalPixel = originalRow[j];
      expandedRow += originalPixel.repeat(k);
    }

    // k배로 늘린 문자열을 배열에 추가합니다.
    for (let j = 0; j < k; j++) {
      expandedPicture.push(expandedRow);
    }
  }

  return expandedPicture;
}
