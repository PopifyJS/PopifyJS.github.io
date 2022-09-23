# popifyJS
a minimal javascript library for confirm popups or any use popups

<br>
<br>

## Why should I use this?
popifyJS is a library made for responsive popups with total customizability. Many options to change how the popup UI looks and much more.

<br>

## All Options:

```js

popify({
  background: "white", // defines popup background.
  overlay: true, // defines if you want an overlay or not.
  overlayBackground: "red", // defines the overlay background if overlay is true,
  headerContent: "Confirm", // header text.
  headerColor: "#000", //  header color
  subText: "Are you sure you want to save this work?", // sub text
  subTextColor: "#333", // sub text color
  closeIcon: true, // if true, shows a little icon on the top which can be used to close the popup.
  short: true, // this can be false, if you want the popup to be large.
  animation: 'fade', // specifies the animation for opening and closing.
  buttons: [ // an array with buttons, preferred is 3, because then it will become a problem for mobile devices.
    {
      text: "Cancel", // button text
      background: "#888", // background color
      color: "blue", // text color
      closePopup: true, // closes the popup on click if true.
      class: 'btn-cancel', // custom class you want to give to the button.
      run: () => { // click function
        console.log("ran first button");
      },
    },
    {
      text: "Save", // button text
      background: "#ff0000", // background color
      color: "white", // text color
      closePopup: false, // closes the popup on click if true.
      class: 'btn-save', // custom class you want to give to the button.
      run: () => { // click function
        console.log("ran second button")
      },
    }
  ],
  backgroundClickable: false, // background content is clickable or not.
  closeOnBackground: true, // if true, closes when the background is clicked.
});

```

No option is necessary, the color options all have defaults so if they aren't passed as parameters, they will be moved on to default color scheme.

`background`: Specifices popup background. Defaults to white. [CSS Color] <br>
`overlay`: Defines if overlay should be present or not. [Boolean] <br>
`overlayBackground`: Specifies overlay background if it's set to true. [CSS Color] <br>
`headerContent`: Defines header text. If none, header will be removed. [String] <br>
`headerColor`: Defines the color for the header. If none, color will be black. [CSS Color] <br>
`subText`: Defines sub text content, if none, sub text will be removed. [String] <br>
`subTextColor`: specifies sub text color. Defaults to #333. [CSS Color] <br>
`closeIcon`: Specifies if there should be a close icon or not. [Boolean] <br>
`short`: Defines popup is short or not. [Boolean] <br>
`animation`: Defines opening / closing animation. ["fade", "appear", "none"] <br>
`buttons`: an array of buttons. Preferred is 3 or less. [Array] <br>
`backgroundClickable`: specifies if the background content is clickable or not. [boolean] <br>
`closeOnBackground`: closes the popup if the background content or overlay is clicked. [Boolean] <br> 
<br>

`buttons` / `[Object]` : 
```js
buttons: [
  {
    text: "Cancel",
    background: "",
    color: "",
    closePopup: true,
    class: '', // custom class you want to give to the button.
    run: () => {
      // this function is called when the button is clicked.
    }
  }
]
```

`text`: Defines button text [String] <br>
`background`: Defines button background color [CSS Color] <br>
`color`: Defines text color of button [CSS Color] <br>
`closePopup`: specifies if the popup is to be closed on click or not. [Boolean] <br>
`class`: a class you want to give to the button. [String] <br>
`run`: called on button click [Function] <br>

<br>

## Some  Disadvantages
as of now, some features might be bugged because the package is still in progress. post an issue on the github page for any issue you get in PopifyJS.
<br>
<br>

## How do I use It?
just link the required resources [script & link] to your html page and you're done.

```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/chill31/popifyJS/main/src/style.css">
<script src="https://raw.githubusercontent.com/chill31/popifyJS/main/src/script.js"></script>
```
or just download the files and customize it as you like.
