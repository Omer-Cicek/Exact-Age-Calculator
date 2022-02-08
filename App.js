const inputDate = document.querySelector('#date');
const dateTimeYear = document.querySelector('.dates-years-num');
const dateTimeMonth = document.querySelector('.dates-months-num');
const dateTimeDay = document.querySelector('.dates-days-num');
const dateTimeHour = document.querySelector('.dates-hours-num');
const dateTimeMinute = document.querySelector('.dates-minutes-num');
const dateTimeSecond = document.querySelector('.dates-seconds-num');
const joke = document.querySelector('.joke');

const calculator = () => {
  const userDate = (new Date(inputDate.value).getTime() / 1000).toFixed(0);
  const dateNow = (new Date().getTime() / 1000).toFixed(0);
  const realDiff = +dateNow - +userDate;
  console.log(realDiff);
  //Seconds
  const getSecond = String(realDiff % 60).padStart(2, '0');
  //Minutes
  const getMinute = String(Math.floor((realDiff / 60) % 60)).padStart(2, '0');
  //Hours
  const getHour = String(Math.floor((realDiff / (60 * 60)) % 24)).padStart(
    2,
    '0'
  );
  //Days
  const getDay = String(
    new Date().getDate() - new Date(inputDate.value).getDate()
  ).padStart(2, '0');
  console.log(getDay);
  //Months
  const getMonth = String(
    Math.floor(((realDiff * 12) / (60 * 60 * 24 * 365)) % 12)
  ).padStart(2, '0');
  //Years
  const getYear = String(Math.floor(realDiff / (60 * 60 * 24 * 365))).padStart(
    2,
    '0'
  );

  //Display Exact Times if userTime is understandible
  if (+getYear >= 0) {
    dateTimeYear.innerText = +getYear;
    dateTimeMonth.innerText = getMonth;
    dateTimeDay.innerText = getDay;
    dateTimeHour.innerText = +getHour + 3;
    dateTimeMinute.innerText = getMinute;
    dateTimeSecond.innerText = getSecond;
    joke.style.display = 'none';
  }
  if (+getYear < 0) joke.style.display = 'block';
};

//Calling Func
inputDate.addEventListener('change', () => {
  setInterval(calculator, 1000);
});
