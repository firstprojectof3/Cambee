import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import MessageBubble from './components/MessageBubble';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: 'init',
      role: 'bot',
      content: '안녕! 궁금한 거 물어봐줘 😊'
    }
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

    const inputToSend = inputText;
    setInputText('');

    try {
      const res = await fetch('http://<서버주소>/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: "1234",  // ⚠️ 실제 user_id로 수정
          message: inputToSend
        })
      });

      const data = await res.json();

      const botMessage = {
        id: Date.now().toString() + '-bot',
        role: 'bot',
        content: data.summary
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('에러 발생:', err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MessageBubble role={item.role} content={item.content} />
        )}
        contentContainerStyle={styles.chatContainer}
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  chatContainer: {
    padding: 10
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10
  }
});