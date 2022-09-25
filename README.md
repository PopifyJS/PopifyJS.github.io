# popifyJS
a minimal javascript library for confirm popups or any use popups

*popify playground default settings*
<img width="960" src="https://user-images.githubusercontent.com/89910163/192141571-0baad986-7068-493a-9817-e9141a835a80.png">



<br>
<br>
The gray background is the overlay, enabled by default. It can be disabled anytime. <br>
All the content in the popup is fully customizable, the header, the sub text, the buttons, the close icon, and many more accessibility features.
<br><br>
The popup's size is responsive and can be changed to large mode, making it cover almost the full screen. <br>
<img width="960" src="https://user-images.githubusercontent.com/89910163/192141590-104bfa8d-4fde-4172-b27a-807f4fd1f055.png">


<br>
<br>

## Why should I use this?
popifyJS is a library made for responsive popups with total customizability. Many options to change how the popup UI looks and much more.

<br>

## All Options:

```js

popify({
  overlay: true, // specifies overlay visibility.
  closeOnBackground: true, // specifies if the popup needs to close when the background/overlay is clicked.
  short: true, // specifies popup size to be short or not.
  icon: "info", // specifices icon of the popup.
  closeIcon: true, // specifies if there needs to be a close icon or not.
  headerContent: "Confirm Delete", // specifies header content.
  subText: "Are you sure you want to delete this file?", // specifies sub text. HTML can be inserted.
  
  buttons: [ // an array of buttons you want in the popup. Scroll down for details on button properties. 
    {
      text: "Cancel",
      class: "btn-cancel",
      closePopup: true,
      icon: "x",
      run: () => {
        console.log("Cancel button clicked");
      }
    },
    {
      text: "Delete",
      class: "btn-delete",
      closePopup: true,
      icon: "trash"
      run: () => {
        console.log("Delete button clicked");
      }
    }
  ]
});

```

No option is necessary, the color options all have defaults so if they aren't passed as parameters, they will be moved on to default color scheme.

`overlay`: specifies if you want a background behind the popup or not. [Boolean] <br>
`closeOnBackground`: specifies if you want the popup to close when the overlay or background is clicked. [Boolean] <br>
`short`: specifies if you want the popup size to be short or not. [Boolean] <br>
`icon`: specifies icon for the popup. "success", "error", "warning", "question", "info" are all the available icons. [String] <br>
`closeIcon`: specifies if you want a close icon in the popup or not. [Boolean] <br>
`headerContent`: specifies header content. [String] <br>
`subText`: specifies sub text. HTML can be inserted. [String] [HTML] <br>
<br>

`buttons` / `[Object]` : 
```js
buttons: [
  {
    text: "Cancel", // button text.
    closePopup: true, // specifies if the popup is to be closed on button click or not.
    icon: '', // any icon available on bootstrap icons work.
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
`icon`: any bootstrap icon. [String] <br>
`run`: called on button click [Function] <br>

**For testing PopifyJS online, go to the <a href="https://popifyjs.github.io">PopifyJS Playground</a>** <br>
**For seeing all the available button icons, go to <a href="https://icons.getbootstrap.com">Bootstrap Icons</a>**

<br>

## Some  Disadvantages
as of now, some features might be bugged because the package is still in progress. post an issue on the github page for any issue you get in PopifyJS.
<br>
Animations, as of now, are not available when the popup is opened or closed because it uses a element create and remove function, so CSS cannot be applied on removed elements.
<br>
<br>

## Customizing:

PopifyJS uses a simple class naming system, so it is very easy to recognize and customize various elements in the library itself. Every class name starts with `popify-` and ends with the element type/name<br>
For example, changing the overlay background color:

```css
.popify-main {
  background: red; /* changes the background color of the overlay */
}
```

<br>

All Class names are:
<br><br>
`popify-main`: this is the main container for everything. Also used as an overlay if enabled.
 - `short`: this is given when the "short" parameter is set to true.
 - `overlay-none`: this class name is added when the "overlay" option is disabled. <br>
 
`popify-app`: this is given to the popup which contains all the content like the header, sub text, etc. <br>
`popify-close`: given to the close icon, if enabled. <br>
`popify-header`: given to the title in the popup, if any. <br>
`popify-subtext`: given to the subtext in the popup. <br>
`popify-btn-group`: given to the container of all the buttons in the popup. <br>
`popify-btn`: given to any button in the popup. <br>
 - `close-popup-btn`: given to the buttons which are supposed to the close the popup on click.
 - `[custom class]`: given if a "class" property is provided in the popify initializer. <br>
 
----------------------------------------------------------------------------------------------------------------------------------------

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


## Dependencies:

There are no heavy dependencies which slow down your website or page, but bootstrap icons will be loaded in order to provide icons to the popup and buttons.
