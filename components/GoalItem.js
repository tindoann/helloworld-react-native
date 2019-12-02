import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete} >
      <View style={style.listItem}>
        <Text>{itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
}; 

const removeGoalHandler = goalId => {
  setCourseGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== goalId); 
  }); 
}

const styles = StylesSheet.create({
  listItem: {
    padding: 10, 
    marginVertical: 10, 
    backgroundColor: '#ccc', 
    borderColor: 'black', 
    borderWidth: 1
  }
}); 

export default GoalItem; 