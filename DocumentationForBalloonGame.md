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

    balloonHandler Function:
        This function handles the behavior when a mouseover event occurs.
        It checks if the element that triggered the event has a class of "balloon".
        If it's a balloon, it changes its background color to light gray (#ededed), displays "POP!" as text, increments the popped counter, and removes the event listener for that specific balloon. This ensures that once a balloon is popped, it no longer responds to mouseover events.
        After popping a balloon, it checks if all 25 balloons have been popped by calling checkAllPopped().

    document.addEventListener('mouseover', balloonHandler);:
        Listens for mouseover events on the entire document.
        When a mouseover event occurs, it triggers the balloonHandler function.

    checkAllPopped Function:
        Checks if the number of popped balloons (popped) is equal to 25.
        If 25 balloons have been popped:
            Logs "all popped!" to the console.
            Empties the HTML content of the element with the ID balloon-gallery.
            Changes the style to display the element with the ID yay-no-balloons, indicating that all balloons have been popped. This element is initially hidden (display: none;).

This code creates an interactive game where balloons change appearance when hovered over and, once 25 balloons have been popped, triggers a message or action to indicate that all balloons have been popped. The event listener ensures that balloons can only be popped once by removing their ability to react to further mouseover events after being popped.