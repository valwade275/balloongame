# Documentation for Valerie's "Pop the Balloon" Game

This file contains documentation for the variables and functions for Valerie's Pop the Balloon Game.

## Constants

### TOTAL_BALLOONS
Defines a constant representing the total number of balloons in the game. Currently set to 25. 

### popped
Initializes a counter to keep track of popped balloons. Initially set to 0.

## Functions

### popBalloon(e)
This function is called when a balloon within `#balloon-gallery` is moused over. It checks if the target element has the class `balloon`. If it does, it changes the displayed text to "POP!", increments the popped count, removes the event listener for mouseover on the clicked balloon, and then calls `checkAllPopped()` to verify if all balloons are popped.

### checkAllPopped()
Checks if the number of popped balloons equals `TOTAL_BALLOONS`. If so, it logs `all popped` to the console, clears the HTML content of `#balloon-gallery` (removing all balloons), and displays the hidden `#yay-no-balloons` message block.

## Evemt Listener

### document.querySelector('#balloon-gallery').addEventListener('mouseover', popBalloon)
Adds a mouseover event listener to the `#balloon-gallery` element, triggering the `popBalloon` function when a mouse hovers over it.
