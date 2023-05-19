import logo from '../assets/Images/google-docs.png'
import star from '../assets/Images/star.png'
import Folder from '../assets/Images/Folder.png'
import lastedited from '../assets/Images/lastedited.png'
import lock from '../assets/Images/lock.png'
import videocam from '../assets/Images/videocam.png'
import comment from '../assets/Images/comment.png'
import cloud from '../assets/Images/cloud.png'
import profile from "../assets/Images/profile.png"
import { useState } from 'react'

// border border-black

const Header = () => {
  const [document, setDocument] = useState('Untitled document');
  // console.log(document);

  // handles the change in the input field
  const handlechange = (e) => {
    setDocument(e.target.value)
  }

  // handles the focus on the input field
  const handlefocus = (e) => {
    e.target.select()
  }

  // handles the focus loss on the input field
  const handlefocusloss = (e) => {
    if (e.target.value === '') {
      setDocument('Untitled document')
    }
  }


  return (
    <header className='font-googlesans flex items-center justify-between pt-1 px-[1.1rem]'>
      <aside className='flex gap-1 items-center h-[3.8rem] max-h-[3.8rem]'>
        <img src={logo} alt="" className='object-contain h-[2.15rem]' />
        <div className='space-y-[0.15rem]'>
          <div className='flex gap-2 mb-[2px]'>
            <input type="text" value={document} onFocus={handlefocus} onBlur={handlefocusloss} onChange={handlechange} className='text-[18px] text-gray-600 max-w-[10.5rem] w-[10.5rem] h-6 px-1 outline-none hover:border-[.8px]
            focus:border-[1px] rounded border-black py-0'/>
            <div className='flex items-center justify-center relative gap-4'>
              <div className='optionhover'>
                <img src={star} alt="" className='object-fill w-[18px] h-[18px]' />
              </div>
              <div className='optionhover'>
                <img src={Folder} alt="" className='object-fill w-[18px] h-[18px]' />
              </div>
              <div className='optionhover'>
                <img src={cloud} alt="" className='object-fill w-[18px] h-[18px] ' />
              </div>
            </div>
          </div>
          <div className='font-googlesans text-[14px] space-x-[1rem] text-gray-600 px-[5px] max-h-6'>
            <span className='fileoptions'>File</span>
            <span className='fileoptions'>Edit</span>
            <span className='fileoptions'>View</span>
            <span className='fileoptions'>Insert</span>
            <span className='fileoptions'>Format</span>
            <span className='fileoptions'>Tools</span>
            <span className='fileoptions'>Extensions</span>
            <span className='fileoptions'>Help</span>
          </div>
        </div>
      </aside>


      {/* Right half */}
      <aside className='flex gap-9'>
        <div className='flex items-center justify-center relative gap-6'>
          <div className='optionhover before:w-11  before:h-11'>
            <img src={lastedited} alt="" className='object-fill w-[26px] h-[26px]' />
          </div>
          <div className='optionhover before:w-11  before:h-11'>
            <img src={comment} alt="" className='object-fill w-[26px] h-[26px]' />
          </div>
          <div className='optionhover before:w-11  before:h-11'>
            <img src={videocam} alt="" className='object-fill w-[26px] h-[26px] ' />
          </div>
        </div>
        <div className='flex gap-4'>
          <button className='flex gap-2 items-center justify-center bg-button px-6 py-2 rounded-[2rem] hover:shadow-[0px_2px_2px_0.1px_rgba(0,0,0,.3)]'>
            <img src={lock} alt="" className='w-4 object-contain' />
            <p className='text-[15px] text-black'>Share</p>
          </button>

          <img src={profile} alt="" className='w-10' />
        </div>
      </aside>
    </header>
  )
}

export default Header


// Importing Images: The code imports various image files from the ../assets/Images directory. These images are used for icons and logos in the header section.

// State Management: 
    // The component uses the useState hook to manage the state of the document name. The initial state is set to 'Untitled document', and the state is updated using the setDocument function.

// Event Handlers: Three event handler functions are defined:

    // handlechange: Handles the change event of the input field and updates the document name state.
    // handlefocus: Handles the focus event of the input field and selects the text.
    // handlefocusloss: Handles the focus loss event of the input field and resets the document name if it is empty.


// Rendering:

  // The header element contains two aside elements representing the left and right halves of the header.
    // In the left half:
        // The Google Docs logo image is rendered.
        // An input field displays the document name, with event handlers attached for focus, blur, and change events.
        // A set of icons are rendered using img elements inside a container div.
        // A list of menu options is displayed using span elements.
    // In the right half:
        // A set of icons are rendered using img elements inside a container div.
        // A button for sharing the document is rendered with an image and text.
        // The user profile image is displayed using an img element.

      
// CSS Classes: The component uses several CSS classes to style the header elements, such as font styles, spacing, background color, borders, etc