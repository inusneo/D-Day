const btnCount = document.querySelector('#btnCount');
const btnReset = document.querySelector('#btnReset');

const dateMaker = () => {
  const inputYear = document.querySelector('#inputYear').value;
  const inputMonth = document.querySelector('#inputMonth').value;
  const inputDate = document.querySelector('#inputDate').value;

  const dateForm = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateForm;
}

const counterMaker = () => {
  const targetDateInput = dateMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  if (remaining <= 0) {
    // 입력 날짜가 현재 시간과 같거나 과거일 경우
    alert('타이머가 종료되었습니다.');
  } else if (isNaN(remaining)) {
    // 잘못된 날짜가 입력된 경우
    alert('유효한 시간대가 아닙니다.');
  }

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60;
  const remainingSec = Math.floor(remaining) % 60;

  console.log(remainingDate, remainingHours, remainingMin, remainingSec);
}

btnCount.addEventListener('click', () => {
  counterMaker();
});