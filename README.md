# frameCount() frameRate() P5.JS

- The system variable frameCount contains the number of frames that have been displayed since the program started

-  frameRate() specifies the number of frames to be displayed every second. For example, the function call frameRate(30) will attempt to refresh 30 times a second. If the processor is not fast enough to maintain the specified rate, the frame rate will not be achieved. Setting the frame rate within setup() is recommended.

- When the frame rate hits a prime number the background and text fill change to a random color

- loadFont() loads an opentype font file (.otf, .ttf) from a file or a URL, and returns a PFont Object.

![framecountframeratep5js](assets/frame.gif)