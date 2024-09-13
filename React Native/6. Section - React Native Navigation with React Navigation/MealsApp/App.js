import { Pressable, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

const OPTIONS = { headerStyle: { backgroundColor: '#e6ae2e' }, headerTintColor: 'black', contentStyle: { backgroundColor: '#ffefc9' } }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={OPTIONS}>
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'All Categories' }} />
        <Stack.Screen
          name="Overview"
          component={MealsOverviewScreen}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
