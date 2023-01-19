const btnCount = document.querySelector('#btnCount');
const btnReset = document.querySelector('#btnReset');
const dayContainer = document.querySelector('.container');
const dayTxt = document.querySelector('#dayTxt');
dayContainer.style.display = 'none';

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
    dayContainer.style.display = 'none';
    dayTxt.style.display = 'flex';
    dayTxt.textContent = '타이머가 종료 되었습니다.';
    
    return false;
  } else if (isNaN(remaining)) {
    // 잘못된 날짜가 입력된 경우
    // alert('유효한 시간대가 아닙니다.');
    dayContainer.style.display = 'none';
    dayTxt.style.display = 'flex';
    dayTxt.textContent = '유효한 시간대가 아닙니다.';
    
    return false;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60
  }
  
  const docArr = ['days', 'hours', 'min', 'sec']
  const timeKeys = Object.keys(remainingObj);
  
  let i = 0;
  for (tag of docArr) {
    document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
    i++;
  }
  // const docObj = {
  //   days: document.getElementById('days'),
  //   hours: document.getElementById('hours'),
  //   min: document.getElementById('min'),
  //   sec: document.getElementById('sec')
  // }
  // let i = 0;
  // for (key in docObj) {
  //   docObj[key].textContent = remainingObj[timeKeys[i]];
  //   i++;
  // }

  // docObj['days'].textContent = remainingObj['remainingDate'];
}

btnCount.addEventListener('click', () => {
  dayContainer.style.display = 'flex';
  dayTxt.style.display = 'none';
  counterMaker();
});