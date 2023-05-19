import { Quill } from "react-quill";

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "Inter",
  "lucida"
];
Quill.register(Font, true);


// Modules object for setting up the Quill editor
export const modules = (props) => ({
  toolbar: {
    container: "#" + props,
    handlers: {
      undo: undoChange,
      redo: redoChange
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
});

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "code-block"
];

// Undo and Redo Functions:

  // The undoChange and redoChange functions are defined to handle the undo and redo actions, respectively. These functions access the Quill instance using this.quill and call the corresponding methods from the history module.
  
// Whitelisting Sizes and Fonts:
  // The code imports the Size and Font formats from Quill.
    // An array of whitelisted sizes is assigned to Size.whitelist, specifying the allowed size options for text.
    // The Size format is registered with Quill using Quill.register(Size, true).
    // An array of whitelisted fonts is assigned to Font.whitelist, specifying the allowed font options for text.
    // The Font format is registered with Quill using Quill.register(Font, true).


// Modules Object:

    // The modules function receives props (in this case, the toolbar ID) and returns an object.
    // The object contains a toolbar property that configures the Quill toolbar.
    // The container property is set to the specified toolbar ID, linking the toolbar to the corresponding DOM element.
    // The handlers property provides custom handler functions for undo and redo actions.

    
// Formats Array:

// The formats array specifies the enabled formats for the Quill editor.
// It includes various formatting options such as headers, font styles, sizes, alignment, strikethrough, script, blockquote, background color, lists, indentation, links, images, videos, text color, and code blocks.