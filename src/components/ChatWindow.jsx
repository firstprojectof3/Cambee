import ChatBubble from "./ChatBubble";

function ChatWindow({ messages }) {
  return (
    <div style={windowStyle}>
      <div style={bubbleAreaStyle}>
        {messages.map((msg, idx) => (
        <ChatBubble key={idx} sender={msg.sender} message={msg.text} />
        ))}
      </div>
    </div>
  );
}

export default ChatWindow;
    
const windowStyle = {
  width: '90%',
  padding: '12px 0',
  display: 'flex',
  justifyContent: 'center',
};

const bubbleAreaStyle = {
  width: '100%',
  maxWidth: '80%', 
};
