import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import MessageBubble from './components/MessageBubble';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', role: 'bot', content: '안녕! 무엇을 도와줄까?' }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    try {
      const res = await fetch('http://<your-fastapi-url>/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputText })
      });
      const data = await res.json();

      const botMessage = {
        id: Date.now().toString() + '-bot',
        role: 'bot',
        content: data.reply
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('에러:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MessageBubble role={item.role} content={item.content} />}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="메시지를 입력하세요"
        />
        <Button title="전송" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#ccc'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10
  }
});
