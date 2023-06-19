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
 */


class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
    }

    start() {
        console.log("The timer is starting..")
    };
};

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);