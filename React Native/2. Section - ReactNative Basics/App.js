import { useState, } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  Pressable,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [finishedGoals, setFinishedGoals] = useState([]);
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const goalsHandler = () => {
    if (text.length === 0) {
      return;
    }
    setGoals(prevGoals => [...prevGoals, { text, id: text + '-' + prevGoals.length }]);
    setText('');
  }

  function actionsGoalHandler(index, action) {

    if (action === 'undo') {
      const item = finishedGoals.find((item, i) => i === index);

      setGoals(prevGoals => [...prevGoals, item]);
      setFinishedGoals(prevGoals => prevGoals.filter((item, i) => i !== index));
    }

    if (action === 'delete') {
      Alert.alert(
        "Confirm Action",
        "What do you want to do with this goal?",
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'Delete',
            onPress: () => {
              setFinishedGoals(prevGoals => prevGoals.filter((item, i) => i !== index));
            },
            style: 'destructive'
          }
        ]
      )
    }

    if (action === undefined) {

      Alert.alert(
        "Confirm Action",
        "What do you want to do with this goal?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Delete",
            onPress: () => {
              setGoals(prevGoals => prevGoals.filter((item, i) => i !== index));
            },
            style: "destructive"
          },
          {
            text: "Finish",
            onPress: () => {
              const selectedGoal = goals[index];
              setGoals(prevGoals => prevGoals.filter((item, i) => i !== index));
              setFinishedGoals(prevGoals => [...prevGoals, selectedGoal]);
            },
            style: "default"
          }
        ],
      );
    }
  }

  const ActiveGoalsList = () => {
    if (goals.length === 0) {
      return (
        <View style={styles.noGoalsStyle}>
          <Text >No goals added yet!</Text>
        </View>
      )
    }

    return (
      <FlatList
        keyExtractor={(item) => item.id}
        data={goals}
        renderItem={({ item, index }) =>
          <GoalItem item={item} index={index} actionsGoalHandler={actionsGoalHandler} />
        }
        alwaysBounceVertical={false}
      />)
  }

  const FinishedGoalsList = () => {
    if (finishedGoals.length === 0) {
      return (
        <View style={styles.noGoalsStyle}>
          <Text >No goals finished yet!</Text>
        </View>
      )
    }

    return (
      <FlatList
        keyExtractor={(item) => item.id}
        data={finishedGoals}
        refreshing={true}
        renderItem={({ item, index }) =>
          <GoalItem item={item} index={index} type='finished' actionsGoalHandler={actionsGoalHandler} />
        }
        alwaysBounceVertical={true}
      />)
  }

  return (
    <View style={styles.container}>

      {
        isVisible &&
        <GoalInput text={text} setText={setText} goalsHandler={goalsHandler} isVisible={isVisible} setIsVisible={setIsVisible} />
      }
      <View style={styles.goalsContainer}>
        <Text>Active Goals:</Text>
        {
          ActiveGoalsList()
        }
      </View>
      <View style={styles.goalsFinishedContainer}>
        <Text>Finished Goals:</Text>
        {
          FinishedGoalsList()
        }
      </View>
      <View style={{ alignItems: 'center', marginTop: 12 }}>
        <Pressable style={styles.button} onPress={() => setIsVisible(!isVisible)}>
          <Text>Add Goal</Text>
        </Pressable>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 40,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'skyblue',
  },
  goalsContainer: {
    flex: 6,
    gap: 4,
  },
  goalsFinishedContainer: {
    flex: 6,
    gap: 4,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: 'lightblue',
  },
  noGoalsStyle: {
    textAlign: 'center',
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 8,
    marginTop: 6
  },
  goalsStyle: {
    marginTop: 6,
    padding: 6,
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    borderWidth: 2,
    borderColor: '#b3f1ff',
  }
});

export default App;