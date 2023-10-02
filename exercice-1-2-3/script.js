/* 
Anchorage UTC-8
Reykjavic UTC
S-P UTC+3
*/
const cityElements = {
  brussels: document.querySelector('.bruxelles'),
  anchorage: document.querySelector('.anchorage'),
  reykjavic: document.querySelector('.reykjavik'),
  saintPetersburg: document.querySelector('.saint-petersburg'),
};

function updateLocalTime(city, timeZone) {
  const today = new Date();
  const localTime = today.toLocaleString("en-US", {
    timeZone,
  });
  city.innerText = localTime;
}

function updateAllLocalTimes() {
  setInterval(() => {
    updateLocalTime(cityElements.brussels, "Europe/Brussels");
    updateLocalTime(cityElements.anchorage, "America/Anchorage");
    updateLocalTime(cityElements.reykjavic, "Atlantic/Reykjavik");
    updateLocalTime(cityElements.saintPetersburg, "Europe/Moscow");
  }, 1000);
}

updateAllLocalTimes();


// exercise 2

function daysSince1970(timestamp) {
  const currentTimestamp = new Date().getTime();
  const difference = currentTimestamp - timestamp;
  const days = Math.floor(difference/ (1000 * 60 * 60 * 24));
  return days;
}

const pierreBday = new Date('1993-11-22').getTime();
const pierreDays = daysSince1970(pierreBday);
console.log(pierreDays);

// exercise 3
const hoursInput = document.querySelector(".hours");
const resultElement = document.querySelector(".dateInHours");

hoursInput.addEventListener("keyup", () => {
  const hours = parseInt(hoursInput.value, 10);
  if (!isNaN(hours)) {
    const futureDate = new Date();
    futureDate.setHours(futureDate.getHours() + hours);
    const formattedDate = futureDate.toLocaleString();

    resultElement.textContent = `The date and time ${hours} hours from now will be: ${formattedDate}`;
  } else {
    resultElement.textContent = "Please enter a valid number of hours.";
  }
});

