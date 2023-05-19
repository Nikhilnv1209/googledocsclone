import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar from './EditorToolbar';
import { modules, formats } from '../utils/Toolbaroptions';
import "../App.css"


const TextEditor = () => {
    const [value, setValue] = useState('');
    const editorref = useRef(null);
    const [width, setWidth] = useState(window.innerWidth - 56);

    // useEffect(() => {
    //     if (editorref.current) {
    //         const quill = editorref.current.getEditor();
    //         quill.on('text-change', () => {
    //             // console.log(quill.getText());
    //         });
    //     }
    // }, []);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth - 56);
        }
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    return (
        <section className={`mt-2 h-full`} style={{ width: width }}>
            <EditorToolbar toolbarId={'t1'} widhth={width}/>
            <div className='overflow-y-scroll overflow-x-scroll h-[90vh] max-h-[1420px]' style={{ width: width }}>
                <ReactQuill theme="snow" value={value} onChange={setValue}
                    modules={modules('t1')}
                    formats={formats}
                    className='text-black border-none outline-none text-2xl font-[500] font-googlesans caret-black pt-6 w-full h-full'
                    ref={editorref}
                />
            </div>
        </section>
    )
}

export default TextEditor

// Importing Dependencies: The code imports necessary dependencies, including React, React Quill, and the CSS styles for the text editor.

// State and Refs:

    // The component defines state variables using the useState hook:
    // value: Represents the current value/content of the text editor.
    // The component uses the useRef hook to create a ref named editorref. This ref will be used to access the underlying Quill editor instance.

// Width Calculation:

    // The component calculates the initial width of the text editor by subtracting 56 (representing the width of the toolbar) from the window's inner width.
    // The width value is stored in the width state variable.

// Resize Handling:

    // The component sets up an effect with the useEffect hook to handle resizing of the window.
    // Whenever the window is resized, the handleResize function is called, which updates the width state variable to match the new width of the window.
    // The effect also cleans up the event listener when the component is unmounted.

    
// Rendering:

// The TextEditor component returns a JSX element representing the text editor section.
// The section has a dynamic width based on the width state variable.
// Inside the section, there is an EditorToolbar component rendered, passing the toolbarId and width props.
// Below the toolbar, there is a div element with scrollable content, representing the text editor area.
// The ReactQuill component is used to render the actual text editor.
// The value state variable is passed as the initial value/content of the editor, and the setValue function is used as the onChange event handler to update the value state.
// Additional configurations, such as the theme, modules, formats, and styling, are provided as props to the ReactQuill component.
// The ref prop is set to editorref to bind the ref to the ReactQuill component instance.