import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 

const GoalItem = props => {
  return (
    <View style={style.listItem}>
      <Text>{itemData.item.value}</Text>
    </View>
  );
}; 

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