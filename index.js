let counter = document.getElementById('counter')
let step = document.getElementById('step')
counter.innerHTML = "0";

// Every second is a count and this value will be displayed
let count = 1;

let interval = null;

// Displays the breathing steps and all four steps represent a cycle
let steps = ["Breathe in", "Hold it", "Breathe out", "Hold it"];
step.innerHTML = "Breathe in";

// Cycle is initialized at -1 because the very first thing that happens in the app is cycle++
let cycle = -1;

// Audio file played whenever count is 1
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

    // Cycle completed
    if (cycle > 3) cycle = 0;
    step.innerHTML = steps[cycle];
  }, 1000)
}

// Stops and resets counter
function stopCount() {
  clearInterval(interval)
  count = 1;
  cycle = -1;
  counter.innerHTML = "0";
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  console.log("beforeinstallprompt")
});