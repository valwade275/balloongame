# Valerie's "Pop the Balloon" Game
Let's relax with a little game. :smiley:

The goal of this project is to create a simple game where balloons change color and display "POP!" when hovered over. When 25 balloons have been "popped," it triggers a message saying "all popped!" and clears the balloon gallery.

## HTML Structure
The HTML code sets up the web page for my "Pop the Balloon" game. It includes standard HTML5 document structure with a DOCTYPE declaration and definitions of the root elements: `html`, `head`, and `body`.  
 - **Metadata:** The `head` section includes metadata such as character set, viewport settings for responsiveness, and compatibility mode.
 - **Stylesheet Link:** This code links an external CSS file for styling.
 - **Scripts:** This code links an external JavaScript file
    - **Inline JavaScript:** This code contains a script that dynamically generates balloons inside the `balloon-gallery` div.

## CSS Styling
I have set up the CSS code for my "Pop the Balloon" game so that the user sees a few rows of circles (balloons) of different colors. Once a balloon is popped, the user will see text saying "Pop!" replacing the balloon.  

## JavaScript Functionality

The JavaScript code manages the behavior of the balloons in the game. It detects mouseovers on balloons, marks them as popped, and checks if all balloons have been popped. Once all balloons are popped, the game displays a message indicating that the game is over. This code uses foundational JavaScript components such as variables, functions, and event listeners.  
- **TOTAL_BALLOONS:** The constant to determine the total count of balloons. The event listener is attached to the parent container (`#balloon-gallery`) using event delegation, reducing the number of individual listeners. The logic for popping balloons and checking if all balloons are popped is separated for clarity and maintainability.
