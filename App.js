import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// Routing and navigation for Expo and React Native apps, https://reactnavigation.org/docs/getting-started#wrapping-your-app-in-navigationcontainer
import { NavigationContainer } from '@react-navigation/native';

// Native Stack Navigator, https://reactnavigation.org/docs/native-stack-navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
