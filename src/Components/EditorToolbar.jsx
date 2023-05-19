import React from "react";


const CustomUndo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M288.078 845.999v-45.383h277.845q72.308 0 124.539-47.462 52.231-47.461 52.231-118.769 0-70.924-52.231-118.385-52.231-47.462-124.539-47.462H258.614l121.308 121.308-31.999 32-175.999-176 175.999-175.999 31.999 31.999-121.308 121.309h306.309q91.153 0 157.153 60.923 66 60.922 66 150.307 0 89.769-66 150.691-66 60.923-157.153 60.923H288.078Z" /></svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M395.077 845.999q-91.153 0-157.153-60.923-66-60.922-66-150.691 0-89.385 66-150.307 66-60.923 157.153-60.923h306.309L580.078 301.846l31.999-31.999 175.999 175.999-175.999 176-31.999-32 121.308-121.308H394.462q-72.693 0-124.924 47.462-52.231 47.461-52.231 118.385 0 71.308 52.231 118.769 52.231 47.462 124.924 47.462h277.46v45.383H395.077Z" /></svg>
);

// Quill Toolbar component
export const QuillToolbar = (props) => {
  return (<>
    {props.toolbarId !== undefined &&
      <div id={props.toolbarId} className="border-4 w-[95%] mx-auto rounded-3xl bg-toolbar border-black flex items-center gap-2">
        <span className="ql-formats">
          <button className="ql-undo">
            <CustomUndo />
          </button>
          <button className="ql-redo">
            <CustomRedo />
          </button>
        </span>
        <span className="h-[20px] inline-block w-[1.1px] bg-gray-600"></span>
        <span className="ql-formats">
          <select className="ql-font">
            <option value="arial" > Arial </option>
            <option value="comic-sans">Comic Sans</option>
            <option value="courier-new">Courier New</option>
            <option value="georgia">Georgia</option>
            <option value="helvetica">Helvetica</option>
            <option value="Inter" selected>Inter</option>
            <option value="lucida">Lucida</option>
          </select>
          <select className="ql-header">
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
            <option value="" selected>Normal</option>
          </select>
        </span>
        <span className="h-[20px] inline-block w-[1.1px] bg-gray-600"></span>
        <span className="ql-formats">
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
        </span>
        <span className="h-[20px] inline-block w-[1.1px] bg-gray-600"></span>
        <span className="ql-formats">
          <button className="ql-list" value="ordered" />
          <button className="ql-list" value="bullet" />
          <button className="ql-indent" value="-1" />
          <button className="ql-indent" value="+1" />
        </span>
        <span className="h-[20px] inline-block w-[1.1px] bg-gray-600"></span>
        <span className="ql-formats">
          <button className="ql-script" value="super" />
          <button className="ql-script" value="sub" />
          <button className="ql-blockquote" />
          <button className="ql-direction" />
        </span>
        <span className="h-[20px] inline-block w-[1.1px] bg-gray-600"></span>
        <span className="ql-formats">
          <select className="ql-align" />
          <select className="ql-color" />
          <select className="ql-background" />
        </span>
        <span className="h-[20px] inline-block w-[1.1px] bg-gray-600"></span>
        <span className="ql-formats">
          <button className="ql-link" />
          <button className="ql-image" />
          <button className="ql-video" />
        </span>
        <span className="h-[20px] inline-block w-[1.1px] bg-gray-600"></span>
        <span className="ql-formats">
          <button className="ql-formula" />
          <button className="ql-code-block" />
          <button className="ql-clean" />
        </span>
      </div>
    }
  </>)
}
export default QuillToolbar;


// Custom Icons:

  // The code defines two custom icon components: CustomUndo and CustomRedo. These components render SVG icons used for the undo and redo buttons in the toolbar.


// QuillToolbar Component:
  // The QuillToolbar component receives props, and it conditionally renders the toolbar based on the existence of the toolbarId prop.
  // The toolbar is rendered within a div element with the specified toolbarId as the id attribute. It also has some styling classes for appearance.
  // The toolbar is divided into several sections using span elements.
  // Each section contains various formatting options, such as font selection, header selection, bold, italic, underline, strike-through, lists, indentation, alignment, color selection, links, images, videos, formulas, code blocks, and clean formatting.
  // Horizontal separators between sections are represented by span elements with a background color and a fixed width.