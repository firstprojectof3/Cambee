import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatScreen from './ChatScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
