/** WORKING WITH A CLASS AROUND DOM ELEMENTS | Vid6
(How to connect (instance variables and methods) of a class to HTML DOM Elements)

 * - Create "Timer" class and call a constructor (instance) of the class**
 * 
 * - Add arguments to the constructor
 * - Assign instance variables to the arguments.
 * - Create a "start()" method in the class.
 * - Add event listener to the instance variable (this.startButton) that invokes the start() method.
 * - Create elements in HTML elements, select the elements (in index.js) 
 * - Create an instance of the "Timer" class and pass in the selected elements as argument.
 * 
 * 
 * THE VALUE OF "this" DEPENDING ON THE CONTEXT | Vid7 & 8
 * The context of "this" in global console.log, function and arrow function ~ all points to the window object.
 * 
 * the value of "this" in a method of an object points to the object.
 * 
 * 
 * HOW TO SHARE VARIABLES AND METHODS AMONG METHODS IN THE SAME CLASS | Vid10
 * create tick(), call it in start() and add setInterval.
 * create pause(), call clearInterval() and assign pauseButton to event listener.
 *  Attach "this" to the method or variable that you want to call in another method in the same class.
 * 
 * 
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
        console.log("tick..")
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
