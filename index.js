// WORKING WITH A CLASS AROUND DOM ELEMENTS | Vid6
// (How to connect (instance variables and methods) of a class to HTML DOM Elements)

/**
 * create Timer class
 * add instance variable and method (start())
 * add eventListener to startButton variable
 * create and select HTML elements
 * create an instance of the Timer class
 * change start() to arrow function
 * create tick() and invoke it in start()
 * invoke tick() with setInterval in start()
 * assign setInterval to an instance variable
 * invoke clearInterval() in pause();
 * add value to input element in HTML
 * countdown value in tick()
 * create get and set function and invoke them in tick()
 */

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);

        this.pauseButton.addEventListener("click", this.pause)
    };

    start = () => {
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
    };

    tick = () => {
        this.timeRemaining = this.timeRemaining;
        this.timeRemaining = this.timeRemaining -1;
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time) {
        return this.durationInput.value = time;
    }



    pause = () => {
        clearInterval(this.intervalId);
        console.log("Timer is paused!")
    }

};

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
