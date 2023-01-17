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

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60;
  const remainingSec = Math.floor(remaining) % 60;

  console.log(remainingDate, remainingHours, remainingMin, remainingSec);
}

btnCount.addEventListener('click', () => {
  counterMaker();
});