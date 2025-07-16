import React, { useState } from 'react';

interface SliderProps {
  onClose?: () => void;
}

const Slider: React.FC<SliderProps> = ({ onClose }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="">
        <div className="flex items-center justify-between w-full">
            <div className="mt-2 ml-2 text-lg">Facetracker</div>
            <div className="cursor-pointer mr-2" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </div>

        {/* New Chat  */}
        <div className="mt-4 flex">
            <button className="w-full bg-[#181818] flex gap-5 text-white p-2 rounded-md hover:bg-[#242424] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#ffff">
                    <path d="M120-160v-600q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v203q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5v-203H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120-160Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm400 280v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM200-360v-400 400Z"/>
                </svg>
                <h4 className='text-lg'>New Chat</h4>
            </button>
        </div>

        {/* Search  */}
        <div className="mt-4 flex">
            <button className="w-full bg-[#181818] flex gap-5 text-white p-2 rounded-md hover:bg-[#242424] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#ffff">
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>
                <h4 className='text-lg'>Search chats</h4>
            </button>
        </div>

        {/* Chat history  */}
        <div className=''>
            <div className='font-light text-gray-400 text-s my-10'>chats</div>            <div className='w-full bg-[#181818] flex text-white p-2 rounded-md hover:bg-[#242424] transition-colors items-center justify-between relative'>
                {/* Goto the old chat  */}
                <button className="">
                    <h4 className='text-lg'>Galle robary</h4>
                </button>                <div className="relative">
                    <button 
                        className="p-1 rounded-md hover:bg-gray-200 transition-colors focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff">
                            <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/>
                        </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                        className={`absolute right-0 mt-2 ${isMenuOpen ? '' : 'hidden'} bg-[#242424] rounded-md shadow-lg z-10 border border-gray-700`}
                        style={{width: "150px"}}
                    >
                        <div className="py-1">
                            <button className="text-white flex items-center px-4 py-2 w-full text-left hover:bg-[#323232] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff">
                                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-40 80q-17 0-28.5-11.5T120-160v-97q0-16 6-30.5t17-25.5l505-504q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L313-143q-11 11-25.5 17t-30.5 6h-97Zm600-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                                </svg>
                                Rename
                            </button>
                            <button className="text-white flex items-center px-4 py-2 w-full text-left hover:bg-[#323232] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff">
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                </svg>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Slider;