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
 * implement a method for timer to stop at 0
 * add callbacks to Timer for giving out information
 */


class Timer {
    constructor(durationInput, startButton, pauseButton, callback) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (callback) {
            this.onStart = callback.onStart;
            this.onTick = callback.onTick;
            this.onComplete = callback.onComplete;
        }

        this.startButton.addEventListener("click", this.start);

        this.pauseButton.addEventListener("click", this.pause);
    };

    start = () => {
        if (this.onStart) {
            this.onStart();
        };

        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
    };

    tick = () => {
        if (this.onTick) {
            this.onTick();
        }

        if (this.timeRemaining <= 0) {
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 1;
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time) {
        return this.durationInput.value = time;
    }

    pause = () => {
        if (this.onComplete) {
            this.onComplete();
        }
        clearInterval(this.intervalId);
    }
};

const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log("Timer started")
    },

    onTick() {
        console.log("Ticking..")
    },

    onComplete() {
        console.log("Timer complete")
    }
});