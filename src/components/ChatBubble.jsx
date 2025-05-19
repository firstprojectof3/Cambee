function ChatBubble({ sender, message }) {
    const isUser = sender === 'user';

    const bubbleStyle = {
      display: 'inline-block',
      padding: '8px 12px',
      borderRadius: '16px',
      backgroundColor: isUser ? '#e6e6e6' : '#f8f0c6',
      color: '#403d32',
      maxWidth: '70%',
      margin: '4px'
    };
    
    const wrapperStyle = {
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start',
    margin: '12px 0'
    };
    
    return (
      <div style={wrapperStyle}>
        <div style={bubbleStyle}>{message}</div>
      </div>
    );
  }
  
  export default ChatBubble;
  
