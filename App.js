const birthdayInput = document.querySelector('#date');
const dateTimeYear = document.querySelector('.dates-years-num');
const dateTimeMonth = document.querySelector('.dates-months-num');
const dateTimeDay = document.querySelector('.dates-days-num');
const dateTimeHour = document.querySelector('.dates-hours-num');
const dateTimeMinute = document.querySelector('.dates-minutes-num');
const dateTimeSecond = document.querySelector('.dates-seconds-num');
const joke = document.querySelector('.joke');

const calculator = () => {
  const birthdayValue = new Date(birthdayInput.value);
  let now = new Date();
  let age = new Date(now - birthdayValue);
  console.log(age);
  //Seconds
  let secondOfAge = age.getSeconds();
  //Minutes
  let minuteOfAge = age.getMinutes();
  //Hours
  let hourOfAge = age.getHours();
  //Days
  let dayOfAge = age.getDate();

  //Months
  let monthOfAge = age.getMonth();
  //Years
  let yearOfAge = age.getFullYear() - 1970;

  //Display Exact Times if userTime is understandible
  if (+yearOfAge >= 0) {
    dateTimeYear.innerHTML = yearOfAge.toString().padStart(2, '0');
    dateTimeMonth.innerHTML = monthOfAge.toString().padStart(2, '0');
    dateTimeDay.innerHTML = (dayOfAge - 1).toString().padStart(2, '0');
    dateTimeHour.innerHTML = (hourOfAge + 1).toString().padStart(2, '0');
    dateTimeMinute.innerHTML = minuteOfAge.toString().padStart(2, '0');
    dateTimeSecond.innerHTML = secondOfAge.toString().padStart(2, '0');

    joke.style.display = 'none';
  }
  if (+yearOfAge < 0) joke.style.display = 'block';
};

//Calling Func
birthdayInput.addEventListener('change', () => {
  setInterval(calculator, 1000);
});
