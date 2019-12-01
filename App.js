import React from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';  
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList,
  Button 
} from 'react-native';


export default function App() {

  const [courseGoals, setCourseGoals] = useState([]); 

  const addGoalHandler = goalTitle => {
    setEnteredGoal(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]); 
  }; 

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
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



