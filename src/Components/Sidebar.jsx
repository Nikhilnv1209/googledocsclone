import React, { useState } from "react";

const Sidebar = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <div
                className={`absolute right-0 top-[5rem] ${toggle ? 'w-[3.5rem]' : 'w-0'} h-[calc(100%-5rem)]
                flex flex-col gap-9 items-center bg-white
                `}
            >
                <div className='optionhover before:w-11  before:h-11'>
                    <a href="https://calendar.google.com/calendar">
                        <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="" className='object-fill w-[20px] h-[20px]' />
                    </a>
                </div>
                <div className='optionhover before:w-11  before:h-11'>
                    <a href="https://keep.google.com">
                        <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="" className='object-fill w-[20px] h-[20px]' />
                    </a>
                </div>
                <div className='optionhover before:w-11  before:h-11'>
                    <a href="https://calendar.google.com/calendar/u/0/r?opentasks=1">
                        <img src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="" className='object-fill w-[20px] h-[20px]' />
                    </a>
                </div>
                <div className='optionhover before:w-11  before:h-11'>
                    <a href="hhttps://contacts.google.com/">
                        <img src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="" className='object-fill w-[20px] h-[20px]' />
                    </a>
                </div>
                <div className='optionhover before:w-11  before:h-11'>
                    <a href="https://www.google.com/maps">
                        <img src="https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png" alt="" className='object-fill w-[20px] h-[20px]' />
                    </a>
                </div>
                <div className='optionhover before:w-11  before:h-11'>
                    <a href="https://drive.google.com/drive/my-drive">
                        <img src="https://w7.pngwing.com/pngs/176/849/png-transparent-google-logo-drive-new-google-new-logos-icon-thumbnail.png" alt="" className='object-fill w-[20px] h-[20px]' />
                    </a>
                </div>
                <div className="bg-gray-300 h-[1.2px] w-4"></div>
                <div className='optionhover before:w-11  before:h-11'>
                    <img src="https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png" alt="" className='object-fill w-[20px] h-[20px]' />
                </div>

            </div>
        </>
    );
};

export default Sidebar;


// Importing React: The code imports the React library to define React components.

// Rendering:

// The Sidebar component returns a JSX fragment (<>...</>) that wraps the sidebar elements.
// The sidebar is an absolute positioned container with a fixed width, positioned at the top-right of the screen.
// Inside the container, there are several div elements representing each option/icon in the sidebar.
// Each option/icon is rendered as a clickable a element with an associated URL.
// The options/icons are displayed using img elements with specific URLs for the icon images.
// The icons have CSS classes applied to them to control their size.
// CSS Classes: The component uses CSS classes to style the sidebar elements, such as positioning, background color, gaps between elements, and styling for hovered options.

// Options/Icons:

// The sidebar includes the following options/icons:
// Google Calendar: Redirects to https://calendar.google.com/calendar.
// Google Keep: Redirects to https://keep.google.com.
// Google Tasks: Redirects to https://calendar.google.com/calendar/u/0/r?opentasks=1.
// Google Contacts: Redirects to https://contacts.google.com/.
// Google Maps: Redirects to https://www.google.com/maps.
// Google Drive: Redirects to https://drive.google.com/drive/my-drive.
// Add Option: Represents an add icon (not associated with a specific URL).
// Divider Line: The sidebar includes a horizontal line, represented by a div element with a gray background color, to separate the options/icons from the add option.