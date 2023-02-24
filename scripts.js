// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const abortButton = document.getElementById("missionAbort");
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const upButton = document.getElementById("up");
    const leftButton = document.getElementById("left");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");

    takeOffButton.addEventListener("click", event => {
      let readyForTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
      if (readyForTakeOff) {
        flightStatus.innerHTML = 'Shuttle in flight.';
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = '10,000';
      }
    });

    landButton.addEventListener("click", event => {
      window.alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = 'The shuttle has landed.';
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = '0';
      rocket.style.top = "";
      rocket.style.left = "";
    });

    abortButton.addEventListener("click", event => {
      let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
      if (confirmAbort) {
        flightStatus.innerHTML = 'Mission aborted.';
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = '0';
        rocket.style.top = "";
        rocket.style.left = "";
      }
    });

    let topPosition = 0;
    let leftPosition = 0;

    upButton.addEventListener("click", event => {
      topPosition -= 10;
      if (topPosition < 0) {
        topPosition = 0;
      }
      rocket.style.top = (topPosition - 10) + "px";
      spaceShuttleHeight.innerHTML = Math.abs(1000*topPosition);
    });

    leftButton.addEventListener("click", event => {
      leftPosition -= 10;
      if (leftPosition < 0) {
        leftPosition = 0;
      }
      rocket.style.left = (leftPosition - 10) + "px";
    });

    downButton.addEventListener("click", event => {
      topPosition += 10;
      rocket.style.top = (topPosition + 10) + "px";
      spaceShuttleHeight.innerHTML -= 1000;
    });

    rightButton.addEventListener("click", event => {
      leftPosition += 10;
      rocket.style.left = (leftPosition + 10) + "px";
    });
    
}

window.addEventListener("load", init);