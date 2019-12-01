import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState(''); 
  const [courseGoals, setCourseGoals] = useState([]); 

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText); 
  }; 

  const addGoalHandler = () => {
    setEnteredGoal(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal}]); 
  }; 

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]); 
  }; 

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
      </View>
      );        
    }

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }, 
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  }, 
  listItem: {
    padding: 10, 
    backgroundColor: '#ccc', 
    borderColor: 'black', 
    borderWidth: 1
  }
 });

const styles = StyleSheet.create({})



