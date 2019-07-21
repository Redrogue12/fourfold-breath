let counter = document.getElementById('counter')
let step = document.getElementById('step')
counter.innerHTML = "0";
let count = 1;
let cycle = -1;
let interval = null;
let steps = ["Breathe in", "Hold it", "Breathe out", "Hold it"];
step.innerHTML = "Breathe in";
var audio = new Audio('./audio/boop.wav');

// Starts counter and plays boop every 4 seconds
function startCount() {
  interval = setInterval( () => {

    if (count === 1) {
      cycle++;
      audio.play();
    }

    if (count === 4) {
      counter.innerHTML = count;
      count = 1;
    } else {
      counter.innerHTML = count;
      count++;
    }

    if (cycle > 3) cycle = 0;
    console.log("cycle", cycle)
    step.innerHTML = steps[cycle];

  }, 1000)
}

// Stops and resets counter
function stopCount() {
  clearInterval(interval)
  count = 1;
  phase = 0;
  counter.innerHTML = "0";
}
