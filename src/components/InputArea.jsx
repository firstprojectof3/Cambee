import { useState } from 'react';

function InputArea({ onSend }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  return (
    <div style={inputWrapperStyle}>
      <input
        type="text"
        value={text}
        placeholder="메시지를 입력하세요"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        style={inputStyle}
      />
      <button onClick={handleSend} style={buttonStyle}>
        전송
      </button>
    </div>
  );
}

export default InputArea;

const inputWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '90%',
  margin: '0 auto',
  maxWidth: '600px',
  padding: '24px 24px 24px 0',
};

const inputStyle = {
  height: '44px',
  flex: 1,
  padding: '10px 16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  height: '44px',
  padding: '10px 16px',
  borderRadius: '8px',
  backgroundColor: '#e6e6e6', 
  color: '#403d32',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
