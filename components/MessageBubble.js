import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessageBubble({ role, content }) {
  const isUser = role === 'user';
  return (
    <View style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    marginVertical: 4,
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10
  },
  userBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end'
  },
  botBubble: {
    backgroundColor: '#EEE',
    alignSelf: 'flex-start'
  },
  text: {
    fontSize: 16
  }
});
