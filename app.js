const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = ((seconds / 60) * 360) + 90; // Calculate degrees for seconds
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // Calculate degrees for minutes
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // Calculate degrees for hours

    secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Call getTime initially to set the clock hands immediately
getTime();

// Update the clock every second (1000ms)
setInterval(getTime, 1000);
