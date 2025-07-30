import React from "react";

interface TopBarProps {
  onToggleSidebar?: () => void;
  onNewChat?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar, onNewChat }) => {
  const toggleSidebar = () => {
    if (onToggleSidebar) onToggleSidebar();
  };
  const handleNewChat = () => {
    if (onNewChat) onNewChat();
  };

  return (
    <>
  

  {/* Sidebar */}
  <div className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-6 px-2 bg-[#181818] z-20">
    {/* Sidebar toggle icon */}
    <button
      onClick={toggleSidebar}
      className="p-2 rounded-md text-gray-400 hover:bg-gray-200 hover:text-black transition-colors focus:outline-none mb-4"
      aria-label="Toggle sidebar"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="currentColor">
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
      </svg>
    </button>

    {/* New Chat icon */}
    <button
      onClick={handleNewChat}
      className="p-2 rounded-md text-gray-400 hover:bg-gray-200 hover:text-black transition-colors focus:outline-none mb-4"
      aria-label="New chat"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>

    {/* Other icons or logo */}
    <button
      className="p-2 rounded-md text-gray-400 hover:bg-gray-200 hover:text-black transition-colors focus:outline-none mb-4"
      aria-label="Open link"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="currentColor">
        <path d="M120-160v-600q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v203q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5v-203H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120-160Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm400 280v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM200-360v-400 400Z"/>
      </svg>
    </button>
  </div>
</>
  );
};

export default TopBar;