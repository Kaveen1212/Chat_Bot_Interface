import React, { useState, useRef } from 'react';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [fullscreenPreview, setFullscreenPreview] = useState(false);
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || attachments.length > 0) {
      console.log('Message sent:', message);
      console.log('Attachments:', attachments);
      console.log('Selected gender:', gender);
      setMessage('');
      setAttachments([]);
      setSelectedFileName(null);
      setPreviewImage(null);
      setShowPreview(false);
      setFullscreenPreview(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      setAttachments(newFiles); // Replace previous attachments instead of adding
      
      const file = newFiles[0]; // Get first file
      setSelectedFileName(file.name);
      
      // Check if file is an image
      if (file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target && event.target.result) {
            setPreviewImage(event.target.result as string);
            setShowPreview(true);
            console.log("Image loaded:", file.name);
          } else {
            console.error("Failed to load image");
          }
        };
        reader.onerror = (error) => {
          console.error("Error reading file:", error);
          setPreviewImage(null);
          setShowPreview(false);
        };
        // Read the file as a data URL
        reader.readAsDataURL(file);
      } else {
        setPreviewImage(null);
        setShowPreview(false);
      }
    }
  };

  return (
    <div className="w-full p-4">
      {/* Fullscreen Preview Modal */}
      {fullscreenPreview && previewImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <img 
              src={previewImage} 
              alt="Fullscreen preview" 
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <button 
              type="button"
              onClick={() => setFullscreenPreview(false)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 cursor-pointer"
              aria-label="Close fullscreen preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Regular Preview Thumbnail */}
      {showPreview && previewImage && !fullscreenPreview && (
        <div className="relative max-w-xs mx-auto mb-4">
          <div className="relative rounded-lg overflow-hidden border border-[#303030] cursor-pointer">
            <img 
              src={previewImage} 
              alt="Attachment preview" 
              className="w-full h-auto object-contain cursor-pointer"
              style={{ maxHeight: "200px", maxWidth: "100%" }}
              onClick={() => setFullscreenPreview(true)}
            />
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the image click
                setShowPreview(false);
                // Keep the file but hide the preview
              }}
              className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1 text-white hover:bg-opacity-70 cursor-pointer"
              aria-label="Close preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Gender Selection */}
      <div className="flex justify-center items-center mb-4">
        <div className="text-white mr-3">Select Gender:</div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setGender('male')}
            className={`px-4 py-2 rounded-full cursor-pointer focus:outline-none transition-colors ${
              gender === 'male' 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#1b1b1b] text-white border border-[#303030]'
            }`}
          >
            Male
          </button>
          <button
            type="button"
            onClick={() => setGender('female')}
            className={`px-4 py-2 rounded-full cursor-pointer focus:outline-none transition-colors ${
              gender === 'female' 
                ? 'bg-pink-600 text-white' 
                : 'bg-[#1b1b1b] text-white border border-[#303030]'
            }`}
          >
            Female
          </button>
        </div>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="flex items-center gap-2 max-w-3xl mx-auto bg-[#1b1b1b] rounded-full px-4 py-3 border border-[#303030] shadow-lg"
      >
        {/* Hidden file input */}
        <input 
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
          accept="image/png,image/jpeg,image/jpg,application/pdf"
        />
        
        {/* Attachment button */}
        <button 
          type="button" 
          className="text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Attach file"
          onClick={() => fileInputRef.current?.click()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94a3 3 0 1 1 4.242 4.242l-10.94 10.94a1.5 1.5 0 0 1-2.121-2.121l7.693-7.693" />
          </svg>
        </button>

        {/* Text input - always showing default placeholder */}
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Enter something about sketch..."
            className="w-full bg-transparent font-light border-none text-white focus:outline-none py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {selectedFileName && (
            <div className="absolute top-0 right-2 text-sm text-green-400 py-2">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.2 12.74a1 1 0 0 0 0-1.48l-7-5A1 1 0 0 0 9 7v10a1 1 0 0 0 1.6.8l7-5Z" />
                </svg>
                File attached
              </span>
            </div>
          )}
        </div>

        {/* Send button */}
        <button 
          type="submit" 
          className="text-gray-400 hover:text-white focus:outline-none disabled:opacity-50 cursor-pointer"
          disabled={!message.trim() && attachments.length === 0}
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;