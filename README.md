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
  overlay: true, // defines if you want an overlay or not.
  headerContent: "Confirm", // header text.
  subText: "Are you sure you want to save this work?", // sub text
  closeIcon: true, // if true, shows a little icon on the top which can be used to close the popup.
  short: true, // this can be false, if you want the popup to be large.
  buttons: [ // an array with buttons, preferred is 3, because then it will become a problem for mobile devices.
    {
      text: "Cancel", // button text
      closePopup: true, // closes the popup on click if true.
      class: 'btn-cancel', // custom class you want to give to the button.
      run: () => { // click function
        console.log("ran first button");
      },
    },
    {
      text: "Save", // button text
      closePopup: false, // closes the popup on click if true.
      class: 'btn-save', // custom class you want to give to the button.
      run: () => { // click function
        console.log("ran second button")
      },
    }
  ],
  closeOnBackground: true, // if true, closes when the background is clicked.
});

```

No option is necessary, the color options all have defaults so if they aren't passed as parameters, they will be moved on to default color scheme.

`overlay`: Defines if overlay should be present or not. [Boolean] <br>
`headerContent`: Defines header text. If none, header will be removed. [String] <br>
`subText`: Defines sub text content, if none, sub text will be removed. [String] <br>
`closeIcon`: Specifies if there should be a close icon or not. [Boolean] <br>
`short`: Defines popup is short or not. [Boolean] <br>
`buttons`: an array of buttons. Preferred is 3 or less. [Array] <br>
`closeOnBackground`: closes the popup if the background content or overlay is clicked. [Boolean] <br> 
<br>

`buttons` / `[Object]` : 
```js
buttons: [
  {
    text: "Cancel",
    closePopup: true,
    class: '', // custom class you want to give to the button.
    run: () => {
      // this function is called when the button is clicked.
    }
  }
]
```

`text`: Defines button text [String] <br>
`closePopup`: specifies if the popup is to be closed on click or not. [Boolean] <br>
`class`: a class you want to give to the button. [String] <br>
`run`: called on button click [Function] <br>

**For testing PopifyJS online, go to the <a href="https://popifyjs.github.io">PopifyJS Playground</a>**

<br>

## Some  Disadvantages
as of now, some features might be bugged because the package is still in progress. post an issue on the github page for any issue you get in PopifyJS.
<br>
Animations, as of now, are not available when the popup is opened or closed because it uses a element create and remove function, so CSS cannot be applied on removed elements.
<br>
<br>

## Customizing:

PopifyJS uses a simple class naming system, so it is very easy to recognize and customize various elements in the library itself. <br>
For example, changing the overlay background color:

```css
.popify-main {
  background: red; /* changes the background color of the overlay */
}
```

<br>

Or, changing one of the button's background color and color:
<br>
For this, first you can give a custom class to the specific button you want to customize.

```js
popify({
  ...
  buttons: [,
    ...,
    {
     text: "Delete", // just for reference.
     class: "delete-something-btn", // for any class you give here, it will add it to the button's 'classList'.
     run: () => {
       delete somethingToDelete; // still for reference.
     }
    }
  ]
});
```
now we need to customize it:
```css
.delete-something-btn {
  background: #FB5B5B; /* red color */
  color: white;
}
```

<br>
<br>

## How do I use It?
just link the required resources [script & link] to your html page and you're done.

```html
<link rel="stylesheet" href="https://popifyjs.github.io/src/style.css">
<script src="https://popifyjs.github.io/src/script.js"></script>
```
or just download the files and customize it as you like.

<br>
<br>

## Contributing:
You can modify the code with new features or fixing a bug and post it as a pull request with given information. The request will be checked and merged if it's good.
