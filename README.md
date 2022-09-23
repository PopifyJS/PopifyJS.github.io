# popifyJS
a minimal javascript library for confirm popups or any use popups.

## Why should I use this?
popifyJS is a library made for responsive popups with total customizability. Many options to change how the popup UI looks and much more.

<br>
<br>


## All Options:

```js

popify({
  headerContent: "Confirm", // header text.
  headerColor: "#000", //  header color
  subText: "Are you sure you want to save this work?", // sub text
  subTextColor: "#333", // sub text color
  closeIcon: true, // if true, shows a little icon on the top which can be used to close the popup.
  short: true, // this can be false, if you want the popup to be large.
  buttons: [ // an array with buttons, preferred is 3, because then it will become a problem for mobile devices.
    {
      text: "Cancel", // button text
      background: "#888", // background color
      color: "blue", // text color
      run: () => { // click function
        console.log("ran first button");
      },
      interaction: {
        color: "black", // hover / focus color
        background: "#2293fa", // hover / focus background
      }
    },
    {
      text: "Save", // button text
      background: "#ff0000", // background color
      color: "white", // text color
      run: () => { // click function
        console.log("ran second button")
      },
      interaction: {
        color: "white", // hover / focus color
        background: "#FF4444", // hover / focus background
      }
    }
  ],
  backgroundClickable: false, // background content is clickable or not.
  closeOnBackground: true, // if true, closes when the background is clicked.
});

```

