import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={{ 
          width: '80%', 
          borderColor: 'black', 
          borderWidth: 1, 
          padding: 10
        }}
      />
      <Button title="ADD" />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }, 
  inputContainer: {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
 }
});

const styles = StyleSheet.create({})



