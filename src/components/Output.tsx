import { useState, useEffect } from 'react';

const Output = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'tablet' | 'fold-closed' | 'fold-tablet' | 'fold-open' | 'desktop'>('desktop');
  
  // Effect to handle responsive breakpoints including foldable devices
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Setting device mode based on custom breakpoints defined in tailwind.config.js
      if (width < 320) {
        setDeviceMode('mobile');
      } else if (width >= 320 && width < 375) {
        setDeviceMode('fold-closed');
      } else if (width >= 375 && width < 640) {
        setDeviceMode('mobile');
      } else if (width >= 640 && width < 768) {
        setDeviceMode('tablet');
      } else if (width >= 768 && width < 832) {
        setDeviceMode('tablet');
      } else if (width >= 832 && width < 1024) {
        setDeviceMode('fold-tablet');
      } else if (width >= 1024 && width < 1768) {
        setDeviceMode('desktop');
      } else {
        setDeviceMode('fold-open');
      }
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to check if layout should be vertical
  const isVerticalLayout = () => {
    return ['mobile', 'fold-closed', 'tablet'].includes(deviceMode);
  };
  
  // Function to download an image
  const downloadImage = (imageSrc: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to open image in modal
  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col w-full bg-[#535353] items-center justify-center h-full text-white">
        {/* Topic - Responsive across all device sizes */}
        <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8 mb-2 sm:mb-3 md:mb-4 
                      text-xl xs:text-2xl sm:text-2xl md:text-3xl text-center px-2">
          Compare sketch and Real face
        </div>

        <div className={`h-full w-full ${isVerticalLayout() ? 'flex-col' : 'flex'} relative`}>
          {/* Left Section - Sketch */}
          <div className={`${isVerticalLayout() ? 'w-full' : 'flex-1'} 
                          flex flex-col justify-center items-center 
                          p-2 xs:p-3 sm:p-3 md:p-4 fold-tablet:p-5`}>
            <h2 className="text-lg xs:text-xl sm:text-xl md:text-2xl fold-open:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4">
              Sketch Image
            </h2>
            <div className={`w-full 
                           ${deviceMode === 'fold-closed' ? 'max-w-[280px]' : 
                             deviceMode === 'mobile' ? 'max-w-[340px]' : 
                             deviceMode === 'tablet' ? 'max-w-[500px]' : 
                             deviceMode === 'fold-tablet' ? 'max-w-[650px]' :
                             deviceMode === 'fold-open' ? 'max-w-[800px]' : 'max-w-[700px]'}
                           aspect-[7/8] 
                           flex flex-col items-center justify-center overflow-hidden relative`}>
              <button 
                className="absolute top-2 right-2 bg-transparent hover:bg-blue-700 text-white 
                          p-1 xs:p-1.5 sm:p-2 rounded-full z-10"
                onClick={() => downloadImage('./Sketch.jpg', 'sketch-image.jpg')}
                title="Download Sketch"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <img 
                src="./Sketch.jpg" 
                alt="Sketch Image" 
                className="w-full h-full object-cover cursor-pointer" 
                onClick={() => openImageModal('./Sketch.jpg')}
              />
            </div>
          </div>
          
          {/* Dividing Line - Different for vertical vs horizontal layouts */}
          {isVerticalLayout() ? (
            <div className="h-[2px] bg-gray-400 w-4/5 mx-auto my-3 xs:my-4 sm:my-5"></div>
          ) : (
            <div className="w-[2px] bg-gray-400 absolute left-1/2 transform -translate-x-1/2 
                           h-[75%] fold-tablet:h-[80%] fold-open:h-[85%] lg:h-[80%] self-center"></div>
          )}
          
          {/* Right Section - Generated Image */}
          <div className={`${isVerticalLayout() ? 'w-full' : 'flex-1'} 
                          flex flex-col justify-center items-center 
                          p-2 xs:p-3 sm:p-3 md:p-4 fold-tablet:p-5`}>
            <h2 className="text-lg xs:text-xl sm:text-xl md:text-2xl fold-open:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4">
              Generated Image
            </h2>
            <div className={`w-full 
                           ${deviceMode === 'fold-closed' ? 'max-w-[280px]' : 
                             deviceMode === 'mobile' ? 'max-w-[340px]' : 
                             deviceMode === 'tablet' ? 'max-w-[500px]' : 
                             deviceMode === 'fold-tablet' ? 'max-w-[650px]' :
                             deviceMode === 'fold-open' ? 'max-w-[800px]' : 'max-w-[700px]'}
                           aspect-[7/8] 
                           flex flex-col items-center justify-center overflow-hidden relative`}>
              <button 
                className="absolute top-2 right-2 bg-transparent hover:bg-green-700 text-white 
                          p-1 xs:p-1.5 sm:p-2 rounded-full z-10"
                onClick={() => downloadImage('Genarated.png', 'generated-image.png')}
                title="Download Generated Image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <img 
                src="Genarated.png" 
                alt="Generated Image" 
                className="w-full h-full object-cover cursor-pointer" 
                onClick={() => openImageModal('Genarated.png')}
              />
            </div>
          </div>
        </div>

        {/* Image Modal - Responsive for all device types */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 xs:p-3 sm:p-4">
            <div className="relative max-w-[95%] xs:max-w-[93%] sm:max-w-[90%] max-h-[95%] sm:max-h-[90%]">
              <button 
                className="absolute top-1 xs:top-2 sm:top-3 md:top-4 right-1 xs:right-2 sm:right-3 md:right-4 
                          text-white p-1 sm:p-2 rounded-full cursor-pointer"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default Output;