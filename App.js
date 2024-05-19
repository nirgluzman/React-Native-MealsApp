import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// Routing and navigation for Expo and React Native apps, https://reactnavigation.org/docs/getting-started#wrapping-your-app-in-navigationcontainer
import { NavigationContainer } from '@react-navigation/native';

// Native Stack Navigator, https://reactnavigation.org/docs/native-stack-navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories'>
          {/* each screen component (defined by Stack.Screen) is provided with 'route' and 'navigation' prop automatically.
          https://reactnavigation.org/docs/route-prop //
          https://reactnavigation.org/docs/navigation-prop */}
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
