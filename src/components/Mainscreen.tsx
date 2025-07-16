
import { useState } from "react";
import Slider from "./Slider";
import TopBar from "./Topbat";
import ChatInterface from "./ChatInterface";

const Mainscreen = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div className="relative min-h-screen fold-wide:h-20 md:h-screen bg-[#212121] text-white">
        <div className="mt-0 h-20 ">
            <TopBar onToggleSidebar={toggleSlider} />
        </div>
        
        {/* Fixed position slider that overlays main content */}
        <div 
          className={`fixed top-0 left-0 h-full bg-[#181818] shadow-lg transition-transform duration-300 ease-in-out ${
            isSliderOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
          style={{ width: '300px', zIndex: 1000 }}
        >
          <div className="p-4">
            <Slider onClose={toggleSlider} />
          </div>
        </div>        {/* Optional overlay when slider is open - removed click handler so slider closes only with X button */}
        {isSliderOpen && (
          <div 
            className="fixed inset-0 bg-transparent"
          />
        )}
        
        <div className="z-10 relative">
          <h1 className="flex items-center md:text-xl lg:text-3xl text-5xl font-bold justify-center mt-60">What can I help with?</h1>
          <div className="flex items-center font-bold justify-center mt-10">
            <ChatInterface/>
          </div>
        </div>
    </div>
  );
};

export default Mainscreen;