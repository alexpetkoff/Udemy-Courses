import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');

  const goalsHandler = () => {
    if (text.length === 0) {
      return;
    }
    setGoals(prevGoals => [...prevGoals, { text, id: text + '-' + prevGoals.length }]);
    setText('');
  }

  const GoalsList = () => {
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
          <GoalItem item={item} index={index} />
        }
        alwaysBounceVertical={false}
      />)
  }

  return (
    <View style={styles.container}>
      <GoalInput text={text} setText={setText} goalsHandler={goalsHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of goals:</Text>
        {
          GoalsList()
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#FFFBF5',
  },
  goalsContainer: {
    flex: 6,
    gap: 4,
  },
  noGoalsStyle: {
    textAlign: 'center',
    fontStyle: 'italic',
    backgroundColor: 'lightblue',
    padding: 6,
    borderRadius: 8,
  },
  goalsStyle: {
    marginTop: 6,
    padding: 6,
    backgroundColor: 'lightblue',
    borderRadius: 8,
  }
});

export default App;

// FLEXBOX DEEP DIVE BELOW 
// import React from 'react';
// import { Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={{ paddingTop: 60, flexDirection: 'row', gap: 10, justifyContent: 'space-evenly' }}>
//       <View
//         style={{
//           backgroundColor: 'red',
//           width: 100,
//           height: 100,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text>1</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'blue',
//           width: 100,
//           height: 100,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text>2</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'green',
//           width: 100,
//           height: 100,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// }