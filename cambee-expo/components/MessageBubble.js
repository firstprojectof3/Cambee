import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessageBubble({ role, content }) {
  const isUser = role === 'user';

  return (
    <View
      style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.botBubble
      ]}
    >
      <Text style={styles.text}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 4
  },
  userBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end'
  },
  botBubble: {
    backgroundColor: '#eee',
    alignSelf: 'flex-start'
  },
  text: {
    fontSize: 16
  }
});
