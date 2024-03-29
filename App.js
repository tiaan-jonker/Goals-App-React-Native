import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import GoalItem from './GoalItem';

export default function App() {
  const [goalInputText, setGoalInputText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setGoalInputText(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goalInputText])
    setGoalInputText('')
  }

  const deleteGoalHandler = (id) => {
    console.log(id)
    setCourseGoals(courseGoals.filter(goal => goal !== id))
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your course goal' 
          onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <GoalItem key={goal} goal={goal} deleteGoalHandler={deleteGoalHandler}/>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }, 
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 6
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
  }
});
