import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// Routing and navigation for Expo and React Native apps, https://reactnavigation.org/docs/getting-started#wrapping-your-app-in-navigationcontainer
import { NavigationContainer } from '@react-navigation/native';

// import Drawer Navigator, https://reactnavigation.org/docs/drawer-navigator/
import { createDrawerNavigator } from '@react-navigation/drawer';

// Native Stack Navigator, https://reactnavigation.org/docs/native-stack-navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen.js';
import MealDetailScreen from './screens/MealDetailScreen.js';
import FavoritesScreen from './screens/FavoritesScreen.js';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' } // contentStyle in Stack.Navigator
      }}>
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{ title: 'All Categories' }}
      />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MealsCategories' // initial screen to show; if it is not set here, the first screen in the navigator will be shown.
          screenOptions={{
            // options to configure the default style for all screens.
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
          {/* each screen component (defined by Stack.Screen) is provided with 'route' and 'navigation' prop automatically.
          https://reactnavigation.org/docs/route-prop //
          https://reactnavigation.org/docs/navigation-prop */}
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              // options to configure the screen specific style, https://reactnavigation.org/docs/native-stack-navigator#options
              // title: 'All Categories',
              headerShown: false // remove header from the screen, as we use the Drawer Navigator.
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={{
              title: 'About the Meal'
              //   headerRight: () => {
              //     // function which returns a React Element to display on the right side of the header.
              //     return <Button title='Tap me!' onPress={ } />;
              //   }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
