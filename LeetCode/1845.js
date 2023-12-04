/**
 * 좌석 관리자 클래스. 주어진 수의 좌석을 관리합니다.
 *
 * @param {number} n - 관리할 좌석의 총 개수.
 */
var SeatManager = function (n) {
  this.max = n; // 좌석의 총 개수
  this.current = 2; // 현재 예약 가능한 다음 좌석 번호
  this.arr = [1]; // 예약이 취소된 좌석 번호를 저장하는 배열
};

/**
 * 좌석을 예약하고 예약된 좌석 번호를 반환합니다.
 *
 * @return {number} - 예약된 좌석 번호.
 */
SeatManager.prototype.reserve = function () {
  // 예약 가능한 가장 작은 좌석 번호 반환
  // 예약 취소된 좌석이 있으면 그 중 가장 작은 번호 반환
  if (this.current > this.arr[0]) {
    return this.arr.shift();
  }
  // 예약 취소된 좌석이 없으면 현재 가능한 가장 작은 번호 반환
  return this.current++;
};

/**
 * 좌석 예약을 취소합니다.
 *
 * @param {number} seatNumber - 취소할 좌석 번호.
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  // 취소된 좌석 번호를 배열에 추가
  this.arr.push(seatNumber);
  // 배열을 오름차순으로 정렬하여 예약 가능한 좌석 번호를 관리
  this.arr.sort((a, b) => a - b);
};

/**
 * 사용 예:
 * var obj = new SeatManager(n);
 * var param_1 = obj.reserve(); // 좌석 예약
 * obj.unreserve(seatNumber); // 좌석 예약 취소
 */
