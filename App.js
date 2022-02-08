const inputDate = document.querySelector('#date');
const dateTimeYear = document.querySelector('.dates-years-num');
const dateTimeMonth = document.querySelector('.dates-months-num');
const dateTimeDay = document.querySelector('.dates-days-num');
const dateTimeHour = document.querySelector('.dates-hours-num');
const dateTimeMinute = document.querySelector('.dates-minutes-num');
const dateTimeSecond = document.querySelector('.dates-seconds-num');

// const calculator = () => {
//   ///date now
//   const userDate = new Date(inputDate.value);
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDay();
//   const hour = date.getHours();
//   const minute = date.getMinutes();
//   const second = date.getSeconds();

//   ////Date user birthday
//   const dateUser = new Date(userDate);
//   const userYear = dateUser.getFullYear();
//   const userMonth = dateUser.getMonth();
//   const userDay = dateUser.getDay();
//   const userHour = dateUser.getHours();
//   const userMinute = dateUser.getMinutes();
//   const userSecond = dateUser.getSeconds();

//   ////Calculating user exact age
//   let getYear = year - userYear;
//   let getMonth = month - userMonth;
//   let getDay = day - userDay;
//   let getHour = hour - userHour;
//   let getMinute = minute - userMinute;
//   let getSecond = second - userSecond;
//   if (getSecond < 0) {
//     getMinute -= 1;
//     getSecond += 60;
//     console.log('bir');
//   }
//   if (getMinute < 0) {
//     getHour -= 1;
//     getMinute += 60;
//     console.log('iki');
//   }
//   if (getHour < 0) {
//     getDay -= 1;
//     getHour += 60;
//     console.log('üç');
//   }
//   if (getDay < 0) {
//     getMonth -= 1;
//     getDay += 60;
//     console.log('dört');
//   }
//   if (getMonth < 0) {
//     getYear -= 1;
//     getMonth += 12;
//     console.log('beş');
//   }
//   if (getYear < 0) {
//     console.log('alti');
//     console.error('Are you coming from Future');
//   }

//   dateTimeYear.innerText = getYear;
//   dateTimeMonth.innerText = getMonth;
//   dateTimeDay.innerText = getDay;
//   dateTimeHour.innerText = getHour;
//   dateTimeMinute.innerText = getMinute;
//   dateTimeSecond.innerText = getSecond;
// };

inputDate.addEventListener('change', () => {
  //   setInterval(calculator, 1000);

  setInterval(calculator, 1000);
});

const calculator = () => {
  const userDate = (new Date(inputDate.value).getTime() / 1000).toFixed(0);
  const dateNow = (new Date().getTime() / 1000).toFixed(0);
  console.log(+dateNow);
  console.log(+userDate);
  const ömer = +dateNow - +userDate;
  const realDiff = ömer;
  console.log(realDiff);
  //Seconds
  const getSecond = String(realDiff % 60).padStart(2, '0');
  console.log(getSecond);
  //Minutes
  const getMinute = String(Math.floor((realDiff / 60) % 60)).padStart(2, '0');
  console.log(getMinute);
  //Hours
  const getHour = String(Math.floor((realDiff / (60 * 60)) % 24)).padStart(
    2,
    '0'
  );
  console.log(getHour);
  //Days
  const getDay = String(Math.floor((realDiff / (60 * 60 * 24)) % 30)).padStart(
    2,
    '0'
  );
  console.log(getDay);
  //Months
  const getMonth = String(
    Math.floor((realDiff / (60 * 60 * 24 * 30)) % 12)
  ).padStart(2, '0');
  console.log(getMonth);
  //Years
  const getYear = String(Math.floor(realDiff / (60 * 60 * 24 * 365))).padStart(
    2,
    '0'
  );
  console.log(getYear);
  if (+getYear >= 0) {
    dateTimeYear.innerText = getYear;
    dateTimeMonth.innerText = getMonth;
    dateTimeDay.innerText = getDay;
    dateTimeHour.innerText = getHour;
    dateTimeMinute.innerText = getMinute;
    dateTimeSecond.innerText = getSecond;
  } else {
    console.log('bu ne Gardaş');
  }
};
