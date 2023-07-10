# timer
build a timer app using the basic JavaScript concepts of functions and classes

`constructor` is a very special function. It get called automatically whenever an instance of a class is created.

the value of `this` points to the window object when it's referenced in global console.log, regular function and arrow function. However, the value of `this` in a method of an object points to the object itself.

`this` inside of a method of a class allows access to the instance variables or/and methods of that particular class.

In order to call variables or methods in other methods in a class, assgin the variable with `this`. Example, this.intervalId.

`getters` and `setters`