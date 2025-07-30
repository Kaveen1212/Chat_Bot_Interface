function Output({ messages }: { messages: { text: string, sender: 'user' | 'bot', image?: string }[] }) {
  return (
    <div className="flex flex-col gap-4 w-4xl mb-4">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`
            px-4 py-2 rounded-2xl shadow-lg
            ${msg.sender === 'user' ? 'bg-[#23272f] text-white max-w-xs' : 'bg-[#181a20] text-white max-w-xl'}
            ${msg.sender === 'user' ? 'rounded-br-none' : 'rounded-bl-none'}
          `}>
            {msg.image && (
              <img src={msg.image} alt="attachment" className="mb-2 rounded max-h-32" />
            )}
            <span className="whitespace-pre-line">{msg.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Output;