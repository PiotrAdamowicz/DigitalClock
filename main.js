const digitalClock = document.getElementById("digitalClock");

//converting given data to double digit if they are below 10(houres, minutes, seconds)
function doubleDigit(number) {
  if (number < 10) {
    return "0" + number.toString();
  } else {
    return number;
  }
}

function toggleSeconds() {
  let secondsContainer = document.getElementById("seconds");

  if (secondsContainer.style.display === "none") {
    secondsContainer.style.display = "inline";
  } else {
    secondsContainer.style.display = "none";
    digitalClock.style.width = "130px";
  }
}

function clock() {
  //date related variables + conversion to dobule digits if needed
  const today = new Date();
  const hour = doubleDigit(today.getHours());
  const minutes = doubleDigit(today.getMinutes());
  const seconds = doubleDigit(today.getSeconds());

  //DOM elements to manipulate
  const houresContainer = document.getElementById("houres");
  const minutesContainer = document.getElementById("minutes");
  const secondsContainer = document.getElementById("seconds");

  //hooking convertet data to dedicated containers
  houresContainer.textContent = hour;
  minutesContainer.textContent = minutes;
  secondsContainer.textContent = `:${seconds}`;
}

const display = setInterval(clock, 1000);

digitalClock.addEventListener("click", toggleSeconds);
