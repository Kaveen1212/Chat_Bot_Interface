import { useState } from "react";
import Slider from "./Slider";
import TopBar from "./Topbat";
import ChatInterface from "./ChatInterface";

const Mainscreen = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string, sender: 'user' | 'bot', image?: string }[]>([]);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div className="relative min-h-screen md:h-screen bg-[#212121] text-white">
      <div className="mt-0 h-20 ">
        <TopBar onToggleSidebar={toggleSlider} />
      </div>
      
      <div
        className={`fixed top-0 left-0 h-full bg-[#181818] shadow-lg transition-transform duration-300 ease-in-out ${
          isSliderOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
        style={{ width: '300px', zIndex: 1000 }}
      >
        <div className="p-4">
          <Slider onClose={toggleSlider} />
        </div>
      </div>
      {isSliderOpen && (
        <div className="fixed inset-0 bg-transparent" />
      )}

      <div className="z-10 relative">
        {/* Only show the heading if there are no messages */}
        {messages.length === 0 && (
          <h1 className="flex items-center md:text-xl lg:text-3xl text-5xl font-bold justify-center mt-80">
            What can I help with?
          </h1>
        )}
        {/* Output always at the top, centered */}
        <div className="flex justify-center w-full pt-8">
          <div className="w-full max-w-4xl">
            <ChatInterface messages={messages} setMessages={setMessages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainscreen;