const finalDate = new Date("May 26, 2023 00:00:00").getTime(); //final date

//function to update timer every second
function updateTimer() {

    const currentDate = new Date().getTime(); //to get current date

    const distance = finalDate - currentDate;

    const days = distance / (1000 * 60 * 60 * 24);
    const hours = (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    const minutes = (distance % (1000 * 60 * 60)) / (1000 * 60);
    const seconds = (distance % (1000 * 60)) / 1000;

    document.getElementById("timer").innerHTML = `${days.toFixed(0)}days ${hours.toFixed(0)}hours ${minutes.toFixed(0)}minutes ${seconds.toFixed(0)}seconds`;

    //condition that allows to stop the timer
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "It's time to go on vacation!";
  }
}

setInterval(updateTimer, 1000);