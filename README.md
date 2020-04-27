# Learning-Chrome-Extention-Projects
Tutorial Projects for me to learn how to make a Google Chrome Extention. These are projects that I am working on to learn how to create Google Chrome Extentions. These are my first Chrome Extentions.

## Latest Showcase Video

[![Latest Showcase](https://img.youtube.com/vi/K_ndvHy1ok8/0.jpg)](https://www.youtube.com/watch?v=K_ndvHy1ok8)

## Different Extensions

- Gettings started project [Getting Started Showcase](https://www.youtube.com/watch?v=Dg3Ek5AEw0Y&feature=youtu.be)
- Hello World [Hello World Showcase](https://www.youtube.com/watch?v=W3ovWC9Vpyc&feature=youtu.be)
- Getting DOM Elements [Retrieve DOM Elements Showcase](https://youtu.be/K_ndvHy1ok8) 
    + When chrome navigates to a YouTube URL (including a video), a listener in the background.js file will trigger and run a function called "doStuffWithDom". "doStuffWithDom" console logs the DOM content. It can be used to call a function that filters desired DOM elements, then sends the info to a database.
    + When on stack overflow website, clicking on the extension action button will console log the DOM Content

## To Install Extension on Chrome

The last step is to install the extension on your local machine.

Navigate to [chrome://extensions](chrome://extensions) in your browser. You can also access this page by clicking on the Chrome menu on the top right side of the Omnibox, hovering over More 

1) Tools and selecting Extensions.
2) Check the box next to Developer Mode.
3) Click Load Unpacked Extension and select the directory for your "Hello Extensions" extension.

Congratulations! You can now use your popup-based extension by clicking the hello_world.png icon or by pressing Ctrl+Shift+F on your keyboard.

![Alt text](/ImageAssets/2020-04-27_Load_Local_Extension.png?raw=true "2020-04-27_Load_Local_Extension.png")

- Reference: [Getting Started Chrome Extention Tutorial](https://developer.chrome.com/extensions/getstarted)

# Note
- The Getting Started Extension is the [Getting Started Chrome Extention Tutorial](https://developer.chrome.com/extensions/getstarted). This extention allows the user to change the background color of the chrome developer website.
- The Hello World extention is the example Hello World Google Chrome extension found on [What are Extensions](https://developer.chrome.com/extensions). This extension displays a popup that says 'Hello World' when the extension is clicked or when the shortcul 'control'+'shift'+'f' is triggered.

# References: 
- [Getting_Started Chrome Extention](https://developer.chrome.com/extensions/getstarted)
- [Hello World Extention Explanation](https://developer.chrome.com/extensions)
- [Hello World Extention Download](https://developer.chrome.com/extensions/samples#search:hello)

# Journal 
- 2019.01.07 Added Google Chrome Getting Started Template
- 2019.01.31 Added comments to Chrome Getting Started Template. [Getting Started Showcase](https://www.youtube.com/watch?v=Dg3Ek5AEw0Y&feature=youtu.be)
- 2019.01.31 Downloaded Hello world Chrome Extention [Hello World Showcase](https://www.youtube.com/watch?v=W3ovWC9Vpyc&feature=youtu.be)
- 2020.04.27 Created Web browser DOM Retrival. Retrieves DOM elements when extension clicked on when navigating to a specified page. [Retrieve DOM Elements Showcase](https://youtu.be/K_ndvHy1ok8)

# NOTE: 

- Maybe could make a popup window where people can specify (click) on items on a specific web page that they care about.
