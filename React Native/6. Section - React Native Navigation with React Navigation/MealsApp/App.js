import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoritesScreen';
import FavoriteContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const OPTIONS_DRAWER = { drawerStyle: { backgroundColor: '#fff8cf' }, drawerInactiveTintColor: '#b57704', drawerActiveTintColor: "#b57704", headerStyle: { backgroundColor: '#e6ae2e' }, headerTintColor: 'black', contentStyle: { backgroundColor: '#ffefc9' }, sceneContainerStyle: { backgroundColor: '#ffefc9' } };

const OPTIONS_STACK = { headerStyle: { backgroundColor: '#e6ae2e' }, headerTintColor: 'black', contentStyle: { backgroundColor: '#ffefc9' }, sceneContainerStyle: { backgroundColor: '#ffefc9' } };

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={OPTIONS_DRAWER}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => {
          return <Ionicons name="albums-outline" color={color} size={size} />
        }
      }} />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons name="star-outline" color={color} size={size} /> }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <FavoriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={OPTIONS_STACK}>
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{ title: 'All Categories', headerShown: false }}
          />
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
    </FavoriteContextProvider>
  );
}
