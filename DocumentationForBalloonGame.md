# DRAFT!!

This file will contain documentation for the various functions and variables for Valerie's Pop the Balloon Game.

## Constants

### Constant 1

#### Properties
- **property1**  
Description


## Functions

### Function 1

#### Parameters
- **parameter1**  
Description

# HTML Notes

    let popped = 0;: Initializes a counter to keep track of popped balloons.

    document.addEventListener('mouseover', function(e) {...});: Listens for mouseover events on the entire document. When the mouse moves over an element, it checks if the element has a class of "balloon." If so, it changes the background color to light gray (#ededed), displays "POP!", increments the popped counter, removes the event listener for that specific balloon, and checks if all balloons have been popped.

    function removeEvent(e) {...};: Attempts to remove the event listener for mouseover on the target element. However, it doesn't effectively remove the event listener because the function provided to removeEventListener is different from the one added with addEventListener. They should match to properly remove the event listener.

    function checkAllPopped() {...};: Checks if the number of popped balloons (popped) is 24. If so, it logs "all popped!" to the console, empties the HTML content of the element with the ID balloon-gallery, and displays a hidden element with the ID yay-no-balloons.

## I need to fix this!! 
The removeEvent function won't work as intended due to the incorrect use of removeEventListener. To properly remove the event listener, I need to store a reference to the function and use the same reference to remove it.

# CSS Notes

    Body Styles:
        font-family: sans-serif;: Sets the default font for the entire document to a sans-serif typeface.
        padding: 30px;: Provides padding around the entire body of the document.
        background: #ededed;: Sets the background color of the page.

    Wrapper Class:
        .wrapper { max-width: 690px; margin: 0 auto; }: Limits the maximum width of content to 690 pixels and centers it horizontally on the page.

    Styling for Different Elements:

        h1: Styles for <h1> tags.
            margin properties control the spacing around the heading.
            color is set to a blueish shade (#08a3d9) and then to a darker blue (#000380)—the latter seems to override the previous color setting.
            text-transform: uppercase; makes all text uppercase.
            font-size: 30px; sets the font size.

        #balloon-gallery div: Styles for div elements inside an element with the ID balloon-gallery.
            background, height, width, text-align, color, font-size, font-family, border-radius, margin-top, display: Various styles to create a circular balloon-like appearance for these divs.
            nth-child selectors are used to apply specific styles to certain divs based on their position within the parent element. For example, every third div, every div that is the 3n-1 child, every fifth div, etc., have different background and text colors.

        #balloon-gallery div:nth-child(4n): Clears the float every fourth div to ensure that the layout doesn't wrap around the floated elements.

        #yay-no-balloons: Styles for an element with the ID yay-no-balloons.
            display: none; hides this element.
            color and font-size are set to show a large red text, likely indicating some sort of message to display when the balloons are all popped.

This CSS code is designed to create a visually appealing balloon gallery with different colored circular elements representing balloons. The #yay-no-balloons element contains a message that will be displayed when all the balloons are popped, but it's initially hidden (display: none;).

# JavaScript Notes

    Initialization:
        let popped = 0;: Initializes a counter to keep track of popped balloons.

    Event Listener:
        document.addEventListener('mouseover', function(e) {...});: Listens for mouseover events on the entire document. When the mouse moves over an element:
            Checks if the element has a class of "balloon".
            If the condition is met, it changes the background color of the balloon to light gray (#ededed), sets its content to "POP!", increments the popped counter, attempts to remove the event listener for that specific balloon (not properly), and checks if all balloons have been popped.

    Function removeEvent(e):
        This function is intended to remove the event listener from the specific balloon being interacted with. However, it's not properly removing the event listener because the function provided to removeEventListener doesn't match the one added with addEventListener. To remove an event listener, the functions must match, which is not the case here.

    Function checkAllPopped():
        Checks if the number of popped balloons (popped) is equal to 24.
        If 24 balloons have been popped:
            Logs "all popped!" to the console.
            Empties the HTML content of the element with the ID balloon-gallery.
            Changes the style to display the element with the ID yay-no-balloons (likely a message indicating that all balloons have been popped). This element is initially hidden (display: none;).

Don't forget to fix this!!  
The removeEvent function isn't set up to remove the event listener correctly. To fix this, I need to define the event handler function separately and then reference it in both addEventListener and removeEventListener.