import React from "react";

interface TopBarProps {
  onToggleSidebar?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar }) => {
    // We don't need local state anymore since the parent component manages it
    const toggleSidebar = () => {
        if (onToggleSidebar) {
            onToggleSidebar();
        }
    };

  return (
    <div className="flex items-center justify-between h-full px-4 ">
        {/* Slider open button  */}
        <div className="flex gap-4">
            <div className="">
                <button 
                onClick={toggleSidebar} 
                className="p-1 rounded-md hover:bg-gray-200 transition-colors focus:outline-none"
                aria-label="Toggle sidebar"
                >
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#ffffff">
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                </svg>
                </button>   
            </div>

            <div className="">
                <button 
                className="p-1 rounded-md hover:bg-gray-200 transition-colors focus:outline-none"
                aria-label="Open link"
                >
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280h-80v-280H200v560h280v80H200Zm360 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z"/>
                </svg>
                </button>
            </div>

            <div className="text-2xl">Facetracker</div>

        </div>
        {/* No sidebar here - it's moved to MainScreen */}
    </div>
  );
};

export default TopBar;