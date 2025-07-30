import React, { useState, useRef } from 'react';
import Output from './Output';

const ChatInterface = ({
  messages,
  setMessages,
}: {
  messages: { text: string, sender: 'user' | 'bot', image?: string }[];
  setMessages: React.Dispatch<React.SetStateAction<{ text: string, sender: 'user' | 'bot', image?: string }[]>>;
}) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [fullscreenPreview, setFullscreenPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || attachments.length > 0) {
      setMessages(prev => [
        ...prev,
        previewImage
          ? { text: message, sender: 'user', image: previewImage }
          : { text: message, sender: 'user' }
      ]);
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: "This is a bot response.", sender: 'bot' }
        ]);
      }, 500);

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
      setAttachments(newFiles);
      const file = newFiles[0];
      setSelectedFileName(file.name);
      if (file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target && event.target.result) {
            setPreviewImage(event.target.result as string);
            setShowPreview(true);
          }
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewImage(null);
        setShowPreview(false);
      }
    }
  };

  return (
    <div className="w-full flex flex-col">
      <Output messages={messages} />
      <div className="fixed bottom-0 left-0 w-full z-10">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 max-w-4xl mx-auto px-6 py-3 border border-gray-800 rounded-xl bg-[#232323] shadow-lg mb-10"
        >
          
          <button
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none cursor-pointer mr-2"
            aria-label="Attach file"
            onClick={() => fileInputRef.current?.click()}
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <svg width="22" height="22" viewBox="210 150 20 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M226,155 L226,175 C226,178.313 223.313,181 220,181 C216.687,181 214,178.313 214,175 L214,157 C214,154.791 215.791,153 218,153 C220.209,153 222,154.791 222,157 L222,175 C222,176.104 221.104,177 220,177 C218.896,177 218,176.104 218,175 L218,159 L216,159 L216,175 C216,177.209 217.791,179 220,179 C222.209,179 224,177.209 224,175 L224,157 C224,153.687 221.313,151 218,151 C214.687,151 212,153.687 212,157 L212,176 C212.493,179.945 215.921,183 220,183 C224.079,183 227.507,179.945 228,176 L228,155 L226,155"/>
            </g>
          </svg>
          </button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          
          <input
            type="text"
            className="flex-1 bg-transparent text-white px-0 py-2 focus:outline-none"
            placeholder="Type your message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            style={{ minWidth: 0 }} 
          />
          <button
            type="submit"
            className="text-gray-400 hover:text-white focus:outline-none disabled:opacity-50 cursor-pointer ml-2 z-30"
            disabled={!message.trim() && attachments.length === 0}
            aria-label="Send message"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <svg width="22" height="22" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6667 31.3333L51 2M21.6667 31.3333L31 50C31.117 50.2553 31.3048 50.4717 31.5412 50.6233C31.7776 50.775 32.0525 50.8557 32.3333 50.8557C32.6142 50.8557 32.8891 50.775 33.1255 50.6233C33.3618 50.4717 33.5497 50.2553 33.6667 50L51 2M21.6667 31.3333L3 22C2.74469 21.883 2.52834 21.6952 2.37666 21.4588C2.22498 21.2224 2.14435 20.9475 2.14435 20.6667C2.14435 20.3858 2.22498 20.1109 2.37666 19.8745C2.52834 19.6382 2.74469 19.4503 3 19.3333L51 2" 
                stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;